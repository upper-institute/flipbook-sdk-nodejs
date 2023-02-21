import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "flipbook.v1";
export interface Endpoint {
    $type: "flipbook.v1.Endpoint";
    address: string;
    port: number;
    addressFamily: Endpoint_AddressFamily;
}
export declare enum Endpoint_AddressFamily {
    ADDRESS_FAMILY_IPV4 = 0,
    ADDRESS_FAMILY_IPV6 = 1,
    UNRECOGNIZED = -1
}
export declare function endpoint_AddressFamilyFromJSON(object: any): Endpoint_AddressFamily;
export declare function endpoint_AddressFamilyToJSON(object: Endpoint_AddressFamily): string;
export declare const Endpoint: {
    $type: "flipbook.v1.Endpoint";
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    create<I extends {
        address?: string | undefined;
        port?: number | undefined;
        addressFamily?: Endpoint_AddressFamily | undefined;
    } & {
        address?: string | undefined;
        port?: number | undefined;
        addressFamily?: Endpoint_AddressFamily | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address" | "port" | "addressFamily">]: never; }>(base?: I | undefined): Endpoint;
    fromPartial<I_1 extends {
        address?: string | undefined;
        port?: number | undefined;
        addressFamily?: Endpoint_AddressFamily | undefined;
    } & {
        address?: string | undefined;
        port?: number | undefined;
        addressFamily?: Endpoint_AddressFamily | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address" | "port" | "addressFamily">]: never; }>(object: I_1): Endpoint;
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
//# sourceMappingURL=endpoint.d.ts.map