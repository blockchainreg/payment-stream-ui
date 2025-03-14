export const config = {
    RPC_URL: 'https://hatlas.rpc.hazlor.com',
    REST_URL: 'https://api.hazlor.com',
    FAUCET_URL: 'https://api.testnet-faucet.omniflix.network',
    CHAIN_ID: 'hazlor_7878-1',
    CHAIN_NAME: 'Hazlor Pay Testnet',
    COIN_DENOM: 'TSCAS',
    COIN_MINIMAL_DENOM: 'atscas',
    COIN_DECIMALS: 6,
    PREFIX: 'tscas',
};

export const chainId = config.CHAIN_ID;
export const chainName = config.CHAIN_NAME;
export const coinDenom = config.COIN_DENOM;
export const coinMinimalDenom = config.COIN_MINIMAL_DENOM;
export const coinDecimals = config.COIN_DECIMALS;
export const prefix = config.PREFIX;

export const chainConfig = {
    chainId: chainId,
    chainName,
    rpc: config.RPC_URL,
    rest: config.REST_URL,
    stakeCurrency: {
        coinDenom,
        coinMinimalDenom,
        coinDecimals,
    },
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: `${prefix}`,
        bech32PrefixAccPub: `${prefix}pub`,
        bech32PrefixValAddr: `${prefix}valoper`,
        bech32PrefixValPub: `${prefix}valoperpub`,
        bech32PrefixConsAddr: `${prefix}valcons`,
        bech32PrefixConsPub: `${prefix}valconspub`,
    },
    currencies: [
        {
            coinDenom,
            coinMinimalDenom,
            coinDecimals,
        },
    ],
    feeCurrencies: [
        {
            coinDenom,
            coinMinimalDenom,
            coinDecimals,
        },
    ],
    coinType: 118,
    gasPriceStep: {
        low: 0.1,
        average: 0.5,
        high: 1,
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
};
