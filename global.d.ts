/*
 * Enums are documented here:
 * https://binance-docs.github.io/apidocs/spot/en/#public-api-definitions
 */

declare module "@binance/connector" {
    export declare type BinanceAsset = string;

    export declare type BinanceClientOrderId = string;

    export declare type BinanceKline = [
        openTime: number,
        open: BinanceQuantity,
        high: BinanceQuantity,
        low: BinanceQuantity,
        close: BinanceQuantity,
        volume: BinanceQuantity,
        closeTime: number,
        quoteAssetVolume: BinanceQuantity,
        numberOfTrades: number,
        takerBuyBaseAssetVolume: BinanceQuantity,
        takerBuyQuoteAssetVolume: BinanceQuantity
    ];

    export declare type BinanceKlineInterval =
        | "1m"
        | "3m"
        | "5m"
        | "15m"
        | "30m"
        | "1h"
        | "2h"
        | "4h"
        | "6h"
        | "8h"
        | "12h"
        | "1d"
        | "3d"
        | "1w"
        | "1M";

    export declare type BinanceOcoOrderContingencyType = "OCO";

    export declare type BinanceOcoOrderListOrderStatus =
        | "EXECUTING" // used when an order list has been placed or there is an update to a list's status.
        | "ALL_DONE" // used when an order list has finished executing and is no longer active.
        | "REJECT"; // used when ListStatus is responding to a failed action. (either order list placement or cancellation)

    export declare type BinanceOcoOrderListStatusType =
        | "RESPONSE" // used when ListStatus is responding to a failed action. (either order list placement or cancellation)
        | "EXEC_STARTED" // used when an order list has been placed or there is an update to a list's status.
        | "ALL_DONE"; // used when an order list has finished executing and is no longer active.

    export declare type BinanceOrderRespType = "ACK" | "RESULT" | "FULL";

    export declare type BinanceOrderStatus =
        | "NEW" // The order has been accepted by the engine.
        | "PARTIALLY_FILLED" // A part of the order has been filled.
        | "FILLED" // The order has been completed.
        | "CANCELED" // The order has been canceled by the user.
        | "PENDING_CANCEL" // Currently unused
        | "REJECTED" // The order was not accepted by the engine and not processed.
        | "EXPIRED"; // The order was canceled according to the order type's rules (e.g. LIMIT FOK orders with no fill, LIMIT IOC or MARKET orders that partially fill) or by the exchange, (e.g. orders canceled during liquidation, orders canceled during maintenance)

    export declare type BinanceOrderType =
        | "LIMIT"
        | "LIMIT_MAKER"
        | "MARKET"
        | "STOP_LOSS"
        | "STOP_LOSS_LIMIT"
        | "TAKE_PROFIT"
        | "TAKE_PROFIT_LIMIT";

    export declare type BinanceOrderId = number;

    export declare type BinanceOrderSide = "BUY" | "SELL";

    export declare type BinanceProductListOptionSortBy =
        | "START_TIME"
        | "LOT_SIZE"
        | "INTEREST_RATE"
        | "DURATION";

    export declare type BinanceProductListOptionStatus =
        | "ALL"
        | "SUBSCRIBABLE"
        | "UNSUBSCRIBABLE";

    export declare type BinanceProductStatus =
        | "PURCHASING"
        | "PRE_REDEMPTION"
        | "RUNNING"
        | "REDEEMED";

    export declare type BinanceProductType = "ACTIVITY" | "CUSTOMIZED_FIXED";

    export declare type BinanceQuantity = "string";

    export declare type BinanceRateLimitInteval = "DAY" | "MINUTE" | "SECOND";

    export declare type BinanceRateLimitType =
        | "ORDERS"
        | "RAW_REQUESTS"
        | "REQUEST_WEIGHT";

    export declare type BinanceRecvWindow = number; // The value cannot be greater than 60000

    export declare type BinanceSymbol = string;

    export declare type BinanceSymbolStatus = "TRADING" | "BREAK";

    export declare type BinanceTime = number;

    export declare type BinanceTimeInForce =
        | "GTC" // Good Til Canceled. An order will be on the book unless the order is canceled.
        | "IOC" // Immediate Or Cancel. An order will try to fill the order as much as it can before the order expires.
        | "FOK"; // Fill or Kill. An order will expire if the full order cannot be filled upon execution.

