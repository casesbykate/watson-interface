"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const CryptoCriminals77Minter_json_1 = __importDefault(require("./abi/cc/artifacts/contracts/CryptoCriminals77Minter.sol/CryptoCriminals77Minter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class CryptoCriminals77MinterContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CryptoCriminals77Minter, CryptoCriminals77Minter_json_1.default.abi);
    }
    async usedCases(id) {
        return await this.runMethod("usedCases", id);
    }
    async tryMint(key, cases) {
        await this.runWalletMethod("tryMint", key, cases);
    }
    async mint(to, id, cases, key, signature) {
        await this.runWalletMethod("mint", to, id, cases, key, signature);
    }
}
exports.default = new CryptoCriminals77MinterContract();
//# sourceMappingURL=CryptoCriminals77MinterContract.js.map