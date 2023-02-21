"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = exports.queryStopToJSON = exports.queryStopFromJSON = exports.QueryStop = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../typeRegistry");
exports.protobufPackage = "flipbook.v1";
var QueryStop;
(function (QueryStop) {
    QueryStop[QueryStop["QUERY_STOP_LATEST"] = 0] = "QUERY_STOP_LATEST";
    QueryStop[QueryStop["QUERY_STOP_EXACT"] = 1] = "QUERY_STOP_EXACT";
    QueryStop[QueryStop["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(QueryStop = exports.QueryStop || (exports.QueryStop = {}));
function queryStopFromJSON(object) {
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
exports.queryStopFromJSON = queryStopFromJSON;
function queryStopToJSON(object) {
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
exports.queryStopToJSON = queryStopToJSON;
function createBaseQuery() {
    return { $type: "flipbook.v1.Query", startSortingKey: "0", stopSortingKey: "0", stop: 0 };
}
exports.Query = {
    $type: "flipbook.v1.Query",
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startSortingKey = longToString(reader.int64());
                    break;
                case 2:
                    message.stopSortingKey = longToString(reader.int64());
                    break;
                case 3:
                    message.stop = reader.int32();
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
            $type: exports.Query.$type,
            startSortingKey: isSet(object.startSortingKey) ? String(object.startSortingKey) : "0",
            stopSortingKey: isSet(object.stopSortingKey) ? String(object.stopSortingKey) : "0",
            stop: isSet(object.stop) ? queryStopFromJSON(object.stop) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.startSortingKey !== undefined && (obj.startSortingKey = message.startSortingKey);
        message.stopSortingKey !== undefined && (obj.stopSortingKey = message.stopSortingKey);
        message.stop !== undefined && (obj.stop = queryStopToJSON(message.stop));
        return obj;
    },
    create(base) {
        return exports.Query.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuery();
        message.startSortingKey = object.startSortingKey ?? "0";
        message.stopSortingKey = object.stopSortingKey ?? "0";
        message.stop = object.stop ?? 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Query.$type, exports.Query);
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
//# sourceMappingURL=query.js.map