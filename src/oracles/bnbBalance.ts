import {isReady, PrivateKey, Field, Signature} from 'snarkyjs'

export const signedBnbBalance = async (userId: number, balance: number) => {
    await isReady
    const privateKey = PrivateKey.fromBase58(
        process.env.PRIVATE_KEY
    )
    const publicKey = privateKey.toPublicKey()

    const id = Field(userId)
    const availableBnbBalance = Field(balance)
    const signature = Signature.create(privateKey, [id, availableBnbBalance])

    return {
        data: {id, availableBnbBalance},
        signature: signature,
        publicKey: publicKey,
    }
}