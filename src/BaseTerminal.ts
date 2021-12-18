import Terminal, { Commands } from "./Terminal";

export default abstract class BaseTerminal extends Terminal {

    constructor(
        name: string,
        welcomeMessage: string,
        commands: Commands,
        hiddenCommands: Commands,
    ) {
        const newCommands = {
            도움말: {
                run: () => this.print(Object.keys(newCommands).map(e => `  ${e.padEnd(10)} ${(newCommands as any)[e].description}`).join("\n")),
                description: "도움말을 출력합니다.",
            },
            초기화: {
                run: () => this.term.write('\x1b[H\x1b[2J'),
                description: "화면을 초기화합니다."
            },
            ...commands
        };
        super(`${name} 부팅중...`, welcomeMessage, { ...newCommands, ...hiddenCommands });
    }
}
