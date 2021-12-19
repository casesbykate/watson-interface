"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const CasesByKateNFT_json_1 = __importDefault(require("./abi/cbk/artifacts/contracts/CasesByKateNFT.sol/CasesByKateNFT.json"));
const Contract_1 = __importDefault(require("./Contract"));
class CasesByKateContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CasesByKate, CasesByKateNFT_json_1.default.abi);
    }
}
exports.default = new CasesByKateContract();
//# sourceMappingURL=CasesByKateContract.js.map