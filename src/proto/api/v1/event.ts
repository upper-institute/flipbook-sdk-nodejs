/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { messageTypeRegistry } from "../../typeRegistry";
import { Query } from "./query";

export const protobufPackage = "flipbook.v1";

export enum SortingKeyType {
  SORTING_KEY_INCREASING_SEQUENCE = 0,
  SORTING_KEY_ARBITRARY_NUMBER = 1,
  UNRECOGNIZED = -1,
}

export function sortingKeyTypeFromJSON(object: any): SortingKeyType {
  switch (object) {
    case 0:
    case "SORTING_KEY_INCREASING_SEQUENCE":
      return SortingKeyType.SORTING_KEY_INCREASING_SEQUENCE;
    case 1:
    case "SORTING_KEY_ARBITRARY_NUMBER":
      return SortingKeyType.SORTING_KEY_ARBITRARY_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SortingKeyType.UNRECOGNIZED;
  }
}

export function sortingKeyTypeToJSON(object: SortingKeyType): string {
  switch (object) {
    case SortingKeyType.SORTING_KEY_INCREASING_SEQUENCE:
      return "SORTING_KEY_INCREASING_SEQUENCE";
    case SortingKeyType.SORTING_KEY_ARBITRARY_NUMBER:
      return "SORTING_KEY_ARBITRARY_NUMBER";
    case SortingKeyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Event {
  $type: "flipbook.v1.Event";
  /**
   * This key is used to route events to partitions. It must be unique for the
   * source generating it. We recommend using any well known standard like UUIDs
   * with a meaningful representation for business domainds
   */
  partitionKey: string;
  /**
   * This key is used to control two things:
   * 1. The payload stored in this exact sorting key (a sorting key can only have 1 payload)
   * 2. The sorting order for EventStore.Iterate()
   *
   * An event "id" is the combination of the partition_key+sorting_key
   */
  sortingKey: string;
  eventPayload: Any | undefined;
  sortingKeyType: SortingKeyType;
}

export interface Event_AppendRequest {
  $type: "flipbook.v1.Event.AppendRequest";
  events: Event[];
}

export interface Event_IterateRequest {
  $type: "flipbook.v1.Event.IterateRequest";
  partitionKey: string;
  query: Query | undefined;
  batchSize: string;
}

export interface Event_GetLatestRequest {
  $type: "flipbook.v1.Event.GetLatestRequest";
  partitionKey: string;
}

export interface Commit {
  $type: "flipbook.v1.Commit";
  partitionKey: string;
  sortingKey: string;
}

function createBaseEvent(): Event {
  return { $type: "flipbook.v1.Event", partitionKey: "", sortingKey: "0", eventPayload: undefined, sortingKeyType: 0 };
}

export const Event = {
  $type: "flipbook.v1.Event" as const,

  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partitionKey !== "") {
      writer.uint32(10).string(message.partitionKey);
    }
    if (message.sortingKey !== "0") {
      writer.uint32(16).int64(message.sortingKey);
    }
    if (message.eventPayload !== undefined) {
      Any.encode(message.eventPayload, writer.uint32(26).fork()).ldelim();
    }
    if (message.sortingKeyType !== 0) {
      writer.uint32(32).int32(message.sortingKeyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partitionKey = reader.string();
          break;
        case 2:
          message.sortingKey = longToString(reader.int64() as Long);
          break;
        case 3:
          message.eventPayload = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.sortingKeyType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      $type: Event.$type,
      partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
      sortingKey: isSet(object.sortingKey) ? String(object.sortingKey) : "0",
      eventPayload: isSet(object.eventPayload) ? Any.fromJSON(object.eventPayload) : undefined,
      sortingKeyType: isSet(object.sortingKeyType) ? sortingKeyTypeFromJSON(object.sortingKeyType) : 0,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
    message.sortingKey !== undefined && (obj.sortingKey = message.sortingKey);
    message.eventPayload !== undefined &&
      (obj.eventPayload = message.eventPayload ? Any.toJSON(message.eventPayload) : undefined);
    message.sortingKeyType !== undefined && (obj.sortingKeyType = sortingKeyTypeToJSON(message.sortingKeyType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.partitionKey = object.partitionKey ?? "";
    message.sortingKey = object.sortingKey ?? "0";
    message.eventPayload = (object.eventPayload !== undefined && object.eventPayload !== null)
      ? Any.fromPartial(object.eventPayload)
      : undefined;
    message.sortingKeyType = object.sortingKeyType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Event.$type, Event);

function createBaseEvent_AppendRequest(): Event_AppendRequest {
  return { $type: "flipbook.v1.Event.AppendRequest", events: [] };
}

export const Event_AppendRequest = {
  $type: "flipbook.v1.Event.AppendRequest" as const,

  encode(message: Event_AppendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_AppendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_AppendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event_AppendRequest {
    return {
      $type: Event_AppendRequest.$type,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: Event_AppendRequest): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_AppendRequest>, I>>(base?: I): Event_AppendRequest {
    return Event_AppendRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event_AppendRequest>, I>>(object: I): Event_AppendRequest {
    const message = createBaseEvent_AppendRequest();
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Event_AppendRequest.$type, Event_AppendRequest);

function createBaseEvent_IterateRequest(): Event_IterateRequest {
  return { $type: "flipbook.v1.Event.IterateRequest", partitionKey: "", query: undefined, batchSize: "0" };
}

export const Event_IterateRequest = {
  $type: "flipbook.v1.Event.IterateRequest" as const,

  encode(message: Event_IterateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partitionKey !== "") {
      writer.uint32(10).string(message.partitionKey);
    }
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    if (message.batchSize !== "0") {
      writer.uint32(24).int64(message.batchSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_IterateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_IterateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partitionKey = reader.string();
          break;
        case 2:
          message.query = Query.decode(reader, reader.uint32());
          break;
        case 3:
          message.batchSize = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event_IterateRequest {
    return {
      $type: Event_IterateRequest.$type,
      partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
      query: isSet(object.query) ? Query.fromJSON(object.query) : undefined,
      batchSize: isSet(object.batchSize) ? String(object.batchSize) : "0",
    };
  },

  toJSON(message: Event_IterateRequest): unknown {
    const obj: any = {};
    message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
    message.query !== undefined && (obj.query = message.query ? Query.toJSON(message.query) : undefined);
    message.batchSize !== undefined && (obj.batchSize = message.batchSize);
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_IterateRequest>, I>>(base?: I): Event_IterateRequest {
    return Event_IterateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event_IterateRequest>, I>>(object: I): Event_IterateRequest {
    const message = createBaseEvent_IterateRequest();
    message.partitionKey = object.partitionKey ?? "";
    message.query = (object.query !== undefined && object.query !== null) ? Query.fromPartial(object.query) : undefined;
    message.batchSize = object.batchSize ?? "0";
    return message;
  },
};

messageTypeRegistry.set(Event_IterateRequest.$type, Event_IterateRequest);

function createBaseEvent_GetLatestRequest(): Event_GetLatestRequest {
  return { $type: "flipbook.v1.Event.GetLatestRequest", partitionKey: "" };
}

export const Event_GetLatestRequest = {
  $type: "flipbook.v1.Event.GetLatestRequest" as const,

  encode(message: Event_GetLatestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partitionKey !== "") {
      writer.uint32(10).string(message.partitionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_GetLatestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_GetLatestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partitionKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event_GetLatestRequest {
    return {
      $type: Event_GetLatestRequest.$type,
      partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
    };
  },

  toJSON(message: Event_GetLatestRequest): unknown {
    const obj: any = {};
    message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_GetLatestRequest>, I>>(base?: I): Event_GetLatestRequest {
    return Event_GetLatestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event_GetLatestRequest>, I>>(object: I): Event_GetLatestRequest {
    const message = createBaseEvent_GetLatestRequest();
    message.partitionKey = object.partitionKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(Event_GetLatestRequest.$type, Event_GetLatestRequest);

function createBaseCommit(): Commit {
  return { $type: "flipbook.v1.Commit", partitionKey: "", sortingKey: "0" };
}

export const Commit = {
  $type: "flipbook.v1.Commit" as const,

  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partitionKey !== "") {
      writer.uint32(10).string(message.partitionKey);
    }
    if (message.sortingKey !== "0") {
      writer.uint32(16).int64(message.sortingKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partitionKey = reader.string();
          break;
        case 2:
          message.sortingKey = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commit {
    return {
      $type: Commit.$type,
      partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
      sortingKey: isSet(object.sortingKey) ? String(object.sortingKey) : "0",
    };
  },

  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
    message.sortingKey !== undefined && (obj.sortingKey = message.sortingKey);
    return obj;
  },

  create<I extends Exact<DeepPartial<Commit>, I>>(base?: I): Commit {
    return Commit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Commit>, I>>(object: I): Commit {
    const message = createBaseCommit();
    message.partitionKey = object.partitionKey ?? "";
    message.sortingKey = object.sortingKey ?? "0";
    return message;
  },
};

messageTypeRegistry.set(Commit.$type, Commit);

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
