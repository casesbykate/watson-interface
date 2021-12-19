import Terminal, { Commands } from "./Terminal";
export default abstract class BaseTerminal extends Terminal {
    constructor(name: string, welcomeMessage: string, commands: Commands, hiddenCommands: Commands, input: (...commands: string[]) => Promise<boolean>);
}
//# sourceMappingURL=BaseTerminal.d.ts.map