/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExchangeProxy, ExchangeProxyInterface } from "../ExchangeProxy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "exchange",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchange",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Orders.Ask",
        name: "askOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "askHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Orders.Bid",
        name: "bidOrder",
        type: "tuple",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isClaimerWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "setClaimerWhitelisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350336000908152600160208190526040909120805460ff191690911790556111a68061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806342cdf0a714610067578063715018a61461009f5780638da5cb5b146100a9578063b21eee37146100c4578063c8f1d8ce146100d7578063f2fde38b146100ea575b600080fd5b61008a610075366004610d3e565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100a76100fd565b005b6000546040516001600160a01b039091168152602001610096565b6100a76100d2366004610d5f565b61017a565b6100a76100e5366004610d95565b61021e565b6100a76100f8366004610d3e565b61066e565b6000546001600160a01b031633146101305760405162461bcd60e51b815260040161012790610f90565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146101a45760405162461bcd60e51b815260040161012790610f90565b6001600160a01b0382166101f35760405162461bcd60e51b815260206004820152601660248201527553484f59553a20494e56414c49445f4144445245535360501b6044820152606401610127565b6001600160a01b03919091166000908152600160205260409020805460ff1916911515919091179055565b3360009081526001602052604090205460ff166102705760405162461bcd60e51b815260206004820152601060248201526f29a427acaa9d102327a92124a22222a760811b6044820152606401610127565b600061027b83610758565b825190915081146102c65760405162461bcd60e51b81526020600482015260156024820152740a6909eb2aa7440aa9c9a82a886908a88be9082a69605b1b6044820152606401610127565b60208201516001600160a01b03166103185760405162461bcd60e51b815260206004820152601560248201527429a427acaa9d1024a72b20a624a22fa9a4a3a722a960591b6044820152606401610127565b60808201516001600160a01b03166103725760405162461bcd60e51b815260206004820152601860248201527f53484f59553a20494e56414c49445f524543495049454e5400000000000000006044820152606401610127565b61040961037e83610837565b83602001518460c001518560e00151866101000151896001600160a01b0316633644e5156040518163ffffffff1660e01b815260040160206040518083038186803b1580156103cc57600080fd5b505afa1580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104049190610ee4565b6108c2565b60008260600151836040015161041f919061111e565b60a085015160208501516040516323b872dd60e01b81526001600160a01b0391821660048201523060248201526044810184905292935016906323b872dd90606401602060405180830381600087803b15801561047b57600080fd5b505af115801561048f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b39190610ec8565b5060a084015160405163095ea7b360e01b81526001600160a01b038781166004830152602482018490529091169063095ea7b390604401602060405180830381600087803b15801561050457600080fd5b505af1158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c9190610ec8565b50846001600160a01b03166344f09d11858560400151866060015187608001518860a001516040518663ffffffff1660e01b8152600401610581959493929190610fc5565b602060405180830381600087803b15801561059b57600080fd5b505af11580156105af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d39190610ec8565b506105dd84610758565b7f354b7dd66544b34ed0bc6aab76a8d4131aa88ca9c3d2229c43b01a1b661197ab8685602001518660400151876060015188608001518960a0015160405161065f969594939291906001600160a01b0396871681529486166020860152604085019390935260608401919091528316608083015290911660a082015260c00190565b60405180910390a25050505050565b6000546001600160a01b031633146106985760405162461bcd60e51b815260040161012790610f90565b6001600160a01b0381166106fd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610127565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516020808301516040808501516060860151608087015160a088015160c089015160e08a01516101008b01518051908a0120965160009a6108199a7f17fdf8831f8bd77353b30f42ba9bc64e7144545a42a890389f298feeb45dec889a9199919897969594939201998a526001600160a01b0398891660208b015296881660408a01526060890195909552608088019390935290851660a0870152841660c086015290921660e08401526101008301919091526101208201526101400190565b6040516020818303038152906040528051906020012090505b919050565b80516020808301516040808501516060860151608087015160a08801519351600097610819977fb98e1dc48988064e6dfb813618609d7da80a8841e5f277039788ac4b50d497b297919691959493920196875260208701959095526001600160a01b03938416604087015260608601929092526080850152811660a08401521660c082015260e00190565b60405161190160f01b60208201526022810182905260428101879052600090606201604051602081830303815290604052805190602001209050610906863b151590565b15610a1657604080516020810186905280820185905260f887901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b03881691631626ba7e9161096c918591606501610f6f565b60206040518083038186803b15801561098457600080fd5b505afa158015610998573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bc9190610efc565b6001600160e01b031916631626ba7e60e01b14610a115760405162461bcd60e51b815260206004820152601360248201527214d213d6554e8815539055551213d492569151606a1b6044820152606401610127565b610a78565b856001600160a01b0316610a2c82878787610a81565b6001600160a01b031614610a785760405162461bcd60e51b815260206004820152601360248201527214d213d6554e8815539055551213d492569151606a1b6044820152606401610127565b50505050505050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610af35760405162461bcd60e51b815260206004820181905260248201527f53484f59553a20494e56414c49445f5349474e41545552455f535f56414c55456044820152606401610127565b8360ff16601b1480610b0857508360ff16601c145b610b545760405162461bcd60e51b815260206004820181905260248201527f53484f59553a20494e56414c49445f5349474e41545552455f565f56414c55456044820152606401610127565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015610ba8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610c0b5760405162461bcd60e51b815260206004820152601860248201527f53484f59553a20494e56414c49445f5349474e415455524500000000000000006044820152606401610127565b95945050505050565b80356001600160a01b038116811461083257600080fd5b600082601f830112610c3b578081fd5b813567ffffffffffffffff811115610c5557610c55611149565b610c68601f8201601f19166020016110ed565b818152846020838601011115610c7c578283fd5b816020850160208301379081016020019190915292915050565b6000610120808385031215610ca9578182fd5b610cb2816110ed565b91505081358152610cc560208301610c14565b60208201526040820135604082015260608201356060820152610cea60808301610c14565b6080820152610cfb60a08301610c14565b60a0820152610d0c60c08301610d2d565b60c082015260e082013560e082015261010080830135818301525092915050565b803560ff8116811461083257600080fd5b600060208284031215610d4f578081fd5b610d5882610c14565b9392505050565b60008060408385031215610d71578081fd5b610d7a83610c14565b91506020830135610d8a8161115f565b809150509250929050565b6000806000610160808587031215610dab578182fd5b610db485610c14565b9350602085013567ffffffffffffffff80821115610dd0578384fd5b818701915061018080838a031215610de6578485fd5b610def816110ed565b9050610dfa83610c14565b8152610e0860208401610c14565b60208201526040830135604082015260608301356060820152610e2d60808401610c14565b6080820152610e3e60a08401610c14565b60a0820152610e4f60c08401610c14565b60c082015260e083013560e08201526101008084013583811115610e71578687fd5b610e7d8b828701610c2b565b8284015250506101209150610e93828401610d2d565b91810191909152610140828101359082015290820135918101919091529150610ebf8560408601610c96565b90509250925092565b600060208284031215610ed9578081fd5b8151610d588161115f565b600060208284031215610ef5578081fd5b5051919050565b600060208284031215610f0d578081fd5b81516001600160e01b031981168114610d58578182fd5b60008151808452815b81811015610f4957602081850181015186830182015201610f2d565b81811115610f5a5782602083870101525b50601f01601f19169290920160200192915050565b600083825260406020830152610f886040830184610f24565b949350505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060a08252610fe160a0830188516001600160a01b03169052565b60208701516001600160a01b03811660c084015250604087015160e0830152606087015161010081818501526080890151915061012061102b818601846001600160a01b03169052565b60a08a01519250610140611049818701856001600160a01b03169052565b60c08b01519350610160611067818801866001600160a01b03169052565b60e08c015194506101808581890152848d01519550806101a089015250611092610220880186610f24565b9450828c015193506110aa6101c088018560ff169052565b908b01516101e087015299909901516102008501525060208301969096525060408101939093526001600160a01b03918216606084015216608090910152919050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561111657611116611149565b604052919050565b600081600019048311821515161561114457634e487b7160e01b81526011600452602481fd5b500290565b634e487b7160e01b600052604160045260246000fd5b801515811461116d57600080fd5b5056fea2646970667358221220c15be7b6446c5aef93857b1c9e01b9b8fff6e90c9e8cf7b0714dff700ae60b3e64736f6c63430008030033";

export class ExchangeProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExchangeProxy> {
    return super.deploy(overrides || {}) as Promise<ExchangeProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExchangeProxy {
    return super.attach(address) as ExchangeProxy;
  }
  connect(signer: Signer): ExchangeProxy__factory {
    return super.connect(signer) as ExchangeProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeProxyInterface {
    return new utils.Interface(_abi) as ExchangeProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeProxy {
    return new Contract(address, _abi, signerOrProvider) as ExchangeProxy;
  }
}
