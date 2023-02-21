import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "flipbook.v1";
export declare enum QueryStop {
    QUERY_STOP_LATEST = 0,
    QUERY_STOP_EXACT = 1,
    UNRECOGNIZED = -1
}
export declare function queryStopFromJSON(object: any): QueryStop;
export declare function queryStopToJSON(object: QueryStop): string;
export interface Query {
    $type: "flipbook.v1.Query";
    startSortingKey: string;
    stopSortingKey: string;
    stop: QueryStop;
}
export declare const Query: {
    $type: "flipbook.v1.Query";
    encode(message: Query, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Query;
    fromJSON(object: any): Query;
    toJSON(message: Query): unknown;
    create<I extends {
        startSortingKey?: string | undefined;
        stopSortingKey?: string | undefined;
        stop?: QueryStop | undefined;
    } & {
        startSortingKey?: string | undefined;
        stopSortingKey?: string | undefined;
        stop?: QueryStop | undefined;
    } & { [K in Exclude<keyof I, "$type" | "startSortingKey" | "stopSortingKey" | "stop">]: never; }>(base?: I | undefined): Query;
    fromPartial<I_1 extends {
        startSortingKey?: string | undefined;
        stopSortingKey?: string | undefined;
        stop?: QueryStop | undefined;
    } & {
        startSortingKey?: string | undefined;
        stopSortingKey?: string | undefined;
        stop?: QueryStop | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "startSortingKey" | "stopSortingKey" | "stop">]: never; }>(object: I_1): Query;
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
//# sourceMappingURL=query.d.ts.map