
<h1 align="center">
  Binance oracle
  <br>
</h1>

<h4 align="center">Mina oracle which connects to the Binance Test API, the zkapp can be found <a href="https://github.com/devarend/binance-zkapp" target="_blank">here</a></h4>

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


## LICENSE

```
MIT License

Copyright (c) 2022 Arend

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
