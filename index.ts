import express from 'express'
import dotenv from 'dotenv'
import {Spot} from '@binance/connector'

dotenv.config();

const app = express();
const port = process.env.PORT;

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision'})

app.get('/bnb', async (req, res) => {
    try {
        const response = await client.account()
        const bnbAsset = response.data.balances.find(({asset}) => asset === 'BNB')
        if (!bnbAsset) return res.json({message: 'Asset not found'})
        const availableBnb = parseFloat(bnbAsset.free)
        res.json({bnb: availableBnb})
    } catch (error) {
        res.json({message: error.message})
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});