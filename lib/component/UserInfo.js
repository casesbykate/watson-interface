"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class UserInfo extends skynode_1.DomNode {
    constructor() {
        super('a.user-info');
        this.connectHandler = () => {
            this.loadAddress();
        };
        this.append(this.connectWalletButton = (0, skynode_1.el)("a.connect-wallet", "~ 카이카스 로그인이 필요합니다.", {
            click: () => Wallet_1.default.connect(),
        }), this.addressDisplay = (0, skynode_1.el)(".wallet-address"));
        this.addressDisplay.style({ display: "none" });
        Wallet_1.default.on("connect", this.connectHandler);
        this.loadAddress();
    }
    async loadAddress() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            if (this.connectWalletButton.deleted !== true) {
                this.connectWalletButton.delete();
            }
            this.addressDisplay.style({ display: "block" });
            this.addressDisplay.empty().appendText(`${address}으로 로그인하셨습니다.`);
        }
    }
    delete() {
        Wallet_1.default.off("connect", this.connectHandler);
        super.delete();
    }
}
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map