import SkyUtil from "skyutil";
import BaseTerminal from "./BaseTerminal";
import ConstantMessages from "./ConstantMessages";
import Wallet from "./klaytn/Wallet";
import Store from "./Store";

const helloMessages = [
    "안녕하신가요? 저는 왓슨입니다.",
    "완슨입니다. 반갑습니다.",
];

export default class Watson extends BaseTerminal {

    private store: Store = new Store("watson-store");
    private changeNameMode = false;

    constructor() {
        super("Watson v1.0", ConstantMessages.welcome, {
            이름변경: {
                run: () => {
                    this.changeNameMode = true;
                    this.print("이름을 변경합니다. 이름을 입력하세요.");
                },
                description: "이름을 변경합니다.",
            },
        }, {
            "안녕": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "안녕?": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "안녕하세요": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "안녕하세요?": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "반가워": { run: () => this.print("반갑습니다.") },
            "반갑습니다": { run: () => this.print("반갑습니다.") },
            "방가": { run: () => this.print("반갑습니다.") },
        }, (command) => {
            if (this.changeNameMode === true) {
                this.store.set("username", command.trim());
                this.print("이름이 등록되었습니다.");
                this.print(`\n\n[Watson] 안녕 \x1b[36;1m${this.store.get("username")}\x1b[0m, 어떤 걸 도와줄까? 뭘 해야할지 모르겠다면, \x1b[33;1m도움말\x1b[0m을 입력해.`);
                this.print("명령어를 입력하세요. 도움말 또는 명령어를 보고 싶다면 \x1b[33;1m도움말\x1b[0m을 입력하세요.");
                return true;
            }
            return false;
        });

        this.on("boot", () => this.checkWallet());
    }

    private async checkWallet() {
        if (await Wallet.connected() !== true) {
            this.print("\x1b[31;1m카이카스 로그인이 필요합니다.\x1b[0m");
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.print(`\x1b[32;1m${address} 로 로그인하셨습니다.\x1b[0m`);
            this.print(ConstantMessages.intro);
            if (this.store.get("username") === undefined) {
                this.print("\n\n[Watson] 처음 온 것 같군. 이름이 뭐야? 이름이 없는 사람한텐 우린 수사할 거리 안줘.");
                this.print("이름을 입력하세요.");
                this.changeNameMode = true;
            } else {
                this.print(`\n\n[Watson] 안녕 \x1b[36;1m${this.store.get("username")}\x1b[0m, 어떤 걸 도와줄까? 뭘 해야할지 모르겠다면, \x1b[33;1m도움말\x1b[0m을 입력해.`);
                this.print("명령어를 입력하세요. 도움말 또는 명령어를 보고 싶다면 \x1b[33;1m도움말\x1b[0m을 입력하세요.");
            }
            this.prompt();
        }
    }
}
