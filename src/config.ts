export const EnvironmentConfiguration  = {

    get flipbookServerAddress(): string {
        return process.env.FLIPBOOK_SERVER_ADDRESS || '127.0.0.1:6333'
    },
    
    get iterateBatchSize(): bigint {
        return BigInt(250)
    }

}

export interface Configuration {
    get flipbookServerAddress(): string
    get iterateBatchSize(): bigint
}