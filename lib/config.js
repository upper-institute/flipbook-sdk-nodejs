"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentConfiguration = void 0;
exports.EnvironmentConfiguration = {
    get flipbookServerAddress() {
        return process.env.FLIPBOOK_SERVER_ADDRESS || '127.0.0.1:6333';
    },
    get iterateBatchSize() {
        return BigInt(250);
    }
};
//# sourceMappingURL=config.js.map