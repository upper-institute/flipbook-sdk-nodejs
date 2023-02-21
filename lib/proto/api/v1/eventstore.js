"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStoreClient = exports.EventStoreService = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const empty_1 = require("../../google/protobuf/empty");
const event_1 = require("./event");
exports.protobufPackage = "flipbook.v1";
exports.EventStoreService = {
    append: {
        path: "/flipbook.v1.EventStore/Append",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(event_1.Event_AppendRequest.encode(value).finish()),
        requestDeserialize: (value) => event_1.Event_AppendRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
    iterate: {
        path: "/flipbook.v1.EventStore/Iterate",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(event_1.Event_IterateRequest.encode(value).finish()),
        requestDeserialize: (value) => event_1.Event_IterateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(event_1.Event.encode(value).finish()),
        responseDeserialize: (value) => event_1.Event.decode(value),
    },
    getLatest: {
        path: "/flipbook.v1.EventStore/GetLatest",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(event_1.Event_GetLatestRequest.encode(value).finish()),
        requestDeserialize: (value) => event_1.Event_GetLatestRequest.decode(value),
        responseSerialize: (value) => Buffer.from(event_1.Event.encode(value).finish()),
        responseDeserialize: (value) => event_1.Event.decode(value),
    },
};
exports.EventStoreClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EventStoreService, "flipbook.v1.EventStore");
//# sourceMappingURL=eventstore.js.map