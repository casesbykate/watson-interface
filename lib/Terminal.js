"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const xterm_1 = require("xterm");
const xterm_addon_fit_1 = require("xterm-addon-fit");
const xterm_addon_webgl_1 = require("xterm-addon-webgl");
const baseTheme_json_1 = __importDefault(require("./baseTheme.json"));
class Terminal extends skynode_1.DomNode {
    constructor(bootingMessage, welcomeMessage, commands, input) {
        super(".terminal");
        this.welcomeMessage = welcomeMessage;
        this.commands = commands;
        this.input = input;
        this.command = "";
        this.prefix = "";
        skynode_1.BodyNode.style({
            background: "#2D2E2C",
            color: "#F8F8F8",
            fontFamily: "NeoDunggeunmo",
            padding: "10px 0 10px 10px",
            margin: 0,
        });
        this.style({ width: "100%", height: "100%" });
        this.appendText(bootingMessage);
        this.appendTo(skynode_1.BodyNode);
        setTimeout(() => this.boot(), 1000);
    }
    get fullPrefix() {
        return `[${this.prefix}]$ `;
    }
    boot() {
        this.empty();
        this.term = new xterm_1.Terminal({
            fontFamily: "NeoDunggeunmo",
            theme: baseTheme_json_1.default,
            cursorBlink: true,
        });
        this.term.open(this.domElement);
        this.term.loadAddon(new xterm_addon_webgl_1.WebglAddon());
        this.fitAddon = new xterm_addon_fit_1.FitAddon();
        this.term.loadAddon(this.fitAddon);
        this.fullscreen();
        window.addEventListener("resize", () => this.fullscreen());
        this.onDom("wheel", (event) => {
            if (this.term.buffer.active.baseY > 0) {
                event.preventDefault();
            }
        });
        this.term.onData(async (c) => {
            if (c === "[15~") {
                location.reload();
            }
            else if (c === "\u0003") {
                this.term.write("^C");
                this.prompt();
            }
            else if (c === "\r") {
                const commands = this.command.trim().split(" ");
                const command = commands[0];
                if (command.length > 0) {
                    this.term.writeln("");
                    let cmd;
                    for (const c of Object.keys(this.commands)) {
                        if ((commands.length === 1 && c === command) ||
                            (commands.length > 1 && c.indexOf(`${command} [`) === 0)) {
                            cmd = this.commands[c];
                        }
                    }
                    if (cmd !== undefined) {
                        commands.shift();
                        const result = cmd.run(...commands);
                        if (result instanceof Promise) {
                            await Promise.all([result]);
                        }
                    }
                    else if (this.input(...commands) !== true) {
                        this.term.writeln(`${command}: 명령어를 찾을 수 없습니다.`);
                    }
                }
                this.prompt();
            }
            else if (c === "\u007F") {
                if (this.term.buffer.normal.cursorX > this.fullPrefix.length) {
                    this.term.write("\b \b");
                    if (this.command.length > 0) {
                        this.command = this.command.substring(0, this.command.length - 1);
                    }
                }
            }
            else if (c >= String.fromCharCode(0x20) && c <= String.fromCharCode(0x7B) || c >= "\u00a0") {
                this.command += c;
                this.term.write(c);
            }
        });
        this.print(this.welcomeMessage);
        this.prompt();
        this.fireEvent("boot");
    }
    print(message) {
        this.term.writeln(message.split("\n").join("\n\r"));
    }
    fullscreen() {
        this.fitAddon.fit();
        const rows = Math.floor((window.innerHeight - 20) / 16);
        this.term.resize(this.term.cols, rows);
    }
    prompt() {
        this.command = "";
        this.term.write(`\r\n${this.fullPrefix}`);
    }
}
exports.default = Terminal;
//# sourceMappingURL=Terminal.js.map