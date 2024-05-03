// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class PreMeme__Contributed extends ethereum.Event {
  get params(): PreMeme__Contributed__Params {
    return new PreMeme__Contributed__Params(this);
  }
}

export class PreMeme__Contributed__Params {
  _event: PreMeme__Contributed;

  constructor(event: PreMeme__Contributed) {
    this._event = event;
  }

  get meme(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PreMeme__MarketOpened extends ethereum.Event {
  get params(): PreMeme__MarketOpened__Params {
    return new PreMeme__MarketOpened__Params(this);
  }
}

export class PreMeme__MarketOpened__Params {
  _event: PreMeme__MarketOpened;

  constructor(event: PreMeme__MarketOpened) {
    this._event = event;
  }

  get meme(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalMemeBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalBaseContributed(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PreMeme__Redeemed extends ethereum.Event {
  get params(): PreMeme__Redeemed__Params {
    return new PreMeme__Redeemed__Params(this);
  }
}

export class PreMeme__Redeemed__Params {
  _event: PreMeme__Redeemed;

  constructor(event: PreMeme__Redeemed) {
    this._event = event;
  }

  get meme(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PreMeme extends ethereum.SmartContract {
  static bind(address: Address): PreMeme {
    return new PreMeme("PreMeme", address);
  }

  DURATION(): BigInt {
    let result = super.call("DURATION", "DURATION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DURATION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DURATION", "DURATION():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  account_BaseContributed(param0: Address): BigInt {
    let result = super.call(
      "account_BaseContributed",
      "account_BaseContributed(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBigInt();
  }

  try_account_BaseContributed(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "account_BaseContributed",
      "account_BaseContributed(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  base(): Address {
    let result = super.call("base", "base():(address)", []);

    return result[0].toAddress();
  }

  try_base(): ethereum.CallResult<Address> {
    let result = super.tryCall("base", "base():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  endTimestamp(): BigInt {
    let result = super.call("endTimestamp", "endTimestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_endTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endTimestamp", "endTimestamp():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ended(): boolean {
    let result = super.call("ended", "ended():(bool)", []);

    return result[0].toBoolean();
  }

  try_ended(): ethereum.CallResult<boolean> {
    let result = super.tryCall("ended", "ended():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  meme(): Address {
    let result = super.call("meme", "meme():(address)", []);

    return result[0].toAddress();
  }

  try_meme(): ethereum.CallResult<Address> {
    let result = super.tryCall("meme", "meme():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalBaseContributed(): BigInt {
    let result = super.call(
      "totalBaseContributed",
      "totalBaseContributed():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalBaseContributed(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalBaseContributed",
      "totalBaseContributed():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalMemeBalance(): BigInt {
    let result = super.call(
      "totalMemeBalance",
      "totalMemeBalance():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalMemeBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalMemeBalance",
      "totalMemeBalance():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _base(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ContributeCall extends ethereum.Call {
  get inputs(): ContributeCall__Inputs {
    return new ContributeCall__Inputs(this);
  }

  get outputs(): ContributeCall__Outputs {
    return new ContributeCall__Outputs(this);
  }
}

export class ContributeCall__Inputs {
  _call: ContributeCall;

  constructor(call: ContributeCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ContributeCall__Outputs {
  _call: ContributeCall;

  constructor(call: ContributeCall) {
    this._call = call;
  }
}

export class OpenMarketCall extends ethereum.Call {
  get inputs(): OpenMarketCall__Inputs {
    return new OpenMarketCall__Inputs(this);
  }

  get outputs(): OpenMarketCall__Outputs {
    return new OpenMarketCall__Outputs(this);
  }
}

export class OpenMarketCall__Inputs {
  _call: OpenMarketCall;

  constructor(call: OpenMarketCall) {
    this._call = call;
  }
}

export class OpenMarketCall__Outputs {
  _call: OpenMarketCall;

  constructor(call: OpenMarketCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}
