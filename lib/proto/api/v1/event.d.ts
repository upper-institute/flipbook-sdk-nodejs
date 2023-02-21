/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { Query } from "./query";
export declare const protobufPackage = "flipbook.v1";
export declare enum SortingKeyType {
    SORTING_KEY_INCREASING_SEQUENCE = 0,
    SORTING_KEY_ARBITRARY_NUMBER = 1,
    UNRECOGNIZED = -1
}
export declare function sortingKeyTypeFromJSON(object: any): SortingKeyType;
export declare function sortingKeyTypeToJSON(object: SortingKeyType): string;
export interface Event {
    $type: "flipbook.v1.Event";
    /**
     * This key is used to route events to partitions. It must be unique for the
     * source generating it. We recommend using any well known standard like UUIDs
     * with a meaningful representation for business domainds
     */
    partitionKey: string;
    /**
     * This key is used to control two things:
     * 1. The payload stored in this exact sorting key (a sorting key can only have 1 payload)
     * 2. The sorting order for EventStore.Iterate()
     *
     * An event "id" is the combination of the partition_key+sorting_key
     */
    sortingKey: string;
    eventPayload: Any | undefined;
    sortingKeyType: SortingKeyType;
}
export interface Event_AppendRequest {
    $type: "flipbook.v1.Event.AppendRequest";
    events: Event[];
}
export interface Event_IterateRequest {
    $type: "flipbook.v1.Event.IterateRequest";
    partitionKey: string;
    query: Query | undefined;
    batchSize: string;
}
export interface Event_GetLatestRequest {
    $type: "flipbook.v1.Event.GetLatestRequest";
    partitionKey: string;
}
export interface Commit {
    $type: "flipbook.v1.Commit";
    partitionKey: string;
    sortingKey: string;
}
export declare const Event: {
    $type: "flipbook.v1.Event";
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create<I extends {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
        eventPayload?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        sortingKeyType?: SortingKeyType | undefined;
    } & {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
        eventPayload?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["eventPayload"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
        sortingKeyType?: SortingKeyType | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "partitionKey" | "sortingKey" | "eventPayload" | "sortingKeyType">]: never; }>(base?: I | undefined): Event;
    fromPartial<I_1 extends {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
        eventPayload?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        sortingKeyType?: SortingKeyType | undefined;
    } & {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
        eventPayload?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["eventPayload"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
        sortingKeyType?: SortingKeyType | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "partitionKey" | "sortingKey" | "eventPayload" | "sortingKeyType">]: never; }>(object: I_1): Event;
};
export declare const Event_AppendRequest: {
    $type: "flipbook.v1.Event.AppendRequest";
    encode(message: Event_AppendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event_AppendRequest;
    fromJSON(object: any): Event_AppendRequest;
    toJSON(message: Event_AppendRequest): unknown;
    create<I extends {
        events?: {
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        }[] | undefined;
    } & {
        events?: ({
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        }[] & ({
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        } & {
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K in Exclude<keyof I["events"][number]["eventPayload"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        } & { [K_1 in Exclude<keyof I["events"][number], "$type" | "partitionKey" | "sortingKey" | "eventPayload" | "sortingKeyType">]: never; })[] & { [K_2 in Exclude<keyof I["events"], "$type" | keyof {
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "events">]: never; }>(base?: I | undefined): Event_AppendRequest;
    fromPartial<I_1 extends {
        events?: {
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        }[] | undefined;
    } & {
        events?: ({
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        }[] & ({
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        } & {
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I_1["events"][number]["eventPayload"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        } & { [K_5 in Exclude<keyof I_1["events"][number], "$type" | "partitionKey" | "sortingKey" | "eventPayload" | "sortingKeyType">]: never; })[] & { [K_6 in Exclude<keyof I_1["events"], "$type" | keyof {
            partitionKey?: string | undefined;
            sortingKey?: string | undefined;
            eventPayload?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            sortingKeyType?: SortingKeyType | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "events">]: never; }>(object: I_1): Event_AppendRequest;
};
export declare const Event_IterateRequest: {
    $type: "flipbook.v1.Event.IterateRequest";
    encode(message: Event_IterateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event_IterateRequest;
    fromJSON(object: any): Event_IterateRequest;
    toJSON(message: Event_IterateRequest): unknown;
    create<I extends {
        partitionKey?: string | undefined;
        query?: {
            startSortingKey?: string | undefined;
            stopSortingKey?: string | undefined;
            stop?: import("./query").QueryStop | undefined;
        } | undefined;
        batchSize?: string | undefined;
    } & {
        partitionKey?: string | undefined;
        query?: ({
            startSortingKey?: string | undefined;
            stopSortingKey?: string | undefined;
            stop?: import("./query").QueryStop | undefined;
        } & {
            startSortingKey?: string | undefined;
            stopSortingKey?: string | undefined;
            stop?: import("./query").QueryStop | undefined;
        } & { [K in Exclude<keyof I["query"], "$type" | "startSortingKey" | "stopSortingKey" | "stop">]: never; }) | undefined;
        batchSize?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "partitionKey" | "query" | "batchSize">]: never; }>(base?: I | undefined): Event_IterateRequest;
    fromPartial<I_1 extends {
        partitionKey?: string | undefined;
        query?: {
            startSortingKey?: string | undefined;
            stopSortingKey?: string | undefined;
            stop?: import("./query").QueryStop | undefined;
        } | undefined;
        batchSize?: string | undefined;
    } & {
        partitionKey?: string | undefined;
        query?: ({
            startSortingKey?: string | undefined;
            stopSortingKey?: string | undefined;
            stop?: import("./query").QueryStop | undefined;
        } & {
            startSortingKey?: string | undefined;
            stopSortingKey?: string | undefined;
            stop?: import("./query").QueryStop | undefined;
        } & { [K_2 in Exclude<keyof I_1["query"], "$type" | "startSortingKey" | "stopSortingKey" | "stop">]: never; }) | undefined;
        batchSize?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "partitionKey" | "query" | "batchSize">]: never; }>(object: I_1): Event_IterateRequest;
};
export declare const Event_GetLatestRequest: {
    $type: "flipbook.v1.Event.GetLatestRequest";
    encode(message: Event_GetLatestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event_GetLatestRequest;
    fromJSON(object: any): Event_GetLatestRequest;
    toJSON(message: Event_GetLatestRequest): unknown;
    create<I extends {
        partitionKey?: string | undefined;
    } & {
        partitionKey?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "partitionKey">]: never; }>(base?: I | undefined): Event_GetLatestRequest;
    fromPartial<I_1 extends {
        partitionKey?: string | undefined;
    } & {
        partitionKey?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "partitionKey">]: never; }>(object: I_1): Event_GetLatestRequest;
};
export declare const Commit: {
    $type: "flipbook.v1.Commit";
    encode(message: Commit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commit;
    fromJSON(object: any): Commit;
    toJSON(message: Commit): unknown;
    create<I extends {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
    } & {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "partitionKey" | "sortingKey">]: never; }>(base?: I | undefined): Commit;
    fromPartial<I_1 extends {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
    } & {
        partitionKey?: string | undefined;
        sortingKey?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "partitionKey" | "sortingKey">]: never; }>(object: I_1): Commit;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
//# sourceMappingURL=event.d.ts.map