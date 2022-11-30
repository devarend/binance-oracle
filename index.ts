import express from 'express'
import dotenv from 'dotenv'
import {Spot} from '@binance/connector'

dotenv.config();

const app = express();
const port = process.env.PORT;

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision'})

app.get('/', async (req, res) => {
    try {
        const response = await client.account()
        res.json(response.data)
    } catch (error) {
        res.json({message: error.message})
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});