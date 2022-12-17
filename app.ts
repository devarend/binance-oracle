import express from 'express'
import dotenv from 'dotenv'
import {Spot} from '@binance/connector'
import * as walletController from "./src/controllers/walletController"
import cors from 'cors'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())

const apiKey = process.env.BINANCE_API_KEY
const apiSecret = process.env.BINANCE_API_SECRET
export const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision'})

app.get('/bnb', walletController.getBnbBalance)
app.get('/trades', walletController.getTrades)
app.post('/createTrades', walletController.createTrades)


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})