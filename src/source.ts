import { Event, SortingKeyType } from "./proto/api/v1/event"
import { Store } from "./store"
import { UnhandledEventError } from "./errors"

export interface PartitionState {
    partitionKey: string
    sortingKey: bigint
}

export type EventHandlers<State extends PartitionState> = Map<string, (state: State, buffer: Buffer) => void>

export class Source<State extends PartitionState> {

    constructor(
        public state: State,
        private handlers: EventHandlers<State>,
        private store: Store,
        private sortingKeyType?: SortingKeyType
    ) { }

    public get partitionKey(): string {
        return this.state.partitionKey
    }

    public get sortingKey(): bigint {
        return this.state.sortingKey
    }

    public apply(event: Event) {

        const sortingKey = BigInt(event.sortingKey)

        if (this.state.sortingKey > sortingKey) {
            return
        }

        const { typeUrl, value } = event.eventPayload!

        const handler = this.handlers.get(typeUrl)

        if (handler) {

            handler(this.state, value)

            this.state.sortingKey = sortingKey

            return

        }

        throw new UnhandledEventError({
            partitionKey: this.partitionKey,
            sortingKey: event.sortingKey,
            typeUrl,
        })

    }

    public async restore(to?: bigint, batchSize?: bigint) {
        await this.store.restore(this, to, batchSize)
    }

    public async append(...events: Event[]) {

        for (const event of events) {

            event.partitionKey = this.partitionKey

            if (this.sortingKeyType)
                event.sortingKeyType = this.sortingKeyType

            this.apply(event)

        }

        await this.store.append(...events)

    }

    public emit<EventType extends { $type: string }>(sortingKey: bigint, evt: EventType, encoder: { encode(evt: EventType, w?: protobuf.Writer ): protobuf.Writer }, sortingKeyType?: SortingKeyType): Event {
        return Event.create({
            partitionKey: this.partitionKey,
            sortingKey: sortingKey.toString(),
            sortingKeyType: sortingKeyType ?? this.sortingKeyType ?? SortingKeyType.SORTING_KEY_ARBITRARY_NUMBER,
            eventPayload: { typeUrl: evt.$type, value: Buffer.from(encoder.encode(evt).finish()) }
        })
    }

}

export const MakeSourceFactory = <State extends PartitionState>(store: Store, handlers: EventHandlers<State>, sortingKeyType?: SortingKeyType) => (state: State): Source<State> => {
    return new Source(state, handlers, store, sortingKeyType)
}

export type SourceFactory<State extends PartitionState> = ReturnType<typeof MakeSourceFactory<State>>