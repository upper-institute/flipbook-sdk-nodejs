/// <reference types="node" />
import { Event, SortingKeyType } from "./proto/api/v1/event";
import { Store } from "./store";
export interface PartitionState {
    partitionKey: string;
    sortingKey: bigint;
}
export type EventHandlers<State extends PartitionState> = Map<string, (state: State, buffer: Buffer) => void>;
export declare class Source<State extends PartitionState> {
    state: State;
    private handlers;
    private store;
    private sortingKeyType?;
    constructor(state: State, handlers: EventHandlers<State>, store: Store, sortingKeyType?: SortingKeyType | undefined);
    get partitionKey(): string;
    get sortingKey(): bigint;
    apply(event: Event): void;
    restore(to?: bigint, batchSize?: bigint): Promise<void>;
    append(...events: Event[]): Promise<void>;
    emit<EventType extends {
        $type: string;
    }>(sortingKey: bigint, evt: EventType, encoder: {
        encode(evt: EventType, w?: protobuf.Writer): protobuf.Writer;
    }, sortingKeyType?: SortingKeyType): Event;
}
export declare const MakeSourceFactory: <State extends PartitionState>(store: Store, handlers: EventHandlers<State>, sortingKeyType?: SortingKeyType) => (state: State) => Source<State>;
export type SourceFactory<State extends PartitionState> = ReturnType<typeof MakeSourceFactory<State>>;
//# sourceMappingURL=source.d.ts.map