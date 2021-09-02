/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155ExchangeV0,
  ERC1155ExchangeV0Interface,
} from "../ERC1155ExchangeV0";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
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
    name: "Bid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "Cancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "amountFilled",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "bestBid",
    outputs: [
      {
        internalType: "address",
        name: "bidder",
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
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "bidRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "bidReferrer",
        type: "address",
      },
    ],
    name: "bid",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "bid",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft",
        type: "address",
      },
    ],
    name: "canTrade",
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
    inputs: [
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
        name: "order",
        type: "tuple",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isCancelledOrClaimed",
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
    name: "royaltyFeeInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162002717380380620027178339810160408190526200003491620002fe565b6200003e62000102565b606081811b6001600160601b03191660c09081524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f4fdf0620a3532af4c8ec18e6d2bb1998fa95f9f32c9175ffa457343d5d92efbc918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc694810194909452608084019190915230908301520160408051601f198184030181529190528051602090910120608052506200032e565b600054610100900460ff16806200011c575060005460ff16155b620001745760405162461bcd60e51b815260206004820152602e6024820152600080516020620026f783398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600054610100900460ff1615801562000197576000805461ffff19166101011790555b620001a1620001b7565b8015620001b4576000805461ff00191690555b50565b600054610100900460ff1680620001d1575060005460ff16155b620002255760405162461bcd60e51b815260206004820152602e6024820152600080516020620026f783398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016200016b565b600054610100900460ff1615801562000248576000805461ffff19166101011790555b620001a1600054610100900460ff168062000266575060005460ff16155b620002ba5760405162461bcd60e51b815260206004820152602e6024820152600080516020620026f783398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016200016b565b600054610100900460ff16158015620002dd576000805461ffff19166101011790555b6000805462ff0000191690558015620001b4576000805461ff001916905550565b60006020828403121562000310578081fd5b81516001600160a01b038116811462000327578182fd5b9392505050565b60805160a05160c05160601c61238162000376600039600081816101fb0152818161089e01528181610d4601526110100152600061071d0152600061074501526123816000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063559f05dc11610071578063559f05dc146101275780635771f9971461013a57806375e6590f146101ce578063c45a0155146101ee578063def2716414610225578063e331a71514610238576100a8565b8062893bf8146100ad5780630935d663146100c25780633644e515146100d557806344f09d11146100f057806350bf994a14610113575b600080fd5b6100c06100bb366004611f7c565b61025b565b005b6100c06100d0366004611f7c565b610357565b6100dd610717565b6040519081526020015b60405180910390f35b6101036100fe366004612082565b61080e565b60405190151581526020016100e7565b6040805160008082526020820152016100e7565b610103610135366004611ec7565b61087c565b61018f610148366004611f3c565b60016020819052600091825260409091208054918101546002820154600383015460048401546005909401546001600160a01b039586169593949293918216929091169086565b604080516001600160a01b03978816815260208101969096528501939093529084166060840152909216608082015260a081019190915260c0016100e7565b6100dd6101dc366004611f3c565b60036020526000908152604090205481565b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016100e7565b610103610233366004611faf565b610923565b610103610246366004611f3c565b60026020526000908152604090205460ff1681565b80516001600160a01b031633146102ac5760405162461bcd60e51b815260206004820152601060248201526f29a427acaa9d102327a92124a22222a760811b60448201526064015b60405180910390fd5b60006102b782610a6a565b6000818152600160205260409020549091506001600160a01b0316156103135760405162461bcd60e51b815260206004820152601160248201527053484f59553a204249445f45584953545360781b60448201526064016102a3565b600081815260026020526040808220805460ff191660011790555182917fe8d9861dbc9c663ed3accd261bbe2fe01e0d3d9e5f51fa38523b265c7757a93a91a25050565b60005460ff62010000909104161515600114156103865760405162461bcd60e51b81526004016102a3906121b6565b6000805462ff000019166201000017905560208101516103a59061087c565b6103eb5760405162461bcd60e51b815260206004820152601760248201527653484f59553a20494e56414c49445f45584348414e474560481b60448201526064016102a3565b60006103f682610a6a565b90506104028282610b48565b61042a818360000151846101200151856101400151866101600151610425610717565b610e33565b600081815260016020818152604092839020835160c08101855281546001600160a01b0390811680835294830154938201939093526002820154818601819052600383015484166060830152600480840154851660808085019190915260059094015460a084018190529389015160e08a01516101008b01519851636511995160e01b8152949891909616966365119951966104d39690959294919391928492849291016121e0565b60206040518083038186803b1580156104eb57600080fd5b505afa1580156104ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105239190611f1c565b6105605760405162461bcd60e51b815260206004820152600e60248201526d53484f59553a204641494c55524560901b60448201526064016102a3565b60c08301516001600160a01b038116610577575082515b600083815260026020908152604091829020805460ff1916600117905560a0860151845191850151928501516105bb9391929185916105b69190612296565b610ff2565b6106075760405162461bcd60e51b815260206004820152601f60248201527f53484f59553a204641494c45445f544f5f5452414e534645525f46554e44530060448201526064016102a3565b60208083015160008581526003909252604090912054610627919061225e565b60008481526003602052604090205560608201516001600160a01b03811661064d575081515b61066a856020015186600001518388604001518760200151611225565b600084815260016020818152604080842080546001600160a01b031990811682559381018590556002810185905560038101805485169055600481018054909416909355600590920192909255845191850151858201516080870151925188947f0642c67a22e8657a7126bb3b9fb3f01965503642f884e4c6a1efd8ed24f46c0d946106fc9491939192889190612158565b60405180910390a250506000805462ff000019169055505050565b600080467f0000000000000000000000000000000000000000000000000000000000000000141561076957507f0000000000000000000000000000000000000000000000000000000000000000610809565b604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f4fdf0620a3532af4c8ec18e6d2bb1998fa95f9f32c9175ffa457343d5d92efbc918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c0016040516020818303038152906040528051906020012090505b905090565b6000805460ff620100009091041615156001141561083e5760405162461bcd60e51b81526004016102a3906121b6565b6000805462ff00001916620100001790556108668661085c81610a6a565b33888888886112ab565b6000805462ff0000191690559695505050505050565b6040516345943ee160e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906345943ee19060240160206040518083038186803b1580156108e257600080fd5b505afa1580156108f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091a9190611f1c565b1590505b919050565b6000805460ff62010000909104161515600114156109535760405162461bcd60e51b81526004016102a3906121b6565b6000805462ff000019166201000017815561096d84610a6a565b835190915081146109b85760405162461bcd60e51b81526020600482015260156024820152740a6909eb2aa7440aa9c9a82a886908a88be9082a69605b1b60448201526064016102a3565b60208301516001600160a01b0316610a0a5760405162461bcd60e51b815260206004820152601560248201527429a427acaa9d1024a72b20a624a22fa9a4a3a722a960591b60448201526064016102a3565b610a33610a1684611744565b84602001518560c001518660e00151876101000151610425610717565b610a56848285602001518660400151876060015188608001518960a001516112ab565b6000805462ff000019169055949350505050565b80516020808301516040808501516060860151608087015160a088015160c089015160e08a01516101008b01518051908a0120965160009a610b2b9a7f17fdf8831f8bd77353b30f42ba9bc64e7144545a42a890389f298feeb45dec889a9199919897969594939201998a526001600160a01b0398891660208b015296881660408a01526060890195909552608088019390935290851660a0870152841660c086015290921660e08401526101008301919091526101208201526101400190565b604051602081830303815290604052805190602001209050919050565b60008181526002602052604090205460ff1615610ba75760405162461bcd60e51b815260206004820152601b60248201527f53484f59553a2043414e43454c4c45445f4f525f434c41494d4544000000000060448201526064016102a3565b81516001600160a01b0316610bf55760405162461bcd60e51b815260206004820152601460248201527329a427acaa9d1024a72b20a624a22fa6a0a5a2a960611b60448201526064016102a3565b60208201516001600160a01b0316610c445760405162461bcd60e51b815260206004820152601260248201527114d213d6554e881253959053125117d3919560721b60448201526064016102a3565b6000826060015111610c905760405162461bcd60e51b815260206004820152601560248201527414d213d6554e881253959053125117d05353d55395605a1b60448201526064016102a3565b60808201516001600160a01b0316610cea5760405162461bcd60e51b815260206004820152601760248201527f53484f59553a20494e56414c49445f535452415445475900000000000000000060448201526064016102a3565b60a08201516001600160a01b0316610d445760405162461bcd60e51b815260206004820152601760248201527f53484f59553a20494e56414c49445f43555252454e435900000000000000000060448201526064016102a3565b7f00000000000000000000000000000000000000000000000000000000000000006080830151604051632666e89f60e21b81526001600160a01b03918216600482015291169063999ba27c9060240160206040518083038186803b158015610dab57600080fd5b505afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de39190611f1c565b610e2f5760405162461bcd60e51b815260206004820152601f60248201527f53484f59553a2053545241544547595f4e4f545f57484954454c49535445440060448201526064016102a3565b5050565b60405161190160f01b60208201526022810182905260428101879052600090606201604051602081830303815290604052805190602001209050610e77863b151590565b15610f8757604080516020810186905280820185905260f887901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b03881691631626ba7e91610edd91859160650161218a565b60206040518083038186803b158015610ef557600080fd5b505afa158015610f09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2d9190611f54565b6001600160e01b031916631626ba7e60e01b14610f825760405162461bcd60e51b815260206004820152601360248201527214d213d6554e8815539055551213d492569151606a1b60448201526064016102a3565b610fe9565b856001600160a01b0316610f9d828787876117cf565b6001600160a01b031614610fe95760405162461bcd60e51b815260206004820152601360248201527214d213d6554e8815539055551213d492569151606a1b60448201526064016102a3565b50505050505050565b600061100085853085611962565b61100c5750600061121d565b60007f000000000000000000000000000000000000000000000000000000000000000090506000839050600080836001600160a01b031663aec0b5436040518163ffffffff1660e01b8152600401604080518083038186803b15801561107157600080fd5b505afa158015611085573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a99190611ee3565b909250905060006103e86110c060ff841689612296565b6110ca9190612276565b90506110e06001600160a01b038b168483611a34565b6110ea81856122b5565b9350505050600080836001600160a01b031663c2b11e186040518163ffffffff1660e01b8152600401604080518083038186803b15801561112a57600080fd5b505afa15801561113e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111629190611ee3565b909250905060006103e861117960ff841689612296565b6111839190612276565b90506111996001600160a01b038b168483611a34565b6111a381856122b5565b93505050506000806111b460008091565b909250905060ff808216146112005760006103e86111d560ff841686612296565b6111df9190612276565b905080156111fe576111f181856122b5565b93506111fe8a8483611a8b565b505b6112146001600160a01b038a168885611a34565b60019450505050505b949350505050565b604051637921219560e11b81526001600160a01b0385811660048301528481166024830152604482018490526064820183905260a06084830152600060a483015286169063f242432a9060c401600060405180830381600087803b15801561128c57600080fd5b505af11580156112a0573d6000803e3d6000fd5b505050505050505050565b60006112ba886020015161087c565b6113005760405162461bcd60e51b815260206004820152601760248201527653484f59553a20494e56414c49445f45584348414e474560481b60448201526064016102a3565b600085116113485760405162461bcd60e51b815260206004820152601560248201527414d213d6554e881253959053125117d05353d55395605a1b60448201526064016102a3565b6000878152600360205260409020546060890151611366878361225e565b11156113a65760405162461bcd60e51b815260206004820152600f60248201526e14d213d6554e8814d3d31117d3d555608a1b60448201526064016102a3565b6113b08989610b48565b6113d3888a600001518b61012001518c61014001518d6101600151610425610717565b6000600160008a8152602001908152602001600020905089608001516001600160a01b031663651199518b60e001518c61010001518b8a8660000160009054906101000a90046001600160a01b0316876002015488600501546040518863ffffffff1660e01b815260040161144e97969594939291906121e0565b60206040518083038186803b15801561146657600080fd5b505afa15801561147a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149e9190611f1c565b156115ab576114ad878361225e565b60008a81526003602052604090205560c08a01516001600160a01b0381166114d3575089515b60a08b01516114e8908a836105b68c8c612296565b6115345760405162461bcd60e51b815260206004820152601f60248201527f53484f59553a204641494c45445f544f5f5452414e534645525f46554e44530060448201526064016102a3565b6001600160a01b038616611546578895505b61155f8b602001518c60000151888e604001518c611225565b897f0642c67a22e8657a7126bb3b9fb3f01965503642f884e4c6a1efd8ed24f46c0d8a8a8a8a8a604051611597959493929190612158565b60405180910390a260019350505050611739565b89608001516001600160a01b0316635f11a72b8b60e001518c61010001518b8a8660000160009054906101000a90046001600160a01b0316876002015488600501546040518863ffffffff1660e01b815260040161160f97969594939291906121e0565b60206040518083038186803b15801561162757600080fd5b505afa15801561163b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165f9190611f1c565b156117005780546001600160a01b03808a166001600160a01b031992831617835560018301899055600283018890556003830180548883169084161790556004830180549187169190921617905543600582015560405189907f4055f76fe1f351fec66b9ba790ddbdc29eb45c038163a6b1327277441a8c65f1906116ed908b908b908b908b908b90612158565b60405180910390a2600092505050611739565b60405162461bcd60e51b815260206004820152600e60248201526d53484f59553a204641494c55524560901b60448201526064016102a3565b979650505050505050565b80516020808301516040808501516060860151608087015160a08801519351600097610b2b977fb98e1dc48988064e6dfb813618609d7da80a8841e5f277039788ac4b50d497b297919691959493920196875260208701959095526001600160a01b03938416604087015260608601929092526080850152811660a08401521660c082015260e00190565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156118415760405162461bcd60e51b815260206004820181905260248201527f53484f59553a20494e56414c49445f5349474e41545552455f535f56414c554560448201526064016102a3565b8360ff16601b148061185657508360ff16601c145b6118a25760405162461bcd60e51b815260206004820181905260248201527f53484f59553a20494e56414c49445f5349474e41545552455f565f56414c554560448201526064016102a3565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156118f6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119595760405162461bcd60e51b815260206004820152601860248201527f53484f59553a20494e56414c49445f5349474e4154555245000000000000000060448201526064016102a3565b95945050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916916119c8919061213c565b6000604051808303816000865af19150503d8060008114611a05576040519150601f19603f3d011682016040523d82523d6000602084013e611a0a565b606091505b50915091508180156117395750805115806117395750808060200190518101906117399190611f1c565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611a86908490611b20565b505050565b611a9f6001600160a01b0384168383611a34565b813b15611a8657816001600160a01b031663fff6cae96040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611ae157600080fd5b505af1925050508015611b11575060408051601f3d908101601f19168201909252611b0e918101906120f8565b60015b611b1a57611a86565b50505050565b6000611b75826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611bf29092919063ffffffff16565b805190915015611a865780806020019051810190611b939190611f1c565b611a865760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102a3565b6060611c018484600085611c0b565b90505b9392505050565b606082471015611c6c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102a3565b843b611cba5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102a3565b600080866001600160a01b03168587604051611cd6919061213c565b60006040518083038185875af1925050503d8060008114611d13576040519150601f19603f3d011682016040523d82523d6000602084013e611d18565b606091505b509150915061173982828660608315611d32575081611c04565b825115611d425782518084602001fd5b8160405162461bcd60e51b81526004016102a391906121a3565b803561091e81612324565b600082601f830112611d77578081fd5b813567ffffffffffffffff811115611d9157611d9161230e565b611da4601f8201601f191660200161222d565b818152846020838601011115611db8578283fd5b816020850160208301379081016020019190915292915050565b6000610180808385031215611de5578182fd5b611dee8161222d565b915050611dfa82611d5c565b8152611e0860208301611d5c565b60208201526040820135604082015260608201356060820152611e2d60808301611d5c565b6080820152611e3e60a08301611d5c565b60a0820152611e4f60c08301611d5c565b60c082015260e082013560e08201526101008083013567ffffffffffffffff811115611e7a57600080fd5b611e8685828601611d67565b828401525050610120611e9a818401611ebc565b9082015261014082810135908201526101609182013591810191909152919050565b803561091e8161233c565b600060208284031215611ed8578081fd5b8135611c0481612324565b60008060408385031215611ef5578081fd5b8251611f0081612324565b6020840151909250611f118161233c565b809150509250929050565b600060208284031215611f2d578081fd5b81518015158114611c04578182fd5b600060208284031215611f4d578081fd5b5035919050565b600060208284031215611f65578081fd5b81516001600160e01b031981168114611c04578182fd5b600060208284031215611f8d578081fd5b813567ffffffffffffffff811115611fa3578182fd5b61121d84828501611dd2565b600080828403610140811215611fc3578283fd5b833567ffffffffffffffff811115611fd9578384fd5b611fe586828701611dd2565b93505061012080601f1983011215611ffb578283fd5b6120048161222d565b91506020850135825261201960408601611d5c565b6020830152606085013560408301526080850135606083015261203e60a08601611d5c565b608083015261204f60c08601611d5c565b60a083015261206060e08601611ebc565b60c08301526101008581013560e0840152940135938101939093525092909150565b600080600080600060a08688031215612099578081fd5b853567ffffffffffffffff8111156120af578182fd5b6120bb88828901611dd2565b955050602086013593506040860135925060608601356120da81612324565b915060808601356120ea81612324565b809150509295509295909350565b600060208284031215612109578081fd5b5051919050565b600081518084526121288160208601602086016122cc565b601f01601f19169290920160200192915050565b6000825161214e8184602087016122cc565b9190910192915050565b6001600160a01b0395861681526020810194909452604084019290925283166060830152909116608082015260a00190565b600083825260406020830152611c016040830184612110565b600060208252611c046020830184612110565b60208082526010908201526f14d213d6554e8814915153951490539560821b604082015260600190565b600088825260e060208301526121f960e0830189612110565b6001600160a01b03978816604084015260608301969096525092909416608083015260a082015260c0019190915292915050565b604051601f8201601f1916810167ffffffffffffffff811182821017156122565761225661230e565b604052919050565b60008219821115612271576122716122f8565b500190565b60008261229157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156122b0576122b06122f8565b500290565b6000828210156122c7576122c76122f8565b500390565b60005b838110156122e75781810151838201526020016122cf565b83811115611b1a5750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461233957600080fd5b50565b60ff8116811461233957600080fdfea2646970667358221220cce02dd783ade133b86b18e1ba14f3df2938707ff3b88991384405c90a20dc1864736f6c63430008030033496e697469616c697a61626c653a20636f6e747261637420697320616c726561";

export class ERC1155ExchangeV0__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155ExchangeV0> {
    return super.deploy(
      factory_,
      overrides || {}
    ) as Promise<ERC1155ExchangeV0>;
  }
  getDeployTransaction(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(factory_, overrides || {});
  }
  attach(address: string): ERC1155ExchangeV0 {
    return super.attach(address) as ERC1155ExchangeV0;
  }
  connect(signer: Signer): ERC1155ExchangeV0__factory {
    return super.connect(signer) as ERC1155ExchangeV0__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155ExchangeV0Interface {
    return new utils.Interface(_abi) as ERC1155ExchangeV0Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155ExchangeV0 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155ExchangeV0;
  }
}