    export declare type BinanceTradeId = number;

    export declare type BinanceApiResponse<Data> = {
        status: number;
        statusText: string;
        data: Data;
    };

    export declare type BinanceBalance = {
        asset: BinanceAsset;
        free: BinanceQuantity;
        locked: BinanceQuantity;
    };

    export declare type BinanceAccountInformation = {
        makerCommission: number;
        takerCommission: number;
        buyerCommission: number;
        sellerCommission: number;
        canTrade: boolean;
        canWithdraw: boolean;
        canDeposit: boolean;
        updateTime: BinanceTime;
        accountType: string;
        balances: BinanceBalance[];
        permissions: string[];
    };

    export declare type BinanceAccountTrade = {
        symbol: BinanceSymbol;
        id: BinanceTradeId;
        orderId: BinanceOrderId;
        orderListId: BinanceOrderId; // Unless OCO, the value will always be -1
        price: BinanceQuantity;
        qty: BinanceQuantity;
        quoteQty: BinanceQuantity;
        commission: BinanceQuantity;
        commissionAsset: BinanceAsset;
        time: BinanceTime;
        isBuyer: boolean;
        isMaker: boolean;
        isBestMatch: boolean;
    };

    export declare type BinanceFill = Pick<
        BinanceAccountTrade,
        "price" | "qty" | "commission" | "commissionAsset"
        >;

    export declare type BinanceApiKeyPermission = {
        ipRestrict: boolean;
        createTime: BinanceTime;
        enableWithdrawals: boolean; // This option allows you to withdraw via API. You must apply the IP Access Restriction filter in order to enable withdrawals
        enableInternalTransfer: boolean; // This option authorizes this key to transfer funds between your master account and your sub account instantly
        permitsUniversalTransfer: boolean; // Authorizes this key to be used for a dedicated universal transfer API to transfer multiple supported currencies. Each business's own transfer API rights are not affected by this authorization
        enableVanillaOptions: boolean; //  Authorizes this key to Vanilla options trading
        enableReading: boolean;
        enableFutures: boolean; //  API Key created before your futures account opened does not support futures API service
        enableMargin: boolean; //  This option can be adjusted after the Cross Margin account transfer is completed
        enableSpotAndMarginTrading: boolean; // Spot and margin trading
        tradingAuthorityExpirationTime: BinanceTime; // Expiration time for spot and margin trading permission
    };

    export declare type BinanceAvgPrice = {
        mins: number;
        price: BinanceQuantity;
    };

    export declare type BinanceRateLimitInfo = {
        rateLimitType: BinanceRateLimitType;
        interval: BinanceRateLimitInterval;
        intervalNum: number;
        limit: number;
    };

    export declare type BinanceTicker24hr = {
        symbol: "BNBBTC";
        priceChange: BinanceQuantity;
        priceChangePercent: BinanceQuantity;
        weightedAvgPrice: BinanceQuantity;
        prevClosePrice: BinanceQuantity;
        lastPrice: BinanceQuantity;
        lastQty: BinanceQuantity;
        bidPrice: BinanceQuantity;
        bidQty: BinanceQuantity;
        askPrice: BinanceQuantity;
        askQty: BinanceQuantity;
        openPrice: BinanceQuantity;
        highPrice: BinanceQuantity;
        lowPrice: BinanceQuantity;
        volume: BinanceQuantity;
        quoteVolume: BinanceQuantity;
        openTime: BinanceTime;
        closeTime: BinanceTime;
        firstId: BinanceTradeId; // First tradeId
        lastId: BinanceTradeId; // Last tradeId
        count: number; // Trade count
    };

    export declare type BinanceTickerPrice = {
        symbol: BinanceSymbol;
        price: BinanceQuantity;
    };

    export declare type BinanceSymbolInfo = {
        symbol: BinanceSymbol;
        status: BinanceSymbolStatus;
        baseAsset: BinanceAsset;
        baseAssetPrecision: number;
        quoteAsset: BinanceAsset;
        quotePrecision: number;
        quoteAssetPrecision: number;
        baseCommissionPrecision: number;
        quoteCommissionPrecision: number;
        // TODO orderTypes: [Array],
        icebergAllowed: boolean;
        ocoAllowed: boolean;
        quoteOrderQtyMarketAllowed: boolean;
        isSpotTradingAllowed: boolean;
        isMarginTradingAllowed: boolean;
        // TODO filters
        // TODO permissions
    };

