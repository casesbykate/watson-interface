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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MixSenderInterface extends ethers.utils.Interface {
  functions: {
    "received(address,uint256,address,uint256)": FunctionFragment;
    "receiveOverHorizon(uint256,uint256,address,uint256,uint256,bytes)": FunctionFragment;
    "signer()": FunctionFragment;
    "sendCount(address,uint256,address)": FunctionFragment;
    "setSigner(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "sended(address,uint256,address,uint256)": FunctionFragment;
    "mix()": FunctionFragment;
    "sendOverHorizon(uint256,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "received",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveOverHorizon",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendCount",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "setSigner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sended",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "mix", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendOverHorizon",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "received", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveOverHorizon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sended", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mix", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendOverHorizon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "SetSigner(address)": EventFragment;
    "SendOverHorizon(address,uint256,address,uint256,uint256)": EventFragment;
    "ReceiveOverHorizon(address,uint256,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetSigner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendOverHorizon"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiveOverHorizon"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type SetSignerEvent = TypedEvent<[string] & { signer: string }>;

export type SendOverHorizonEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber] & {
    sender: string;
    toChain: BigNumber;
    receiver: string;
    sendId: BigNumber;
    amount: BigNumber;
  }
>;

export type ReceiveOverHorizonEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber] & {
    receiver: string;
    fromChain: BigNumber;
    sender: string;
    sendId: BigNumber;
    amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class MixSender extends BaseContract {
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

  interface: MixSenderInterface;

  functions: {
    received(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      toChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setSigner(
      _signer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    sended(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mix(overrides?: CallOverrides): Promise<[string]>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  received(
    arg0: string,
    arg1: BigNumberish,
    arg2: string,
    arg3: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  receiveOverHorizon(
    fromChain: BigNumberish,
    toChain: BigNumberish,
    sender: string,
    sendId: BigNumberish,
    amount: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendCount(
    sender: string,
    toChain: BigNumberish,
    receiver: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setSigner(
    _signer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  sended(
    arg0: string,
    arg1: BigNumberish,
    arg2: string,
    arg3: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mix(overrides?: CallOverrides): Promise<string>;

  sendOverHorizon(
    toChain: BigNumberish,
    receiver: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    received(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      toChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    signer(overrides?: CallOverrides): Promise<string>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setSigner(_signer: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    sended(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mix(overrides?: CallOverrides): Promise<string>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SetSigner(address)"(
      signer?: string | null
    ): TypedEventFilter<[string], { signer: string }>;

    SetSigner(
      signer?: string | null
    ): TypedEventFilter<[string], { signer: string }>;

    "SendOverHorizon(address,uint256,address,uint256,uint256)"(
      sender?: string | null,
      toChain?: BigNumberish | null,
      receiver?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        sender: string;
        toChain: BigNumber;
        receiver: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;

    SendOverHorizon(
      sender?: string | null,
      toChain?: BigNumberish | null,
      receiver?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        sender: string;
        toChain: BigNumber;
        receiver: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;

    "ReceiveOverHorizon(address,uint256,address,uint256,uint256)"(
      receiver?: string | null,
      fromChain?: BigNumberish | null,
      sender?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        receiver: string;
        fromChain: BigNumber;
        sender: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;

    ReceiveOverHorizon(
      receiver?: string | null,
      fromChain?: BigNumberish | null,
      sender?: string | null,
      sendId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, BigNumber],
      {
        receiver: string;
        fromChain: BigNumber;
        sender: string;
        sendId: BigNumber;
        amount: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
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
    received(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      toChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setSigner(
      _signer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    sended(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mix(overrides?: CallOverrides): Promise<BigNumber>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    received(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      toChain: BigNumberish,
      sender: string,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setSigner(
      _signer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sended(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mix(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendOverHorizon(
      toChain: BigNumberish,
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
