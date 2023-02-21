"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../typeRegistry");
exports.protobufPackage = "google.protobuf";
function createBaseTimestamp() {
    return { $type: "google.protobuf.Timestamp", seconds: "0", nanos: 0 };
}
exports.Timestamp = {
    $type: "google.protobuf.Timestamp",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.seconds !== "0") {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = longToString(reader.int64());
                    break;
                case 2:
                    message.nanos = reader.int32();
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
            $type: exports.Timestamp.$type,
            seconds: isSet(object.seconds) ? String(object.seconds) : "0",
            nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined && (obj.seconds = message.seconds);
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    create(base) {
        return exports.Timestamp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        message.seconds = object.seconds ?? "0";
        message.nanos = object.nanos ?? 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Timestamp.$type, exports.Timestamp);
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
//# sourceMappingURL=timestamp.js.map