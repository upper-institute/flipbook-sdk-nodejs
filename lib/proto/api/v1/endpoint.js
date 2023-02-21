"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.endpoint_AddressFamilyToJSON = exports.endpoint_AddressFamilyFromJSON = exports.Endpoint_AddressFamily = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../typeRegistry");
exports.protobufPackage = "flipbook.v1";
var Endpoint_AddressFamily;
(function (Endpoint_AddressFamily) {
    Endpoint_AddressFamily[Endpoint_AddressFamily["ADDRESS_FAMILY_IPV4"] = 0] = "ADDRESS_FAMILY_IPV4";
    Endpoint_AddressFamily[Endpoint_AddressFamily["ADDRESS_FAMILY_IPV6"] = 1] = "ADDRESS_FAMILY_IPV6";
    Endpoint_AddressFamily[Endpoint_AddressFamily["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Endpoint_AddressFamily = exports.Endpoint_AddressFamily || (exports.Endpoint_AddressFamily = {}));
function endpoint_AddressFamilyFromJSON(object) {
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
exports.endpoint_AddressFamilyFromJSON = endpoint_AddressFamilyFromJSON;
function endpoint_AddressFamilyToJSON(object) {
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
exports.endpoint_AddressFamilyToJSON = endpoint_AddressFamilyToJSON;
function createBaseEndpoint() {
    return { $type: "flipbook.v1.Endpoint", address: "", port: 0, addressFamily: 0 };
}
exports.Endpoint = {
    $type: "flipbook.v1.Endpoint",
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.addressFamily = reader.int32();
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
            $type: exports.Endpoint.$type,
            address: isSet(object.address) ? String(object.address) : "",
            port: isSet(object.port) ? Number(object.port) : 0,
            addressFamily: isSet(object.addressFamily) ? endpoint_AddressFamilyFromJSON(object.addressFamily) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.addressFamily !== undefined && (obj.addressFamily = endpoint_AddressFamilyToJSON(message.addressFamily));
        return obj;
    },
    create(base) {
        return exports.Endpoint.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEndpoint();
        message.address = object.address ?? "";
        message.port = object.port ?? 0;
        message.addressFamily = object.addressFamily ?? 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Endpoint.$type, exports.Endpoint);
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=endpoint.js.map