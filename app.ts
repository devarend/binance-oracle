import express from 'express'
import dotenv from 'dotenv'
import {Spot} from '@binance/connector'
import * as walletController from "./src/controllers/walletController"

dotenv.config()

const app = express()
const port = process.env.PORT

const apiKey = ''
const apiSecret = ''
export const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision'})

app.get('/bnb', walletController.getBnbBalance)
app.get('/trades', walletController.getTrades)
app.get('/createTrades', walletController.createTrades)


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})