// SPDX-License-Identifier: MIT

pragma solidity =0.8.3;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./interfaces/INFT721.sol";
import "./base/ERC20SnapshotInitializable.sol";
import "./libraries/Orders.sol";

contract NFT721GovernanceToken is ERC20SnapshotInitializable {
    using SafeERC20 for IERC20;
    using Orders for Orders.Ask;

    struct SellProposal {
        bool executed;
        address strategy;
        address currency;
        uint256 deadline;
        bytes params;
        uint256 expiration;
        uint256 snapshotId;
    }

    event Mint(address indexed account, uint256 balance);
    event Burn(address indexed account, uint256 balance);

    event SubmitSellProposal(uint256 id, uint256 snapshotId, address indexed from, uint256 power);
    event ConfirmSellProposal(uint256 id, address indexed from, uint256 power);
    event RevokeSellProposal(uint256 id, address indexed from, uint256 power);
    event ExecuteSellProposal(uint256 id);

    uint256 internal constant TOTAL_SUPPLY = 100e18;

    address nft;
    uint256 tokenId;
    uint8 minimumQuorum; // out of 100

    SellProposal[] public proposals;
    mapping(uint256 => uint256) public totalPowerOf;
    mapping(uint256 => mapping(address => uint256)) public powerOf;

    mapping(uint256 => bool) internal _sold;

    function initialize(uint256 _tokenId, uint8 _minimumQuorum) external initializer {
        __ERC20_init("Shoyu NFT-721 Governance", "gNFT721");
        require(_minimumQuorum <= 100, "SHOYU: INVALID_MINIMUM_QUORUM");

        nft = msg.sender;
        tokenId = _tokenId;
        minimumQuorum = _minimumQuorum;
    }

    function proposalsLength() external view returns (uint256) {
        return proposals.length;
    }

    function mint(address account, uint256 amount) external {
        require(nft == msg.sender, "SHOYU: FORBIDDEN");

        _mint(account, amount);

        emit Mint(account, amount);
    }

    function claimPayout(uint256 id) external {
        SellProposal storage proposal = proposals[id];

        if (!_sold[id]) {
            bytes32 hash = _hashOrder(proposal);
            require(INFT721(nft).amountFilled(hash) > 0, "SHOYU: NOT_SOLD");

            _sold[id] = true;
        }

        uint256 share = balanceOf(msg.sender);
        require(share > 0, "SHOYU: INSUFFICIENT_BALANCE");
        _burn(msg.sender, share);

        address _currency = proposal.currency;
        uint256 payout = IERC20(_currency).balanceOf(address(this));
        uint256 amount = (payout * share) / totalSupply();
        IERC20(_currency).safeTransfer(msg.sender, amount);

        emit Burn(msg.sender, amount);
    }

    function _hashOrder(SellProposal storage proposal) internal view returns (bytes32) {
        Orders.Ask memory ask =
            Orders.Ask(
                address(this),
                nft,
                tokenId,
                1,
                proposal.strategy,
                proposal.currency,
                proposal.deadline,
                proposal.params,
                uint8(0),
                "",
                ""
            );
        return ask.hash();
    }

    function submitSellProposal(
        address strategy,
        address currency,
        uint256 deadline,
        bytes calldata params,
        uint256 expiration
    ) external {
        require(block.number < expiration, "SHOYU: EXPIRED");

        uint256 power = balanceOf(msg.sender);
        require(power > 0, "SHOYU: INSUFFICIENT_POWER");

        uint256 id = proposals.length;
        uint256 snapshotId = _snapshot();

        proposals.push(SellProposal(false, strategy, currency, deadline, params, expiration, snapshotId));
        totalPowerOf[id] = power;
        powerOf[id][msg.sender] = power;

        emit SubmitSellProposal(id, snapshotId, msg.sender, power);
    }

    function confirmSellProposal(uint256 id) external {
        SellProposal storage proposal = proposals[id];
        require(!proposal.executed, "SHOYU: EXECUTED");
        require(block.number <= proposal.expiration, "SHOYU: EXPIRED");
        require(totalPowerOf[id] > 0, "SHOYU: NOT_SUBMITTED");
        require(powerOf[id][msg.sender] == 0, "SHOYU: CONFIRMED");

        uint256 power = balanceOfAt(msg.sender, proposal.snapshotId);
        require(power > 0, "SHOYU: INSUFFICIENT_POWER");

        totalPowerOf[id] += power;
        powerOf[id][msg.sender] = power;

        emit ConfirmSellProposal(id, msg.sender, power);

        if (totalPowerOf[id] > _minPower()) {
            _executeSellProposal(proposal);

            emit ExecuteSellProposal(id);
        }
    }

    function revokeSellProposal(uint256 id) external {
        SellProposal storage proposal = proposals[id];
        require(!proposal.executed, "SHOYU: EXECUTED");
        require(block.number <= proposal.expiration, "SHOYU: EXPIRED");

        uint256 power = powerOf[id][msg.sender];
        require(power > 0, "SHOYU: NOT_CONFIRMED");

        totalPowerOf[id] -= power;
        powerOf[id][msg.sender] = 0;

        emit RevokeSellProposal(id, msg.sender, power);
    }

    function executeSellProposal(uint256 id) public {
        SellProposal storage proposal = proposals[id];
        require(proposal.expiration < block.number, "SHOYU: NOT_FINISHED");
        require(totalPowerOf[id] > _minPower(), "SHOYU: NOT_SUBMITTED");

        _executeSellProposal(proposal);

        emit ExecuteSellProposal(id);
    }

    function _minPower() internal view returns (uint256) {
        return (TOTAL_SUPPLY * minimumQuorum) / 100;
    }

    function _executeSellProposal(SellProposal storage proposal) internal {
        proposal.executed = true;

        //        INFT721(nft).submitOrder(tokenId, 1, proposal.strategy, proposal.currency, proposal.deadline, proposal.params);
    }
}
