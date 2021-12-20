"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TESTNET = false;
exports.default = {
    apiHost: TESTNET ? "localhost:9013" : "api.casesbykate.xyz",
    contracts: TESTNET ? {
        Mix: "0xAe0a2e1DA2469FFdf8308160eE64Fe3656d9D9D0",
        Klayswap: "",
        MixPriceEstimator: "",
        CasesByKate: "0x491cf9D55BC21A5e4821C00Cb12dC7D35C99bd86",
        CryptoCriminals77: "0xd5Dbf64080a33262fd55D1F32368456B588012a1",
        CryptoCriminals77Minter: "0x6CCF7ED78Bc106615cf3b25F7149601B1eE3B57A",
    } : {
        Mix: "0xDd483a970a7A7FeF2B223C3510fAc852799a88BF",
        Klayswap: "0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654",
        MixPriceEstimator: "0x637ce9D4B6cb790e81110f1a5D9869E32b8Fbde2",
        CasesByKate: "0x0af3f3fe9e822b7a740ca45ce170340b2da6f4cc",
        CryptoCriminals77: "0x281eA55e49e5C9B378aC60A4E2625E42a225Df82",
        CryptoCriminals77Minter: "0x16653e2F7F2990Eb1910A6E664331116054453aB",
    }
};
//# sourceMappingURL=Config.js.map