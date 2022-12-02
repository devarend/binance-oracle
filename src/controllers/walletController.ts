import {Request, Response} from "express"
import {client} from "../../app"
import {signedBnbBalance} from "../oracles/bnbBalance"

export const getBnbBalance = async (req: Request, res: Response) => {
    try {
        const response = await client.account()
        const bnbAsset = response.data.balances.find(({asset}) => asset === 'BNB')
        if (!bnbAsset) return res.json({message: 'Asset not found'})
        const balance = parseFloat(bnbAsset.free)
        const data = await signedBnbBalance(1, balance)
        res.json({data})
    } catch (error) {
        res.json({message: error.message})
    }
}