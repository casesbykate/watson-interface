"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Mix_json_1 = __importDefault(require("./abi/mix/artifacts/contracts/Mix.sol/Mix.json"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class MixContract extends KIP7Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Mix, Mix_json_1.default.abi);
    }
}
exports.default = new MixContract();
//# sourceMappingURL=MixContract.js.map