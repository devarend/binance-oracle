import {isReady, PrivateKey, Field, Signature} from 'snarkyjs'
import {BinanceAccountTrade} from "@binance/connector";

export const signedBnbTrades = async (userId: number, trades: BinanceAccountTrade[]) => {
    await isReady
    const privateKey = PrivateKey.fromBase58(
        process.env.PRIVATE_KEY
    )
    const publicKey = privateKey.toPublicKey()

    const id = Field(userId)
    const amountOfTrades = Field(trades.length)
    const signature = Signature.create(privateKey, [id, amountOfTrades])

    return {
        data: {id, amountOfTrades},
        signature,
        publicKey,
    }
}