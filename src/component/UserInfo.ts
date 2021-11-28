import { DomNode, el } from "@hanul/skynode";
import CommonUtil from "../CommonUtil";
import Wallet from "../klaytn/Wallet";

export default class UserInfo extends DomNode {

    private connectWalletButton: DomNode;
    private addressDisplay: DomNode;

    constructor() {
        super('a.user-info');
        this.append(
            this.connectWalletButton = el("a.connect-wallet", "~ 카이카스 로그인이 필요합니다.", {
                click: () => Wallet.connect(),
            }),
            this.addressDisplay = el(".wallet-address"),
        );
        this.addressDisplay.style({ display: "none" });
        Wallet.on("connect", this.connectHandler);
        this.loadAddress();
    }

    private connectHandler = () => {
        this.loadAddress();
    };

    private async loadAddress() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            if (this.connectWalletButton.deleted !== true) {
                this.connectWalletButton.delete();
            }
            this.addressDisplay.style({ display: "block" });
            this.addressDisplay.empty().appendText(`${address}으로 로그인하셨습니다.`);
        }
    }

    public delete() {
        Wallet.off("connect", this.connectHandler);
        super.delete();
    }
}