/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ExchangeProxyInterface extends ethers.utils.Interface {
  functions: {
    "claim(address,tuple,tuple)": FunctionFragment;
    "isClaimerWhitelisted(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setClaimerWhitelisted(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [
      string,
      {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimerWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimerWhitelisted",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isClaimerWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimerWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Claim(address,bytes32,address,uint256,uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ExchangeProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ExchangeProxyInterface;

  functions: {
    claim(
      exchange: string,
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isClaimerWhitelisted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimerWhitelisted(
      claimer: string,
      whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    exchange: string,
    askOrder: {
      signer: string;
      token: string;
      tokenId: BigNumberish;
      amount: BigNumberish;
      strategy: string;
      currency: string;
      recipient: string;
      deadline: BigNumberish;
      params: BytesLike;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    bidOrder: {
      askHash: BytesLike;
      signer: string;
      amount: BigNumberish;
      price: BigNumberish;
      recipient: string;
      referrer: string;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isClaimerWhitelisted(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimerWhitelisted(
    claimer: string,
    whitelisted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      exchange: string,
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    isClaimerWhitelisted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setClaimerWhitelisted(
      claimer: string,
      whitelisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Claim(
      exchange?: null,
      hash?: BytesLike | null,
      bidder?: null,
      amount?: null,
      price?: null,
      recipient?: null,
      referrer?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, string, string],
      {
        exchange: string;
        hash: string;
        bidder: string;
        amount: BigNumber;
        price: BigNumber;
        recipient: string;
        referrer: string;
      }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    claim(
      exchange: string,
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isClaimerWhitelisted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimerWhitelisted(
      claimer: string,
      whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      exchange: string,
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isClaimerWhitelisted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimerWhitelisted(
      claimer: string,
      whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
