"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnhandledEventError = exports.ApplicationError = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
class ApplicationError extends Error {
    constructor(message) {
        super(JSON.stringify(message));
        this.grpcStatus = grpc_js_1.status.UNKNOWN;
    }
    grpc() {
        return {
            message: this.name,
            details: this.message,
            code: this.grpcStatus
        };
    }
}
exports.ApplicationError = ApplicationError;
class UnhandledEventError extends ApplicationError {
    constructor() {
        super(...arguments);
        this.name = 'UnhandledEventError';
        this.grpcStatus = grpc_js_1.status.DATA_LOSS;
    }
}
exports.UnhandledEventError = UnhandledEventError;
//# sourceMappingURL=errors.js.map