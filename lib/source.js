"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeSourceFactory = exports.Source = void 0;
const event_1 = require("./proto/api/v1/event");
const errors_1 = require("./errors");
const deepcopy_1 = __importDefault(require("deepcopy"));
class Source {
    constructor(state, handlers, store, sortingKeyType, cache) {
        this.state = state;
        this.handlers = handlers;
        this.store = store;
        this.sortingKeyType = sortingKeyType;
        this.cache = cache;
    }
    get partitionKey() {
        return this.state.partitionKey;
    }
    get sortingKey() {
        return this.state.sortingKey;
    }
    apply(event) {
        const sortingKey = BigInt(event.sortingKey);
        if (this.state.sortingKey > sortingKey) {
            return;
        }
        const { typeUrl, value } = event.eventPayload;
        const handler = this.handlers.get(typeUrl);
        if (handler) {
            handler(this.state, value);
            this.state.sortingKey = sortingKey;
            return;
        }
        throw new errors_1.UnhandledEventError({
            partitionKey: this.partitionKey,
            sortingKey: event.sortingKey,
            typeUrl,
        });
    }
    async restore(to, batchSize) {
        let startSortingKey = this.sortingKey;
        if (this.cache) {
            const state = this.cache.get(this.partitionKey);
            if (state) {
                this.state = (0, deepcopy_1.default)(state);
                startSortingKey = this.sortingKey;
            }
        }
        await this.store.restore(this, to, batchSize);
        if (this.cache && this.sortingKey > startSortingKey)
            this.cache.set(this.partitionKey, (0, deepcopy_1.default)(this.state));
    }
    async append(...events) {
        for (const event of events) {
            if (this.sortingKeyType !== undefined)
                event.sortingKeyType = this.sortingKeyType;
            this.apply(event);
        }
        await this.store.append(...events);
    }
    emit(sortingKey, evt, encoder, sortingKeyType) {
        return event_1.Event.create({
            partitionKey: this.partitionKey,
            sortingKey: sortingKey.toString(),
            sortingKeyType: sortingKeyType ?? this.sortingKeyType ?? event_1.SortingKeyType.SORTING_KEY_ARBITRARY_NUMBER,
            eventPayload: { typeUrl: evt.$type, value: Buffer.from(encoder.encode(evt).finish()) }
        });
    }
}
exports.Source = Source;
const MakeSourceFactory = ({ store, handlers, sortingKeyType, cache }) => (state) => {
    return new Source(state, handlers, store, sortingKeyType, cache);
};
exports.MakeSourceFactory = MakeSourceFactory;
//# sourceMappingURL=source.js.map