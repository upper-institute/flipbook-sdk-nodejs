/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  ClientOptions,
  ClientUnaryCall,
  handleBidiStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Empty } from "../../google/protobuf/empty";
import { Event, Event_AppendRequest, Event_GetLatestRequest, Event_IterateRequest } from "./event";

export const protobufPackage = "flipbook.v1";

export type EventStoreService = typeof EventStoreService;
export const EventStoreService = {
  append: {
    path: "/flipbook.v1.EventStore/Append",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Event_AppendRequest) => Buffer.from(Event_AppendRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Event_AppendRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  iterate: {
    path: "/flipbook.v1.EventStore/Iterate",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: Event_IterateRequest) => Buffer.from(Event_IterateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Event_IterateRequest.decode(value),
    responseSerialize: (value: Event) => Buffer.from(Event.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Event.decode(value),
  },
  getLatest: {
    path: "/flipbook.v1.EventStore/GetLatest",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Event_GetLatestRequest) => Buffer.from(Event_GetLatestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Event_GetLatestRequest.decode(value),
    responseSerialize: (value: Event) => Buffer.from(Event.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Event.decode(value),
  },
} as const;

export interface EventStoreServer extends UntypedServiceImplementation {
  append: handleUnaryCall<Event_AppendRequest, Empty>;
  iterate: handleBidiStreamingCall<Event_IterateRequest, Event>;
  getLatest: handleUnaryCall<Event_GetLatestRequest, Event>;
}

export interface EventStoreClient extends Client {
  append(
    request: Event_AppendRequest,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  append(
    request: Event_AppendRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  append(
    request: Event_AppendRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  iterate(): ClientDuplexStream<Event_IterateRequest, Event>;
  iterate(options: Partial<CallOptions>): ClientDuplexStream<Event_IterateRequest, Event>;
  iterate(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<Event_IterateRequest, Event>;
  getLatest(
    request: Event_GetLatestRequest,
    callback: (error: ServiceError | null, response: Event) => void,
  ): ClientUnaryCall;
  getLatest(
    request: Event_GetLatestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Event) => void,
  ): ClientUnaryCall;
  getLatest(
    request: Event_GetLatestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Event) => void,
  ): ClientUnaryCall;
}

export const EventStoreClient = makeGenericClientConstructor(
  EventStoreService,
  "flipbook.v1.EventStore",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EventStoreClient;
  service: typeof EventStoreService;
};
