import { Request, Response } from "express";
import {client} from "../../app";

export const getBnbBalance = async (req: Request, res: Response) => {
    try {
        const response = await client.account()
        const bnbAsset = response.data.balances.find(({asset}) => asset === 'BNB')
        if (!bnbAsset) return res.json({message: 'Asset not found'})
        const availableBnb = parseFloat(bnbAsset.free)
        res.json({bnb: availableBnb})
    } catch (error) {
        res.json({message: error.message})
    }
};