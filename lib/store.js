"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const event_1 = require("./proto/api/v1/event");
const eventstore_1 = require("./proto/api/v1/eventstore");
const query_1 = require("./proto/api/v1/query");
const endIterationSortingKey = "-1";
class Store {
    constructor(config) {
        this.config = config;
        this.client = new eventstore_1.EventStoreClient(config.flipbookServerAddress, grpc_js_1.credentials.createInsecure());
    }
    async append(...events) {
        return new Promise((resolve, reject) => {
            const req = event_1.Event_AppendRequest.create({ events });
            this.client.append(req, (e, res) => {
                if (e)
                    return reject(e);
                resolve();
            });
        });
    }
    async restore(agg, to, batchSize) {
        const query = query_1.Query.create({
            startSortingKey: (agg.sortingKey + 1n).toString(),
            stopSortingKey: "0",
            stop: query_1.QueryStop.QUERY_STOP_LATEST
        });
        if (to !== undefined) {
            query.stopSortingKey = to.toString();
            query.stop = query_1.QueryStop.QUERY_STOP_EXACT;
        }
        const call = this.client.iterate();
        const partitionKey = agg.partitionKey;
        const req = event_1.Event_IterateRequest.create({
            partitionKey,
            query,
            batchSize: (batchSize ?? this.config.iterateBatchSize).toString(),
        });
        var eventCount = 0;
        call.on('data', (ev) => {
            if (ev.sortingKey == endIterationSortingKey) {
                if (eventCount > 0) {
                    eventCount = 0;
                    call.write(req);
                    return;
                }
                call.end();
                return;
            }
            eventCount++;
            agg.apply(ev);
            req.query.startSortingKey = (agg.sortingKey + 1n).toString();
        });
        call.write(req);
        await new Promise((resolve, reject) => {
            call.on('end', () => {
                resolve();
            });
            call.on('error', (e) => {
                reject(e);
            });
        });
    }
}
exports.Store = Store;
//# sourceMappingURL=store.js.map