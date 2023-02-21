/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  ClientOptions,
  handleBidiStreamingCall,
  makeGenericClientConstructor,
  Metadata,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Commit, Event } from "./event";

export const protobufPackage = "flipbook.v1";

export type EventHandlerService = typeof EventHandlerService;
export const EventHandlerService = {
  handle: {
    path: "/flipbook.v1.EventHandler/Handle",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: Event) => Buffer.from(Event.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Event.decode(value),
    responseSerialize: (value: Commit) => Buffer.from(Commit.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Commit.decode(value),
  },
} as const;

export interface EventHandlerServer extends UntypedServiceImplementation {
  handle: handleBidiStreamingCall<Event, Commit>;
}

export interface EventHandlerClient extends Client {
  handle(): ClientDuplexStream<Event, Commit>;
  handle(options: Partial<CallOptions>): ClientDuplexStream<Event, Commit>;
  handle(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<Event, Commit>;
}

export const EventHandlerClient = makeGenericClientConstructor(
  EventHandlerService,
  "flipbook.v1.EventHandler",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EventHandlerClient;
  service: typeof EventHandlerService;
};
