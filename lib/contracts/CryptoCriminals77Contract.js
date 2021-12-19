"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const CryptoCriminals77_json_1 = __importDefault(require("./abi/cc/artifacts/contracts/CryptoCriminals77.sol/CryptoCriminals77.json"));
const KIP37Contract_1 = __importDefault(require("./standard/KIP37Contract"));
class CryptoCriminals77Contract extends KIP37Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CryptoCriminals77, CryptoCriminals77_json_1.default.abi);
    }
}
exports.default = new CryptoCriminals77Contract();
//# sourceMappingURL=CryptoCriminals77Contract.js.map