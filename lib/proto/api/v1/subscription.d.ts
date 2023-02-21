import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Endpoint } from "./endpoint";
export declare const protobufPackage = "flipbook.v1";
export declare enum SubscriptionStatus {
    SUBSCRIPTION_STATUS_IDLE = 0,
    SUBSCRIPTION_STATUS_ACTIVE = 1,
    UNRECOGNIZED = -1
}
export declare function subscriptionStatusFromJSON(object: any): SubscriptionStatus;
export declare function subscriptionStatusToJSON(object: SubscriptionStatus): string;
export interface Subscription {
    $type: "flipbook.v1.Subscription";
    subscriptionId: string;
    eventHandler: Endpoint | undefined;
    estimatedConsistencyLevel: number;
    status: SubscriptionStatus;
    updatedAt: Date | undefined;
}
export interface Subscription_OpenRequest {
    $type: "flipbook.v1.Subscription.OpenRequest";
    subscriptionId: string;
    eventHandler: Endpoint | undefined;
    pushInterval: Duration | undefined;
}
export interface Subscription_CloseRequest {
    $type: "flipbook.v1.Subscription.CloseRequest";
    subscriptionId: string;
}
export declare const Subscription: {
    $type: "flipbook.v1.Subscription";
    encode(message: Subscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription;
    fromJSON(object: any): Subscription;
    toJSON(message: Subscription): unknown;
    create<I extends {
        status?: SubscriptionStatus | undefined;
        subscriptionId?: string | undefined;
        eventHandler?: {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } | undefined;
        estimatedConsistencyLevel?: number | undefined;
        updatedAt?: Date | undefined;
    } & {
        status?: SubscriptionStatus | undefined;
        subscriptionId?: string | undefined;
        eventHandler?: ({
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & { [K in Exclude<keyof I["eventHandler"], "$type" | "address" | "port" | "addressFamily">]: never; }) | undefined;
        estimatedConsistencyLevel?: number | undefined;
        updatedAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "status" | "subscriptionId" | "eventHandler" | "estimatedConsistencyLevel" | "updatedAt">]: never; }>(base?: I | undefined): Subscription;
    fromPartial<I_1 extends {
        status?: SubscriptionStatus | undefined;
        subscriptionId?: string | undefined;
        eventHandler?: {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } | undefined;
        estimatedConsistencyLevel?: number | undefined;
        updatedAt?: Date | undefined;
    } & {
        status?: SubscriptionStatus | undefined;
        subscriptionId?: string | undefined;
        eventHandler?: ({
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & { [K_2 in Exclude<keyof I_1["eventHandler"], "$type" | "address" | "port" | "addressFamily">]: never; }) | undefined;
        estimatedConsistencyLevel?: number | undefined;
        updatedAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "status" | "subscriptionId" | "eventHandler" | "estimatedConsistencyLevel" | "updatedAt">]: never; }>(object: I_1): Subscription;
};
export declare const Subscription_OpenRequest: {
    $type: "flipbook.v1.Subscription.OpenRequest";
    encode(message: Subscription_OpenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription_OpenRequest;
    fromJSON(object: any): Subscription_OpenRequest;
    toJSON(message: Subscription_OpenRequest): unknown;
    create<I extends {
        subscriptionId?: string | undefined;
        eventHandler?: {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } | undefined;
        pushInterval?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        subscriptionId?: string | undefined;
        eventHandler?: ({
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & { [K in Exclude<keyof I["eventHandler"], "$type" | "address" | "port" | "addressFamily">]: never; }) | undefined;
        pushInterval?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & { [K_1 in Exclude<keyof I["pushInterval"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "subscriptionId" | "eventHandler" | "pushInterval">]: never; }>(base?: I | undefined): Subscription_OpenRequest;
    fromPartial<I_1 extends {
        subscriptionId?: string | undefined;
        eventHandler?: {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } | undefined;
        pushInterval?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        subscriptionId?: string | undefined;
        eventHandler?: ({
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & {
            address?: string | undefined;
            port?: number | undefined;
            addressFamily?: import("./endpoint").Endpoint_AddressFamily | undefined;
        } & { [K_3 in Exclude<keyof I_1["eventHandler"], "$type" | "address" | "port" | "addressFamily">]: never; }) | undefined;
        pushInterval?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["pushInterval"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "subscriptionId" | "eventHandler" | "pushInterval">]: never; }>(object: I_1): Subscription_OpenRequest;
};
export declare const Subscription_CloseRequest: {
    $type: "flipbook.v1.Subscription.CloseRequest";
    encode(message: Subscription_CloseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription_CloseRequest;
    fromJSON(object: any): Subscription_CloseRequest;
    toJSON(message: Subscription_CloseRequest): unknown;
    create<I extends {
        subscriptionId?: string | undefined;
    } & {
        subscriptionId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "subscriptionId">]: never; }>(base?: I | undefined): Subscription_CloseRequest;
    fromPartial<I_1 extends {
        subscriptionId?: string | undefined;
    } & {
        subscriptionId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "subscriptionId">]: never; }>(object: I_1): Subscription_CloseRequest;
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
//# sourceMappingURL=subscription.d.ts.map