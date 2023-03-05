// import Contract721Manager from './contract721/NFTManager_metadata.json'
// import Contract721Contract from './contract721/NFTContract_metadata.json'
import Contract1155Manager from './contract1155/NFTManager_metadata.json'
import Contract1155Contract from './contract1155/NFTContract_metadata.json'


// export const manager721ABI = Contract721Manager.output.abi
// export const contract721ABI = Contract721Contract.output.abi
export const manager1155ABI = Contract1155Manager.output.abi
export const contract1155ABI = Contract1155Contract.output.abi

// export const manager721Address = "0x3e51E0C9F92209cb364416d59443780531106f3F"
export const manager1155Address = "0xc730a979e940EA3Dc967D23813ce2F62F46D7524"




export const chainName = {
    1: "Ethereum",
    5: "Goerli",
    137: "Polygon",
    80001: "Polygon Mumbai"
}

export const isChainTestnet = {
    1: false,
    5: true,
    137: false,
    80001: true
}

export const chainSymbol = {
    1: "eth",
    5: "eth goerli",
    137: "matic",
    80001: "matic mumbai"
}

// export const chainIdNameMap = {
//     1: "mainnet",
//     3: "ropsten",
//     4: "rinkeby",
//     5: "goerli",
//     42: "kovan",
//     69: "optimismKovan",
//     80_001: "polygonMumbai",
//     137: "polygon",
//     420: "optimismGoerli",
//     10: "optimism",
//     1_337: "localhost",
//     31_337: "hardhat",
//     43_113: "avalancheFuji",
//     43_114: "avalanche",
//     421_611: "arbitrumRinkeby",
//     42_161: "arbitrum",
//     56: "binance",
//     97: "binanceTestnet",
//     166_660_000_0: "harmony",
//     166_670_000_0: "harmonyTestnet",
//     100: "xDai",
//     77: "sokol",
//     99: "core",
//     61: "classic",
//     62: "callisto",
//     30: "rskMainnet",
//     31: "rskTestnet",
//     60: "goChain",
//     61: "goChainTestnet",
//     820: "cortex",
//     821: "cortexTestnet",
//     128: "heco",
//     256: "hecoTestnet",
//     1285: "fuse",
//     1287: "fuseTestnet",
//     43114: "avalanche",
//     43113: "avalancheFuji",
//     42161: "arbitrum",
//     421611: "arbitrumRinkeby",
//     250: "fantom",
//     4002: "fantomTestnet",
//     137: "polygon",
// }