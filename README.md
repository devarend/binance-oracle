
<h1 align="center">
  Binance oracle
  <br>
</h1>

<h4 align="center">Mina oracle which connects to the Binance Test API</h4>

## Features

* Retrieve your BNB balance and return a signed response
* Retrieve the amount of trades for the pair BNB/USDT and return a signed response
* Generate a public/private key

## How To Use

```bash
# Install
$ yarn install

# Generate a public/private key for your oracle
$ yarn keygen

# Development
$ yarn dev

# Production
$ yarn build
$ yarn start
```

## Binance Test API

You can [login](https://testnet.binance.vision/) on the Binance Test Network to get an API key and secret.

## Environment

Create .env file and fill in the following values:

```bash
PORT=3001
BINANCE_API_KEY=YOUR_BINANCE_API_KEY
BINANCE_API_SECRET=YOUR_BINANCE_API_SECRET
ORACLE_PRIVATE_KEY=YOUR_GENERATED_PRIVATE_KEY
```