    export declare type BinanceExchangeInfo = {
        timezone: string;
        serverTime: BinanceTime;
        symbols: BinanceSymbolInfo[];
        rateLimits: BinanceRateLimitInfo[];
    };

    export declare type BinanceOrder = {
        symbol: BinanceSymbol;
        orderId: BinanceOrderId;
        orderListId: BinanceOrderId; // Unless OCO, the value will always be -1
        clientOrderId: BinanceClientOrderId;
        price: BinanceQuantity;
        origQty: BinanceQuantity;
        executedQty: BinanceQuantity;
        cummulativeQuoteQty: BinanceQuantity;
        transactTime: BinanceTime;
        status: BinanceOrderStatus;
        timeInForce: BinanceTimeInForce;
        type: BinanceOrderType;
        side: BinanceOrderSide;
        stopPrice: BinanceQuantity;
        icebergQty: BinanceQuantity;
        time: BinanceTime;
        updateTime: BinanceTime;
        isWorking: boolean;
        origQuoteOrderQty: BinanceQuantity;
    };

    export declare type BinanceOrderRespACK = Pick<
        BinanceOrder,
        "symbol" | "orderId" | "orderListId" | "clientOrderId" | "transactTime"
        >;

    export declare type BinanceOrderRespRESULT = Pick<
        BinanceOrder,
        | "symbol"
        | "orderId"
        | "orderListId"
        | "clientOrderId"
        | "transactTime"
        | "price"
        | "origQty"
        | "executedQty"
        | "cummulativeQuoteQty"
        | "status"
        | "timeInForce"
        | "type"
        | "side"
        >;

    export declare type BinanceOrderRespFULL = Pick<
        BinanceOrder,
        | "symbol"
        | "orderId"
        | "orderListId"
        | "clientOrderId"
        | "transactTime"
        | "price"
        | "origQty"
        | "executedQty"
        | "cummulativeQuoteQty"
        | "status"
        | "timeInForce"
        | "type"
        | "side"
        > & {
        fills: BinanceFill[];
    };

    export declare type BinanceCanceledOrder = Pick<
        BinanceOrder,
        | "symbol"
        | "orderId"
        | "orderListId"
        | "clientOrderId"
        | "price"
        | "origQty"
        | "executedQty"
        | "cummulativeQuoteQty"
        | "status"
        | "timeInForce"
        | "type"
        | "side"
        > & {
        origClientOrderId: BinanceClientOrderId;
    };

    export declare type BinanceCanceledOrderReport = BinanceCanceledOrder &
        Pick<BinanceCanceledOrder, "icebergQty"> &
        Partial<Pick<BinanceCanceledOrder, "stopPrice">>;

    export declare type BinanceCanceledOcoOrder = Pick<
        BinanceOrder,
        "symbol" | "orderListId"
        > & {
        transactionTime: BinanceTime;
        contingencyType: BinanceOcoOrderContingencyType;
        listStatusType: BinanceOcoOrderListStatusType;
        listOrderStatus: BinanceOcoOrderListOrderStatus;
        orders: Pick<BinanceOrder, "symbol" | "orderId" | "clientOrderId">[];
        orderReports: BinanceCanceledOrderReport[];
    };

    export declare type BinanceNewOrder =
        | BinanceOrderRespACK
        | BinanceOrderRespFULL
        | BinanceOrderRespRESULT;

    export declare type BinanceAllOrderOptions = Partial<{
        orderId: BinanceOrderId;
        startTime: BinanceTime;
        endTime: BinanceTime;
        limit: number;
        recvWindow: BinanceRecvWindow;
    }>;

    export declare type BinanceGetOrderOptions = Partial<{
        // Either orderId or origClientOrderId must be sent.
        orderId: BinanceOrderId;
        origClientOrderId: BinanceClientOrderId;
        recvWindow: BinanceRecvWindow;
    }>;

    export declare type BinanceKlinesOptions = Partial<{
        startTime: BinanceTime;
        endTime: BinanceTime;
        limit: number;
    }>;

