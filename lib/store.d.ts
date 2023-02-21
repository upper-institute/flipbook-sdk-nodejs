import { Configuration } from "./config";
import { Event } from "./proto/api/v1/event";
export interface Aggregator {
    get partitionKey(): string;
    get sortingKey(): bigint;
    apply(event: Event): void;
}
export declare class Store {
    private config;
    private readonly client;
    constructor(config: Configuration);
    append(...events: Event[]): Promise<void>;
    restore(agg: Aggregator, to?: bigint, batchSize?: bigint): Promise<void>;
}
//# sourceMappingURL=store.d.ts.map