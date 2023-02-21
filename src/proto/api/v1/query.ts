/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../typeRegistry";

export const protobufPackage = "flipbook.v1";

export enum QueryStop {
  QUERY_STOP_LATEST = 0,
  QUERY_STOP_EXACT = 1,
  UNRECOGNIZED = -1,
}

export function queryStopFromJSON(object: any): QueryStop {
  switch (object) {
    case 0:
    case "QUERY_STOP_LATEST":
      return QueryStop.QUERY_STOP_LATEST;
    case 1:
    case "QUERY_STOP_EXACT":
      return QueryStop.QUERY_STOP_EXACT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QueryStop.UNRECOGNIZED;
  }
}

export function queryStopToJSON(object: QueryStop): string {
  switch (object) {
    case QueryStop.QUERY_STOP_LATEST:
      return "QUERY_STOP_LATEST";
    case QueryStop.QUERY_STOP_EXACT:
      return "QUERY_STOP_EXACT";
    case QueryStop.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Query {
  $type: "flipbook.v1.Query";
  startSortingKey: string;
  stopSortingKey: string;
  stop: QueryStop;
}

function createBaseQuery(): Query {
  return { $type: "flipbook.v1.Query", startSortingKey: "0", stopSortingKey: "0", stop: 0 };
}

export const Query = {
  $type: "flipbook.v1.Query" as const,

  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startSortingKey !== "0") {
      writer.uint32(8).int64(message.startSortingKey);
    }
    if (message.stopSortingKey !== "0") {
      writer.uint32(16).int64(message.stopSortingKey);
    }
    if (message.stop !== 0) {
      writer.uint32(24).int32(message.stop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startSortingKey = longToString(reader.int64() as Long);
          break;
        case 2:
          message.stopSortingKey = longToString(reader.int64() as Long);
          break;
        case 3:
          message.stop = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      $type: Query.$type,
      startSortingKey: isSet(object.startSortingKey) ? String(object.startSortingKey) : "0",
      stopSortingKey: isSet(object.stopSortingKey) ? String(object.stopSortingKey) : "0",
      stop: isSet(object.stop) ? queryStopFromJSON(object.stop) : 0,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.startSortingKey !== undefined && (obj.startSortingKey = message.startSortingKey);
    message.stopSortingKey !== undefined && (obj.stopSortingKey = message.stopSortingKey);
    message.stop !== undefined && (obj.stop = queryStopToJSON(message.stop));
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.startSortingKey = object.startSortingKey ?? "0";
    message.stopSortingKey = object.stopSortingKey ?? "0";
    message.stop = object.stop ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Query.$type, Query);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