    export declare type BinanceMyTradesOptions = Partial<{
        orderId: BinanceOrderId;
        startTime: BinanceTime;
        endTime: BinanceTime;
        fromId: BinanceOrderId; // TradeId to fetch from. Default gets most recent trades.
        limit: number; // Default 500; max 1000.
        recvWindow: BinanceRecvWindow;
    }>;

    export declare type BinanceNewOrderOptions = Partial<{
        timeInForce: BinanceTimeInForce;
        quantity: number;
        quoteOrderQty: number;
        price: number;
        newClientOrderId: BinanceClientOrderId;
        stopPrice: number;
        icebergQty: number;
        newOrderRespType: BinanceOrderRespType;
        recvWindow: BinanceRecvWindow;
    }>;

    export declare type BinanceOpenOrdersOptions = Partial<{
        // Careful when accessing this with no symbol.
        // Weight(IP): 3 for a single symbol; 40 when the symbol parameter is omitted;
        symbol: BinanceSymbol;
        recvWindow: BinanceRecvWindow;
    }>;

    export declare type BinanceProduct = {
        asset: BinanceAsset;
        displayPriority: number;
        duration: number;
        interestPerLot: BinanceQuantity;
        interestRate: BinanceQuantity;
        lotSize: BinanceQuantity;
        lotsLowLimit: number;
        lotsPurchased: number;
        lotsUpLimit: number;
        maxLotsPerUser: number;
        needKyc: boolean;
        projectId: string;
        projectName: string;
        status: BinanceProductStatus;
        type: BinanceProductType;
        withAreaLimitation: boolean;
    };

    export declare type BinanceProductListOptions = Partial<{
        asset: BinanceAsset;
        current: number; // Currently querying page. Start from 1
        isSortAsc: boolean;
        recvWindow: BinanceRecvWindow;
        size: number; // Default:10, Max:100
        sortBy: BinanceProductListOptionSortBy;
        status: BinanceProductListOptionStatus;
    }>;

    export class Spot {
        constructor(apiKey?: string, apiSecret?: string, options?: { baseURL: string });

        account(): Promise<BinanceApiResponse<BinanceAccountInformation>>;

        allOrders(
            symbol: BinanceSymbol,
            options?: BinanceAllOrdersOptions
        ): Promise<BinanceApiResponse<BinanceOrder[]>>;

        apiPermissions(): Promise<BinanceApiResponse<BinanceApiKeyPermission>>;

        avgPrice(
            symbol: BinanceSymbol
        ): Promise<BinanceApiResponse<BinanceAvgPrice>>;

        cancelOpenOrders(
            symbol: BinanceSymbol
        ): Promise<
            BinanceApiResponse<(BinanceCanceledOrder | BinanceCanceledOcoOrder)[]>
            >;

        exchangeInfo(): Promise<BinanceApiResponse<BinanceExchangeInfo>>;

        getOrder(
            symbol: BinanceSymbol,
            options?: BinanceGetOrderOptions
        ): Promise<BinanceApiResponse<BinanceOrder>>;

        klines(
            symbol: BinanceSymbol,
            interval: BinanceKlineInterval,
            options?: BinanceKlinesOptions
        ): Promise<BinanceApiResponse<BinanceKline[]>>;

        myTrades(
            symbol: BinanceSymbol,
            options?: BinanceMyTradesOptions
        ): Promise<BinanceApiResponse<BinanceAccountTrade[]>>;

        newOrder(
            symbol: BinanceSymbol,
            side: BinanceOrderSide,
            type: BinanceOrderType,
            options?: BinanceNewOrderOptions
        ): Promise<BinanceApiResponse<BinanceNewOrder>>;

        newOrderTest(
            symbol: BinanceSymbol,
            type: BinanceOrderType,
            side: BinanceOrderSide,
            options?: BinanceNewOrderOptions
        ): Promise<BinanceApiResponse<{}>>;

        openOrders(
            options?: BinanceOpenOrdersOptions
        ): Promise<BinanceApiResponse<BinanceOrder[]>>;

        savingsProductList(
            type: BinanceProductType,
            options?: BinanceProductListOptions
        ): Promise<BinanceApiResponse<BinanceProduct[]>>;

        ticker24hr(
            symbol: BinanceSymbol
        ): Promise<BinanceApiResponse<BinanceTicker24hr>>;

        tickerPrice(
            symbol: BinanceSymbol
        ): Promise<BinanceApiResponse<BinanceTickerPrice>>;
    }
}