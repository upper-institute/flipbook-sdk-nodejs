"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../typeRegistry");
exports.protobufPackage = "google.protobuf";
function createBaseEmpty() {
    return { $type: "google.protobuf.Empty" };
}
exports.Empty = {
    $type: "google.protobuf.Empty",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return { $type: exports.Empty.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.Empty.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Empty.$type, exports.Empty);
//# sourceMappingURL=empty.js.map