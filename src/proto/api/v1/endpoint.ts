/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../typeRegistry";

export const protobufPackage = "flipbook.v1";

export interface Endpoint {
  $type: "flipbook.v1.Endpoint";
  address: string;
  port: number;
  addressFamily: Endpoint_AddressFamily;
}

export enum Endpoint_AddressFamily {
  ADDRESS_FAMILY_IPV4 = 0,
  ADDRESS_FAMILY_IPV6 = 1,
  UNRECOGNIZED = -1,
}

export function endpoint_AddressFamilyFromJSON(object: any): Endpoint_AddressFamily {
  switch (object) {
    case 0:
    case "ADDRESS_FAMILY_IPV4":
      return Endpoint_AddressFamily.ADDRESS_FAMILY_IPV4;
    case 1:
    case "ADDRESS_FAMILY_IPV6":
      return Endpoint_AddressFamily.ADDRESS_FAMILY_IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Endpoint_AddressFamily.UNRECOGNIZED;
  }
}

export function endpoint_AddressFamilyToJSON(object: Endpoint_AddressFamily): string {
  switch (object) {
    case Endpoint_AddressFamily.ADDRESS_FAMILY_IPV4:
      return "ADDRESS_FAMILY_IPV4";
    case Endpoint_AddressFamily.ADDRESS_FAMILY_IPV6:
      return "ADDRESS_FAMILY_IPV6";
    case Endpoint_AddressFamily.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseEndpoint(): Endpoint {
  return { $type: "flipbook.v1.Endpoint", address: "", port: 0, addressFamily: 0 };
}

export const Endpoint = {
  $type: "flipbook.v1.Endpoint" as const,

  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.addressFamily !== 0) {
      writer.uint32(24).int32(message.addressFamily);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        case 3:
          message.addressFamily = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    return {
      $type: Endpoint.$type,
      address: isSet(object.address) ? String(object.address) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      addressFamily: isSet(object.addressFamily) ? endpoint_AddressFamilyFromJSON(object.addressFamily) : 0,
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.addressFamily !== undefined && (obj.addressFamily = endpoint_AddressFamilyToJSON(message.addressFamily));
    return obj;
  },

  create<I extends Exact<DeepPartial<Endpoint>, I>>(base?: I): Endpoint {
    return Endpoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = createBaseEndpoint();
    message.address = object.address ?? "";
    message.port = object.port ?? 0;
    message.addressFamily = object.addressFamily ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Endpoint.$type, Endpoint);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
