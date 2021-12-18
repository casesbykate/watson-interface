"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyutil_1 = __importDefault(require("skyutil"));
const BaseTerminal_1 = __importDefault(require("./BaseTerminal"));
const ConstantMessages_1 = __importDefault(require("./ConstantMessages"));
const helloMessages = [
    "안녕하신가요? 저는 왓슨입니다.",
    "완슨입니다. 반갑습니다.",
];
class Watson extends BaseTerminal_1.default {
    constructor() {
        super("Watson v1.0", ConstantMessages_1.default.welcome, {}, {
            "안녕": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "안녕?": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "안녕하세요": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "안녕하세요?": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "반가워": { run: () => this.print("반갑습니다.") },
            "반갑습니다": { run: () => this.print("반갑습니다.") },
            "방가": { run: () => this.print("반갑습니다.") },
        });
    }
}
exports.default = Watson;
//# sourceMappingURL=Watson.js.map