"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandlerClient = exports.EventHandlerService = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const event_1 = require("./event");
exports.protobufPackage = "flipbook.v1";
exports.EventHandlerService = {
    handle: {
        path: "/flipbook.v1.EventHandler/Handle",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(event_1.Event.encode(value).finish()),
        requestDeserialize: (value) => event_1.Event.decode(value),
        responseSerialize: (value) => Buffer.from(event_1.Commit.encode(value).finish()),
        responseDeserialize: (value) => event_1.Commit.decode(value),
    },
};
exports.EventHandlerClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EventHandlerService, "flipbook.v1.EventHandler");
//# sourceMappingURL=eventhandler.js.map