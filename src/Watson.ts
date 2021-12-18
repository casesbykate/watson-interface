import SkyUtil from "skyutil";
import BaseTerminal from "./BaseTerminal";
import ConstantMessages from "./ConstantMessages";

const helloMessages = [
    "안녕하신가요? 저는 왓슨입니다.",
    "완슨입니다. 반갑습니다.",
];

export default class Watson extends BaseTerminal {

    constructor() {
        super("Watson v1.0", ConstantMessages.welcome, {

        }, {
            "안녕": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "안녕?": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "안녕하세요": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "안녕하세요?": { run: () => this.print(helloMessages[SkyUtil.random(0, helloMessages.length - 1)]) },
            "반가워": { run: () => this.print("반갑습니다.") },
            "반갑습니다": { run: () => this.print("반갑습니다.") },
            "방가": { run: () => this.print("반갑습니다.") },
        });
    }
}
