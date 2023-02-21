"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeSourceFactory = exports.Source = void 0;
const event_1 = require("./proto/api/v1/event");
const errors_1 = require("./errors");
class Source {
    constructor(state, handlers, store, sortingKeyType) {
        this.state = state;
        this.handlers = handlers;
        this.store = store;
        this.sortingKeyType = sortingKeyType;
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
        await this.store.restore(this, to, batchSize);
    }
    async append(...events) {
        for (const event of events) {
            event.partitionKey = this.partitionKey;
            if (this.sortingKeyType)
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
const MakeSourceFactory = (store, handlers, sortingKeyType) => (state) => {
    return new Source(state, handlers, store, sortingKeyType);
};
exports.MakeSourceFactory = MakeSourceFactory;
//# sourceMappingURL=source.js.map