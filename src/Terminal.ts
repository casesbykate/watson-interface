import { BodyNode, DomNode } from "@hanul/skynode";
import { Terminal as XTerm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebglAddon } from "xterm-addon-webgl";
import baseTheme from "./baseTheme.json";

export interface Commands {
    [command: string]: {
        run: () => void,
        description?: string,
    },
}

export default abstract class Terminal extends DomNode {

    protected term!: XTerm;
    private fitAddon!: FitAddon;

    private command = "";
    public prefix = "";

    constructor(
        bootingMessage: string,
        private welcomeMessage: string,
        private commands: Commands,
        private input: (command: string) => boolean,
    ) {
        super(".terminal");
        BodyNode.style({
            background: "#2D2E2C",
            color: "#F8F8F8",
            fontFamily: "NeoDunggeunmo",
            padding: "10px 0 10px 10px",
            margin: 0,
        });
        this.style({ width: "100%", height: "100%" });
        this.appendText(bootingMessage);
        this.appendTo(BodyNode);
        setTimeout(() => this.boot(), 1000);
    }

    private get fullPrefix() {
        return `[${this.prefix}]$ `;
    }

    private boot() {
        this.empty();

        this.term = new XTerm({
            fontFamily: "NeoDunggeunmo",
            theme: baseTheme,
            cursorBlink: true,
        });
        this.term.open(this.domElement);
        this.term.loadAddon(new WebglAddon());
        this.fitAddon = new FitAddon();
        this.term.loadAddon(this.fitAddon);

        this.fullscreen();
        window.addEventListener("resize", () => this.fullscreen());

        this.onDom("wheel", (event) => {
            if (this.term.buffer.active.baseY > 0) {
                event.preventDefault();
            }
        });

        this.term.onData((c) => {
            if (c === "[15~") {
                location.reload();
            } else if (c === "\u0003") {
                this.term.write("^C");
                this.prompt();
            } else if (c === "\r") {
                const command = this.command.trim().split(" ")[0];
                if (command.length > 0) {
                    this.term.writeln("");
                    if (command in this.commands) {
                        this.commands[command].run();
                    } else if (this.input(command) !== true) {
                        this.term.writeln(`${command}: 명령어를 찾을 수 없습니다.`);
                    }
                }
                this.prompt();
            } else if (c === "\u007F") {
                if (this.term.buffer.normal.cursorX > this.fullPrefix.length) {
                    this.term.write("\b \b");
                    if (this.command.length > 0) {
                        this.command = this.command.substring(0, this.command.length - 1);
                    }
                }
            } else if (c >= String.fromCharCode(0x20) && c <= String.fromCharCode(0x7B) || c >= "\u00a0") {
                this.command += c;
                this.term.write(c);
            }
        });

        this.print(this.welcomeMessage);
        this.prompt();

        this.fireEvent("boot");
    }

    public print(message: string) {
        this.term.writeln(message.split("\n").join("\n\r"));
    }

    private fullscreen() {
        this.fitAddon.fit();
        const rows = Math.floor((window.innerHeight - 20) / 16);
        this.term.resize(this.term.cols, rows);
    }

    public prompt() {
        this.command = "";
        this.term.write(`\r\n${this.fullPrefix}`);
    }
}
