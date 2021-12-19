import Terminal, { Commands } from "./Terminal";
export default abstract class BaseTerminal extends Terminal {
    constructor(name: string, welcomeMessage: string, commands: Commands, hiddenCommands: Commands, input: (command: string) => boolean);
}
//# sourceMappingURL=BaseTerminal.d.ts.map