import { ServiceError, credentials } from "@grpc/grpc-js"
import { Configuration } from "./config"
import { Event, Event_AppendRequest, Event_IterateRequest } from "./proto/api/v1/event"
import { EventStoreClient } from "./proto/api/v1/eventstore"
import { Empty } from "./proto/google/protobuf/empty"
import { QueryStop, Query } from "./proto/api/v1/query"

const endIterationSortingKey = "-1"

export interface Aggregator {
    get partitionKey(): string
    get sortingKey(): bigint
    apply(event: Event): void
}

export class Store {

    private readonly client: EventStoreClient

    constructor(private config: Configuration) {
        this.client = new EventStoreClient(config.flipbookServerAddress, credentials.createInsecure())
    }

    public async append(...events: Event[]): Promise<void> {

        return new Promise((resolve, reject) => {

            const req: Event_AppendRequest = Event_AppendRequest.create({ events })

            this.client.append(req, (e: ServiceError | null, res: Empty) => {

                if (e)
                    return reject(e)

                resolve()

            })

        })

    }

    public async restore(agg: Aggregator, to?: bigint, batchSize?: bigint) {

        const query = Query.create({
            startSortingKey: agg.sortingKey.toString(),
            stopSortingKey: "0",
            stop: QueryStop.QUERY_STOP_LATEST
        })

        if (to !== undefined) {
            query.stopSortingKey = to.toString()
            query.stop = QueryStop.QUERY_STOP_EXACT
        }

        const call = this.client.iterate()
        const partitionKey = agg.partitionKey

        const req = Event_IterateRequest.create({
            partitionKey,
            query,
            batchSize: (batchSize ?? this.config.iterateBatchSize).toString(),
        })

        var eventCount = 0

        call.on('data', (ev: Event) => {

            if (ev.sortingKey == endIterationSortingKey) {

                if (eventCount > 0) {

                    eventCount = 0

                    query.startSortingKey = (agg.sortingKey+1n).toString()

                    call.write(req)
                    return

                }

                call.end()
                return

            }

            eventCount++

            agg.apply(ev)

        })

        call.write(req)

        await new Promise<void>((resolve, reject) => {

            call.on('end', () => {
                resolve()
            })

            call.on('error', (e) => {
                reject(e)
            })

        })

    }

}