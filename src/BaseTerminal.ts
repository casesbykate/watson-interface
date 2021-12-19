import ConstantMessages from "./ConstantMessages";
import Terminal, { Commands } from "./Terminal";

export default abstract class BaseTerminal extends Terminal {

    constructor(
        name: string,
        welcomeMessage: string,
        commands: Commands,
        hiddenCommands: Commands,
        input: (...commands: string[]) => boolean,
    ) {
        const newCommands = {
            도움말: {
                run: () => {
                    this.print(ConstantMessages.help);
                    this.print(`
Cases By Kate \x1b[33;1m도움말\x1b[0m 및 명령어 모음입니다.

1. 추리 시뮬레이션 방법

명령어 입력을 통해 추리 시뮬레이션을 진행하실 수 있습니다.
케이스의 특성을 분해해서 단서로 만들 수 있습니다.
특정 \x1b[31;1m용의자\x1b[0m에 해당하는 단서를 모아서 제출하면, \x1b[31;1m용의자\x1b[0m를 검거하여 NFT로 보상받을 수 있습니다.
`);
                    this.print("2. 사무소 이용 명령어\n");
                    this.print(Object.keys(newCommands).map(e => `  ${e.padEnd(20)} ${(newCommands as any)[e].description}`).join("\n"));
                },
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
