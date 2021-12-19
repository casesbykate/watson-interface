import { DomNode } from "@hanul/skynode";
import { Terminal as XTerm } from "xterm";
export interface Commands {
    [command: string]: {
        run: (...params: string[]) => Promise<void> | void;
        description?: string;
    };
}
export default abstract class Terminal extends DomNode {
    private welcomeMessage;
    private commands;
    private input;
    protected term: XTerm;
    private fitAddon;
    private command;
    prefix: string;
    constructor(bootingMessage: string, welcomeMessage: string, commands: Commands, input: (...commands: string[]) => Promise<boolean>);
    private get fullPrefix();
    private boot;
    print(message: string): void;
    private fullscreen;
    prompt(): void;
}
//# sourceMappingURL=Terminal.d.ts.map