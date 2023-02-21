import { ServerErrorResponse, status as grpcStatus } from "@grpc/grpc-js";
export declare class ApplicationError extends Error {
    grpcStatus: grpcStatus;
    constructor(message: any);
    grpc(): ServerErrorResponse;
}
export declare class UnhandledEventError extends ApplicationError {
    name: string;
    grpcStatus: grpcStatus;
}
//# sourceMappingURL=errors.d.ts.map