/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientDuplexStream, ClientOptions, ClientUnaryCall, handleBidiStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty } from "../../google/protobuf/empty";
import { Event, Event_AppendRequest, Event_GetLatestRequest, Event_IterateRequest } from "./event";
export declare const protobufPackage = "flipbook.v1";
export type EventStoreService = typeof EventStoreService;
export declare const EventStoreService: {
    readonly append: {
        readonly path: "/flipbook.v1.EventStore/Append";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Event_AppendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Event_AppendRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly iterate: {
        readonly path: "/flipbook.v1.EventStore/Iterate";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: Event_IterateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Event_IterateRequest;
        readonly responseSerialize: (value: Event) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Event;
    };
    readonly getLatest: {
        readonly path: "/flipbook.v1.EventStore/GetLatest";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Event_GetLatestRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Event_GetLatestRequest;
        readonly responseSerialize: (value: Event) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Event;
    };
};
export interface EventStoreServer extends UntypedServiceImplementation {
    append: handleUnaryCall<Event_AppendRequest, Empty>;
    iterate: handleBidiStreamingCall<Event_IterateRequest, Event>;
    getLatest: handleUnaryCall<Event_GetLatestRequest, Event>;
}
export interface EventStoreClient extends Client {
    append(request: Event_AppendRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    append(request: Event_AppendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    append(request: Event_AppendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    iterate(): ClientDuplexStream<Event_IterateRequest, Event>;
    iterate(options: Partial<CallOptions>): ClientDuplexStream<Event_IterateRequest, Event>;
    iterate(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<Event_IterateRequest, Event>;
    getLatest(request: Event_GetLatestRequest, callback: (error: ServiceError | null, response: Event) => void): ClientUnaryCall;
    getLatest(request: Event_GetLatestRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Event) => void): ClientUnaryCall;
    getLatest(request: Event_GetLatestRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Event) => void): ClientUnaryCall;
}
export declare const EventStoreClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EventStoreClient;
    service: typeof EventStoreService;
};
//# sourceMappingURL=eventstore.d.ts.map