import { 
    ServerErrorResponse,
    status as grpcStatus,
} from "@grpc/grpc-js"

export class ApplicationError extends Error {

    public grpcStatus: grpcStatus = grpcStatus.UNKNOWN

    constructor(message: any) {
        super(JSON.stringify(message))
    }

    public grpc() {
        return <ServerErrorResponse>{
            message: this.name,
            details: this.message,
            code: this.grpcStatus
        }
    }

}

export class UnhandledEventError extends ApplicationError {
    public name = 'UnhandledEventError'
    public grpcStatus = grpcStatus.DATA_LOSS
}
