/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../typeRegistry";
import { Endpoint } from "./endpoint";

export const protobufPackage = "flipbook.v1";

export enum SubscriptionStatus {
  SUBSCRIPTION_STATUS_IDLE = 0,
  SUBSCRIPTION_STATUS_ACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function subscriptionStatusFromJSON(object: any): SubscriptionStatus {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_STATUS_IDLE":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_IDLE;
    case 1:
    case "SUBSCRIPTION_STATUS_ACTIVE":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionStatus.UNRECOGNIZED;
  }
}

export function subscriptionStatusToJSON(object: SubscriptionStatus): string {
  switch (object) {
    case SubscriptionStatus.SUBSCRIPTION_STATUS_IDLE:
      return "SUBSCRIPTION_STATUS_IDLE";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_ACTIVE:
      return "SUBSCRIPTION_STATUS_ACTIVE";
    case SubscriptionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Subscription {
  $type: "flipbook.v1.Subscription";
  subscriptionId: string;
  eventHandler: Endpoint | undefined;
  estimatedConsistencyLevel: number;
  status: SubscriptionStatus;
  updatedAt: Date | undefined;
}

export interface Subscription_OpenRequest {
  $type: "flipbook.v1.Subscription.OpenRequest";
  subscriptionId: string;
  eventHandler: Endpoint | undefined;
  pushInterval: Duration | undefined;
}

export interface Subscription_CloseRequest {
  $type: "flipbook.v1.Subscription.CloseRequest";
  subscriptionId: string;
}

function createBaseSubscription(): Subscription {
  return {
    $type: "flipbook.v1.Subscription",
    subscriptionId: "",
    eventHandler: undefined,
    estimatedConsistencyLevel: 0,
    status: 0,
    updatedAt: undefined,
  };
}

export const Subscription = {
  $type: "flipbook.v1.Subscription" as const,

  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    if (message.eventHandler !== undefined) {
      Endpoint.encode(message.eventHandler, writer.uint32(18).fork()).ldelim();
    }
    if (message.estimatedConsistencyLevel !== 0) {
      writer.uint32(25).double(message.estimatedConsistencyLevel);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionId = reader.string();
          break;
        case 2:
          message.eventHandler = Endpoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.estimatedConsistencyLevel = reader.double();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subscription {
    return {
      $type: Subscription.$type,
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      eventHandler: isSet(object.eventHandler) ? Endpoint.fromJSON(object.eventHandler) : undefined,
      estimatedConsistencyLevel: isSet(object.estimatedConsistencyLevel) ? Number(object.estimatedConsistencyLevel) : 0,
      status: isSet(object.status) ? subscriptionStatusFromJSON(object.status) : 0,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: Subscription): unknown {
    const obj: any = {};
    message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
    message.eventHandler !== undefined &&
      (obj.eventHandler = message.eventHandler ? Endpoint.toJSON(message.eventHandler) : undefined);
    message.estimatedConsistencyLevel !== undefined &&
      (obj.estimatedConsistencyLevel = message.estimatedConsistencyLevel);
    message.status !== undefined && (obj.status = subscriptionStatusToJSON(message.status));
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Subscription>, I>>(base?: I): Subscription {
    return Subscription.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Subscription>, I>>(object: I): Subscription {
    const message = createBaseSubscription();
    message.subscriptionId = object.subscriptionId ?? "";
    message.eventHandler = (object.eventHandler !== undefined && object.eventHandler !== null)
      ? Endpoint.fromPartial(object.eventHandler)
      : undefined;
    message.estimatedConsistencyLevel = object.estimatedConsistencyLevel ?? 0;
    message.status = object.status ?? 0;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Subscription.$type, Subscription);

function createBaseSubscription_OpenRequest(): Subscription_OpenRequest {
  return {
    $type: "flipbook.v1.Subscription.OpenRequest",
    subscriptionId: "",
    eventHandler: undefined,
    pushInterval: undefined,
  };
}

export const Subscription_OpenRequest = {
  $type: "flipbook.v1.Subscription.OpenRequest" as const,

  encode(message: Subscription_OpenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    if (message.eventHandler !== undefined) {
      Endpoint.encode(message.eventHandler, writer.uint32(18).fork()).ldelim();
    }
    if (message.pushInterval !== undefined) {
      Duration.encode(message.pushInterval, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription_OpenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription_OpenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionId = reader.string();
          break;
        case 2:
          message.eventHandler = Endpoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.pushInterval = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subscription_OpenRequest {
    return {
      $type: Subscription_OpenRequest.$type,
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      eventHandler: isSet(object.eventHandler) ? Endpoint.fromJSON(object.eventHandler) : undefined,
      pushInterval: isSet(object.pushInterval) ? Duration.fromJSON(object.pushInterval) : undefined,
    };
  },

  toJSON(message: Subscription_OpenRequest): unknown {
    const obj: any = {};
    message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
    message.eventHandler !== undefined &&
      (obj.eventHandler = message.eventHandler ? Endpoint.toJSON(message.eventHandler) : undefined);
    message.pushInterval !== undefined &&
      (obj.pushInterval = message.pushInterval ? Duration.toJSON(message.pushInterval) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Subscription_OpenRequest>, I>>(base?: I): Subscription_OpenRequest {
    return Subscription_OpenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Subscription_OpenRequest>, I>>(object: I): Subscription_OpenRequest {
    const message = createBaseSubscription_OpenRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    message.eventHandler = (object.eventHandler !== undefined && object.eventHandler !== null)
      ? Endpoint.fromPartial(object.eventHandler)
      : undefined;
    message.pushInterval = (object.pushInterval !== undefined && object.pushInterval !== null)
      ? Duration.fromPartial(object.pushInterval)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Subscription_OpenRequest.$type, Subscription_OpenRequest);

function createBaseSubscription_CloseRequest(): Subscription_CloseRequest {
  return { $type: "flipbook.v1.Subscription.CloseRequest", subscriptionId: "" };
}

export const Subscription_CloseRequest = {
  $type: "flipbook.v1.Subscription.CloseRequest" as const,

  encode(message: Subscription_CloseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription_CloseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription_CloseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subscription_CloseRequest {
    return {
      $type: Subscription_CloseRequest.$type,
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
    };
  },

  toJSON(message: Subscription_CloseRequest): unknown {
    const obj: any = {};
    message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<Subscription_CloseRequest>, I>>(base?: I): Subscription_CloseRequest {
    return Subscription_CloseRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Subscription_CloseRequest>, I>>(object: I): Subscription_CloseRequest {
    const message = createBaseSubscription_CloseRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Subscription_CloseRequest.$type, Subscription_CloseRequest);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
