/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FixedPriceSale,
  FixedPriceSaleInterface,
} from "../FixedPriceSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canBid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proxy",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canClaim",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610303806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063610e2d3b1461003b578063e9b3838f14610062575b600080fd5b61004e610049366004610190565b61007e565b604051901515815260200160405180910390f35b61004e610070366004610190565b600098975050505050505050565b6000806000888060200190518101906100979190610294565b91509150600082116100e75760405162461bcd60e51b815260206004820152601460248201527353484f59553a20494e56414c49445f505249434560601b60448201526064015b60405180910390fd5b8981106101365760405162461bcd60e51b815260206004820152601960248201527f53484f59553a20494e56414c49445f535441525445445f41540000000000000060448201526064016100de565b426001600160a01b038c16151580610159575080821115801561015957508a8111155b801561016457508288145b9c9b505050505050505050505050565b80356001600160a01b038116811461018b57600080fd5b919050565b600080600080600080600080610100898b0312156101ac578384fd5b6101b589610174565b975060208901359650604089013567ffffffffffffffff808211156101d8578586fd5b818b0191508b601f8301126101eb578586fd5b8135818111156101fd576101fd6102b7565b604051601f8201601f19908116603f01168101908382118183101715610225576102256102b7565b816040528281528e602084870101111561023d578889fd5b8260208601602083013791820160200188905250975061026291505060608a01610174565b94506080890135935061027760a08a01610174565b925060c0890135915060e089013590509295985092959890939650565b600080604083850312156102a6578182fd5b505080516020909101519092909150565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ab856648994e7441db0372fb0f6fccf2f61d6256806dce79ba03448800a5e34264736f6c63430008030033";

export class FixedPriceSale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FixedPriceSale> {
    return super.deploy(overrides || {}) as Promise<FixedPriceSale>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FixedPriceSale {
    return super.attach(address) as FixedPriceSale;
  }
  connect(signer: Signer): FixedPriceSale__factory {
    return super.connect(signer) as FixedPriceSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPriceSaleInterface {
    return new utils.Interface(_abi) as FixedPriceSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPriceSale {
    return new Contract(address, _abi, signerOrProvider) as FixedPriceSale;
  }
}
