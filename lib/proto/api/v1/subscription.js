"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription_CloseRequest = exports.Subscription_OpenRequest = exports.Subscription = exports.subscriptionStatusToJSON = exports.subscriptionStatusFromJSON = exports.SubscriptionStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../typeRegistry");
const endpoint_1 = require("./endpoint");
exports.protobufPackage = "flipbook.v1";
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_IDLE"] = 0] = "SUBSCRIPTION_STATUS_IDLE";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_ACTIVE"] = 1] = "SUBSCRIPTION_STATUS_ACTIVE";
    SubscriptionStatus[SubscriptionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
function subscriptionStatusFromJSON(object) {
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
exports.subscriptionStatusFromJSON = subscriptionStatusFromJSON;
function subscriptionStatusToJSON(object) {
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
exports.subscriptionStatusToJSON = subscriptionStatusToJSON;
function createBaseSubscription() {
    return {
        $type: "flipbook.v1.Subscription",
        subscriptionId: "",
        eventHandler: undefined,
        estimatedConsistencyLevel: 0,
        status: 0,
        updatedAt: undefined,
    };
}
exports.Subscription = {
    $type: "flipbook.v1.Subscription",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subscriptionId !== "") {
            writer.uint32(10).string(message.subscriptionId);
        }
        if (message.eventHandler !== undefined) {
            endpoint_1.Endpoint.encode(message.eventHandler, writer.uint32(18).fork()).ldelim();
        }
        if (message.estimatedConsistencyLevel !== 0) {
            writer.uint32(25).double(message.estimatedConsistencyLevel);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionId = reader.string();
                    break;
                case 2:
                    message.eventHandler = endpoint_1.Endpoint.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.estimatedConsistencyLevel = reader.double();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.Subscription.$type,
            subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
            eventHandler: isSet(object.eventHandler) ? endpoint_1.Endpoint.fromJSON(object.eventHandler) : undefined,
            estimatedConsistencyLevel: isSet(object.estimatedConsistencyLevel) ? Number(object.estimatedConsistencyLevel) : 0,
            status: isSet(object.status) ? subscriptionStatusFromJSON(object.status) : 0,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
        message.eventHandler !== undefined &&
            (obj.eventHandler = message.eventHandler ? endpoint_1.Endpoint.toJSON(message.eventHandler) : undefined);
        message.estimatedConsistencyLevel !== undefined &&
            (obj.estimatedConsistencyLevel = message.estimatedConsistencyLevel);
        message.status !== undefined && (obj.status = subscriptionStatusToJSON(message.status));
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.Subscription.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubscription();
        message.subscriptionId = object.subscriptionId ?? "";
        message.eventHandler = (object.eventHandler !== undefined && object.eventHandler !== null)
            ? endpoint_1.Endpoint.fromPartial(object.eventHandler)
            : undefined;
        message.estimatedConsistencyLevel = object.estimatedConsistencyLevel ?? 0;
        message.status = object.status ?? 0;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Subscription.$type, exports.Subscription);
function createBaseSubscription_OpenRequest() {
    return {
        $type: "flipbook.v1.Subscription.OpenRequest",
        subscriptionId: "",
        eventHandler: undefined,
        pushInterval: undefined,
    };
}
exports.Subscription_OpenRequest = {
    $type: "flipbook.v1.Subscription.OpenRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subscriptionId !== "") {
            writer.uint32(10).string(message.subscriptionId);
        }
        if (message.eventHandler !== undefined) {
            endpoint_1.Endpoint.encode(message.eventHandler, writer.uint32(18).fork()).ldelim();
        }
        if (message.pushInterval !== undefined) {
            duration_1.Duration.encode(message.pushInterval, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscription_OpenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionId = reader.string();
                    break;
                case 2:
                    message.eventHandler = endpoint_1.Endpoint.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.pushInterval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.Subscription_OpenRequest.$type,
            subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
            eventHandler: isSet(object.eventHandler) ? endpoint_1.Endpoint.fromJSON(object.eventHandler) : undefined,
            pushInterval: isSet(object.pushInterval) ? duration_1.Duration.fromJSON(object.pushInterval) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
        message.eventHandler !== undefined &&
            (obj.eventHandler = message.eventHandler ? endpoint_1.Endpoint.toJSON(message.eventHandler) : undefined);
        message.pushInterval !== undefined &&
            (obj.pushInterval = message.pushInterval ? duration_1.Duration.toJSON(message.pushInterval) : undefined);
        return obj;
    },
    create(base) {
        return exports.Subscription_OpenRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubscription_OpenRequest();
        message.subscriptionId = object.subscriptionId ?? "";
        message.eventHandler = (object.eventHandler !== undefined && object.eventHandler !== null)
            ? endpoint_1.Endpoint.fromPartial(object.eventHandler)
            : undefined;
        message.pushInterval = (object.pushInterval !== undefined && object.pushInterval !== null)
            ? duration_1.Duration.fromPartial(object.pushInterval)
            : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Subscription_OpenRequest.$type, exports.Subscription_OpenRequest);
function createBaseSubscription_CloseRequest() {
    return { $type: "flipbook.v1.Subscription.CloseRequest", subscriptionId: "" };
}
exports.Subscription_CloseRequest = {
    $type: "flipbook.v1.Subscription.CloseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subscriptionId !== "") {
            writer.uint32(10).string(message.subscriptionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            $type: exports.Subscription_CloseRequest.$type,
            subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
        return obj;
    },
    create(base) {
        return exports.Subscription_CloseRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubscription_CloseRequest();
        message.subscriptionId = object.subscriptionId ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Subscription_CloseRequest.$type, exports.Subscription_CloseRequest);
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=subscription.js.map