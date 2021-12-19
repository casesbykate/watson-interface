const TESTNET = false;

export default {
    contracts: TESTNET ? {
        CasesByKate: "0x491cf9D55BC21A5e4821C00Cb12dC7D35C99bd86",
        CryptoCriminals77: "0xd5Dbf64080a33262fd55D1F32368456B588012a1",
        CryptoCriminals77Minter: "0x6CCF7ED78Bc106615cf3b25F7149601B1eE3B57A",
    } : {
        CasesByKate: "0x0af3f3fe9e822b7a740ca45ce170340b2da6f4cc",
        CryptoCriminals77: "",
        CryptoCriminals77Minter: "",
    }
}
