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

export class WaveFrontMulticall__getAccountDataResultAccountDataStruct extends ethereum.Tuple {
  get baseContributed(): BigInt {
    return this[0].toBigInt();
  }

  get memeRedeemable(): BigInt {
    return this[1].toBigInt();
  }

  get memeBalance(): BigInt {
    return this[2].toBigInt();
  }

  get baseClaimable(): BigInt {
    return this[3].toBigInt();
  }

  get baseCredit(): BigInt {
    return this[4].toBigInt();
  }

  get baseDebt(): BigInt {
    return this[5].toBigInt();
  }
}

export class WaveFrontMulticall__getMemeDataResultMemeDataStruct extends ethereum.Tuple {
  get index(): BigInt {
    return this[0].toBigInt();
  }

  get meme(): Address {
    return this[1].toAddress();
  }

  get preMeme(): Address {
    return this[2].toAddress();
  }

  get fees(): Address {
    return this[3].toAddress();
  }

  get name(): string {
    return this[4].toString();
  }

  get symbol(): string {
    return this[5].toString();
  }

  get uri(): string {
    return this[6].toString();
  }

  get status(): string {
    return this[7].toString();
  }

  get statusHolder(): Address {
    return this[8].toAddress();
  }

  get marketOpen(): boolean {
    return this[9].toBoolean();
  }

  get marketOpenTimestamp(): BigInt {
    return this[10].toBigInt();
  }

  get reserveVirtualBase(): BigInt {
    return this[11].toBigInt();
  }

  get reserveBase(): BigInt {
    return this[12].toBigInt();
  }

  get reserveMeme(): BigInt {
    return this[13].toBigInt();
  }

  get totalSupply(): BigInt {
    return this[14].toBigInt();
  }

  get baseContributed(): BigInt {
    return this[15].toBigInt();
  }

  get preMemeBalance(): BigInt {
    return this[16].toBigInt();
  }

  get floorPrice(): BigInt {
    return this[17].toBigInt();
  }

  get marketPrice(): BigInt {
    return this[18].toBigInt();
  }

  get marketCap(): BigInt {
    return this[19].toBigInt();
  }

  get liquidity(): BigInt {
    return this[20].toBigInt();
  }

  get totalRewardsBase(): BigInt {
    return this[21].toBigInt();
  }

  get totalDebt(): BigInt {
    return this[22].toBigInt();
  }
}

export class WaveFrontMulticall extends ethereum.SmartContract {
  static bind(address: Address): WaveFrontMulticall {
    return new WaveFrontMulticall("WaveFrontMulticall", address);
  }

  DIVISOR(): BigInt {
    let result = super.call("DIVISOR", "DIVISOR():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DIVISOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DIVISOR", "DIVISOR():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  FEE(): BigInt {
    let result = super.call("FEE", "FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("FEE", "FEE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRECISION(): BigInt {
    let result = super.call("PRECISION", "PRECISION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRECISION", "PRECISION():(uint256)", []);
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

  getAccountData(
    meme: Address,
    account: Address,
  ): WaveFrontMulticall__getAccountDataResultAccountDataStruct {
    let result = super.call(
      "getAccountData",
      "getAccountData(address,address):((uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(meme), ethereum.Value.fromAddress(account)],
    );

    return changetype<WaveFrontMulticall__getAccountDataResultAccountDataStruct>(
      result[0].toTuple(),
    );
  }

  try_getAccountData(
    meme: Address,
    account: Address,
  ): ethereum.CallResult<WaveFrontMulticall__getAccountDataResultAccountDataStruct> {
    let result = super.tryCall(
      "getAccountData",
      "getAccountData(address,address):((uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(meme), ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<WaveFrontMulticall__getAccountDataResultAccountDataStruct>(
        value[0].toTuple(),
      ),
    );
  }

  getMemeData(
    meme: Address,
  ): WaveFrontMulticall__getMemeDataResultMemeDataStruct {
    let result = super.call(
      "getMemeData",
      "getMemeData(address):((uint256,address,address,address,string,string,string,string,address,bool,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(meme)],
    );

    return changetype<WaveFrontMulticall__getMemeDataResultMemeDataStruct>(
      result[0].toTuple(),
    );
  }

  try_getMemeData(
    meme: Address,
  ): ethereum.CallResult<WaveFrontMulticall__getMemeDataResultMemeDataStruct> {
    let result = super.tryCall(
      "getMemeData",
      "getMemeData(address):((uint256,address,address,address,string,string,string,string,address,bool,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(meme)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<WaveFrontMulticall__getMemeDataResultMemeDataStruct>(
        value[0].toTuple(),
      ),
    );
  }

  waveFrontFactory(): Address {
    let result = super.call(
      "waveFrontFactory",
      "waveFrontFactory():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_waveFrontFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "waveFrontFactory",
      "waveFrontFactory():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _waveFrontFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _base(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
