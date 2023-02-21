"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commit = exports.Event_GetLatestRequest = exports.Event_IterateRequest = exports.Event_AppendRequest = exports.Event = exports.sortingKeyTypeToJSON = exports.sortingKeyTypeFromJSON = exports.SortingKeyType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../google/protobuf/any");
const typeRegistry_1 = require("../../typeRegistry");
const query_1 = require("./query");
exports.protobufPackage = "flipbook.v1";
var SortingKeyType;
(function (SortingKeyType) {
    SortingKeyType[SortingKeyType["SORTING_KEY_INCREASING_SEQUENCE"] = 0] = "SORTING_KEY_INCREASING_SEQUENCE";
    SortingKeyType[SortingKeyType["SORTING_KEY_ARBITRARY_NUMBER"] = 1] = "SORTING_KEY_ARBITRARY_NUMBER";
    SortingKeyType[SortingKeyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SortingKeyType = exports.SortingKeyType || (exports.SortingKeyType = {}));
function sortingKeyTypeFromJSON(object) {
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
exports.sortingKeyTypeFromJSON = sortingKeyTypeFromJSON;
function sortingKeyTypeToJSON(object) {
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
exports.sortingKeyTypeToJSON = sortingKeyTypeToJSON;
function createBaseEvent() {
    return { $type: "flipbook.v1.Event", partitionKey: "", sortingKey: "0", eventPayload: undefined, sortingKeyType: 0 };
}
exports.Event = {
    $type: "flipbook.v1.Event",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.partitionKey !== "") {
            writer.uint32(10).string(message.partitionKey);
        }
        if (message.sortingKey !== "0") {
            writer.uint32(16).int64(message.sortingKey);
        }
        if (message.eventPayload !== undefined) {
            any_1.Any.encode(message.eventPayload, writer.uint32(26).fork()).ldelim();
        }
        if (message.sortingKeyType !== 0) {
            writer.uint32(32).int32(message.sortingKeyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partitionKey = reader.string();
                    break;
                case 2:
                    message.sortingKey = longToString(reader.int64());
                    break;
                case 3:
                    message.eventPayload = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sortingKeyType = reader.int32();
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
            $type: exports.Event.$type,
            partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
            sortingKey: isSet(object.sortingKey) ? String(object.sortingKey) : "0",
            eventPayload: isSet(object.eventPayload) ? any_1.Any.fromJSON(object.eventPayload) : undefined,
            sortingKeyType: isSet(object.sortingKeyType) ? sortingKeyTypeFromJSON(object.sortingKeyType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
        message.sortingKey !== undefined && (obj.sortingKey = message.sortingKey);
        message.eventPayload !== undefined &&
            (obj.eventPayload = message.eventPayload ? any_1.Any.toJSON(message.eventPayload) : undefined);
        message.sortingKeyType !== undefined && (obj.sortingKeyType = sortingKeyTypeToJSON(message.sortingKeyType));
        return obj;
    },
    create(base) {
        return exports.Event.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.partitionKey = object.partitionKey ?? "";
        message.sortingKey = object.sortingKey ?? "0";
        message.eventPayload = (object.eventPayload !== undefined && object.eventPayload !== null)
            ? any_1.Any.fromPartial(object.eventPayload)
            : undefined;
        message.sortingKeyType = object.sortingKeyType ?? 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Event.$type, exports.Event);
function createBaseEvent_AppendRequest() {
    return { $type: "flipbook.v1.Event.AppendRequest", events: [] };
}
exports.Event_AppendRequest = {
    $type: "flipbook.v1.Event.AppendRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent_AppendRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            $type: exports.Event_AppendRequest.$type,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map((e) => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    create(base) {
        return exports.Event_AppendRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent_AppendRequest();
        message.events = object.events?.map((e) => exports.Event.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Event_AppendRequest.$type, exports.Event_AppendRequest);
function createBaseEvent_IterateRequest() {
    return { $type: "flipbook.v1.Event.IterateRequest", partitionKey: "", query: undefined, batchSize: "0" };
}
exports.Event_IterateRequest = {
    $type: "flipbook.v1.Event.IterateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.partitionKey !== "") {
            writer.uint32(10).string(message.partitionKey);
        }
        if (message.query !== undefined) {
            query_1.Query.encode(message.query, writer.uint32(18).fork()).ldelim();
        }
        if (message.batchSize !== "0") {
            writer.uint32(24).int64(message.batchSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent_IterateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partitionKey = reader.string();
                    break;
                case 2:
                    message.query = query_1.Query.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.batchSize = longToString(reader.int64());
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
            $type: exports.Event_IterateRequest.$type,
            partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
            query: isSet(object.query) ? query_1.Query.fromJSON(object.query) : undefined,
            batchSize: isSet(object.batchSize) ? String(object.batchSize) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
        message.query !== undefined && (obj.query = message.query ? query_1.Query.toJSON(message.query) : undefined);
        message.batchSize !== undefined && (obj.batchSize = message.batchSize);
        return obj;
    },
    create(base) {
        return exports.Event_IterateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent_IterateRequest();
        message.partitionKey = object.partitionKey ?? "";
        message.query = (object.query !== undefined && object.query !== null) ? query_1.Query.fromPartial(object.query) : undefined;
        message.batchSize = object.batchSize ?? "0";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Event_IterateRequest.$type, exports.Event_IterateRequest);
function createBaseEvent_GetLatestRequest() {
    return { $type: "flipbook.v1.Event.GetLatestRequest", partitionKey: "" };
}
exports.Event_GetLatestRequest = {
    $type: "flipbook.v1.Event.GetLatestRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.partitionKey !== "") {
            writer.uint32(10).string(message.partitionKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            $type: exports.Event_GetLatestRequest.$type,
            partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
        return obj;
    },
    create(base) {
        return exports.Event_GetLatestRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent_GetLatestRequest();
        message.partitionKey = object.partitionKey ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Event_GetLatestRequest.$type, exports.Event_GetLatestRequest);
function createBaseCommit() {
    return { $type: "flipbook.v1.Commit", partitionKey: "", sortingKey: "0" };
}
exports.Commit = {
    $type: "flipbook.v1.Commit",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.partitionKey !== "") {
            writer.uint32(10).string(message.partitionKey);
        }
        if (message.sortingKey !== "0") {
            writer.uint32(16).int64(message.sortingKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partitionKey = reader.string();
                    break;
                case 2:
                    message.sortingKey = longToString(reader.int64());
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
            $type: exports.Commit.$type,
            partitionKey: isSet(object.partitionKey) ? String(object.partitionKey) : "",
            sortingKey: isSet(object.sortingKey) ? String(object.sortingKey) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.partitionKey !== undefined && (obj.partitionKey = message.partitionKey);
        message.sortingKey !== undefined && (obj.sortingKey = message.sortingKey);
        return obj;
    },
    create(base) {
        return exports.Commit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.partitionKey = object.partitionKey ?? "";
        message.sortingKey = object.sortingKey ?? "0";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Commit.$type, exports.Commit);
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=event.js.map