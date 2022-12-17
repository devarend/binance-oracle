import {Request, Response} from "express"
import {client} from "../../app"
import {signedBnbBalance} from "../oracles/bnbBalance"
import {signedBnbTrades} from "../oracles/bnbTrades";

export const getBnbBalance = async (req: Request, res: Response) => {
    try {
        const response = await client.account()
        const bnbAsset = response.data.balances.find(({asset}) => asset === 'BNB')
        if (!bnbAsset) return res.json({message: 'Asset not found'})
        const balance = parseFloat(bnbAsset.free)
        const data = await signedBnbBalance(1, balance)
        res.json({...data})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getTrades = async (req: Request, res: Response) => {
    try {
        const response = await client.myTrades('BNBUSDT')
        const data = await signedBnbTrades(1, response.data)
        res.json({...data})
    } catch (error) {
        res.json({message: error.message})
    }

}

export const createTrades = async (req: Request, res: Response) => {
    try {
        for (let i = 1; i <= 10; i++) {
            try {
                await client.newOrder('BNBUSDT', 'BUY', 'MARKET', {
                    quantity: 1,
                })
            } catch {
                throw new Error('Something went wrong while creating your BNB orders')
            }
        }
        res.status(200).json({message: 'Created BNB orders'})
    } catch (error) {
        res.status(503).json({message: error.message})
    }
}