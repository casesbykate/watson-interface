"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Terminal_1 = __importDefault(require("./Terminal"));
class BaseTerminal extends Terminal_1.default {
    constructor(name, welcomeMessage, commands, hiddenCommands, input) {
        const newCommands = {
            도움말: {
                run: () => this.print(Object.keys(newCommands).map(e => `  ${e.padEnd(10)} ${newCommands[e].description}`).join("\n")),
                description: "도움말을 출력합니다.",
            },
            초기화: {
                run: () => this.term.write('\x1b[H\x1b[2J'),
                description: "화면을 초기화합니다."
            },
            ...commands
        };
        super(`${name} 부팅중...`, welcomeMessage, { ...newCommands, ...hiddenCommands }, input);
    }
}
exports.default = BaseTerminal;
//# sourceMappingURL=BaseTerminal.js.map