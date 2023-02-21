/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientDuplexStream, ClientOptions, handleBidiStreamingCall, Metadata, UntypedServiceImplementation } from "@grpc/grpc-js";
import { Commit, Event } from "./event";
export declare const protobufPackage = "flipbook.v1";
export type EventHandlerService = typeof EventHandlerService;
export declare const EventHandlerService: {
    readonly handle: {
        readonly path: "/flipbook.v1.EventHandler/Handle";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: Event) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Event;
        readonly responseSerialize: (value: Commit) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Commit;
    };
};
export interface EventHandlerServer extends UntypedServiceImplementation {
    handle: handleBidiStreamingCall<Event, Commit>;
}
export interface EventHandlerClient extends Client {
    handle(): ClientDuplexStream<Event, Commit>;
    handle(options: Partial<CallOptions>): ClientDuplexStream<Event, Commit>;
    handle(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<Event, Commit>;
}
export declare const EventHandlerClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EventHandlerClient;
    service: typeof EventHandlerService;
};
//# sourceMappingURL=eventhandler.d.ts.map