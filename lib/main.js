"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xterm_1 = require("xterm");
const xterm_addon_fit_1 = require("xterm-addon-fit");
const xterm_addon_webgl_1 = require("xterm-addon-webgl");
const element = document.getElementById("terminal");
const baseTheme = {
    foreground: "#F8F8F8",
    background: "#2D2E2C",
    selection: "#5DA5D533",
    black: "#1E1E1D",
    brightBlack: "#262625",
    red: "#CE5C5C",
    brightRed: "#FF7272",
    green: "#5BCC5B",
    brightGreen: "#72FF72",
    yellow: "#CCCC5B",
    brightYellow: "#FFFF72",
    blue: "#5D5DD3",
    brightBlue: "#7279FF",
    magenta: "#BC5ED1",
    brightMagenta: "#E572FF",
    cyan: "#5DA5D5",
    brightCyan: "#72F0FF",
    white: "#F8F8F8",
    brightWhite: "#FFFFFF"
};
var terminal = new xterm_1.Terminal({
    fontFamily: "NeoDunggeunmo",
    theme: baseTheme,
    cursorBlink: true,
});
terminal.open(element);
const fitAddon = new xterm_addon_fit_1.FitAddon();
terminal.loadAddon(fitAddon);
window.addEventListener("resize", () => {
    fitAddon.fit();
    const rows = Math.floor((window.innerHeight - 20) / 16);
    console.log(rows);
    terminal.resize(terminal.cols, rows);
});
fitAddon.fit();
const rows = Math.floor((window.innerHeight - 20) / 16);
console.log(rows);
terminal.resize(terminal.cols, rows);
var isWebglEnabled = false;
try {
    const webgl = new xterm_addon_webgl_1.WebglAddon();
    terminal.loadAddon(webgl);
    isWebglEnabled = true;
}
catch (e) {
    console.warn("WebGL addon threw an exception during load", e);
}
element.addEventListener("wheel", e => {
    if (terminal.buffer.active.baseY > 0) {
        e.preventDefault();
    }
});
function prompt(term) {
    command = "";
    term.write("\r\n$ ");
}
var command = "";
var commands = {
    help: {
        f: () => {
            terminal.writeln([
                "Welcome to xterm.js! Try some of the commands below.",
                "",
                ...Object.keys(commands).map(e => `  ${e.padEnd(10)} ${commands[e].description}`)
            ].join("\n\r"));
            prompt(terminal);
        },
        description: "Prints this help message",
    },
    ls: {
        f: () => {
            terminal.writeln(["a", "bunch", "of", "fake", "files"].join("\r\n"));
            terminal.prompt(terminal);
        },
        description: "Prints a fake directory structure"
    },
    "안녕?": {
        f: () => {
            terminal.writeln(["a", "bunch", "of", "fake", "files"].join("\r\n"));
            terminal.prompt(terminal);
        },
        description: "Prints a fake directory structure"
    },
    loadtest: {
        f: () => {
            let testData = [];
            let byteCount = 0;
            for (let i = 0; i < 50; i++) {
                let count = 1 + Math.floor(Math.random() * 79);
                byteCount += count + 2;
                let data = new Uint8Array(count + 2);
                data[0] = 0x0A;
                for (let i = 1; i < count + 1; i++) {
                    data[i] = 0x61 + Math.floor(Math.random() * (0x7A - 0x61));
                }
                data[data.length - 1] = 0x0D;
                testData.push(data);
            }
            let start = performance.now();
            for (let i = 0; i < 1024; i++) {
                for (const d of testData) {
                    terminal.write(d);
                }
            }
            terminal.write("", () => {
                let time = Math.round(performance.now() - start);
                let mbs = ((byteCount / 1024) * (1 / (time / 1000))).toFixed(2);
                terminal.write(`\n\r\nWrote ${byteCount}kB in ${time}ms (${mbs}MB/s) using the ${isWebglEnabled ? "webgl" : "canvas"} renderer`);
                terminal.prompt();
            });
        },
        description: "Simulate a lot of data coming from a process"
    }
};
function runCommand(term, text) {
    const command = text.trim().split(" ")[0];
    if (command.length > 0) {
        term.writeln("");
        if (command in commands) {
            commands[command].f();
            return;
        }
        term.writeln(`${command}: command not found`);
    }
    prompt(term);
}
terminal.prompt = () => {
    terminal.write("\r\n$ ");
};
terminal.writeln([
    "    Xterm.js is the frontend component that powers many terminals including",
    "                           \x1b[3mVS Code\x1b[0m, \x1b[3mHyper\x1b[0m and \x1b[3mTheia\x1b[0m!",
    "",
    " ┌ \x1b[1mFeatures\x1b[0m ──────────────────────────────────────────────────────────────────┐",
    " │                                                                            │",
    " │  \x1b[31;1mApps just work                         \x1b[32mPerformance\x1b[0m                        │",
    " │   Xterm.js works with most terminal      Xterm.js is fast and includes an  │",
    " │   apps like bash, vim and tmux           optional \x1b[3mWebGL renderer\x1b[0m           │",
    " │                                                                            │",
    " │  \x1b[33;1mAccessible                             \x1b[34mSelf-contained\x1b[0m                     │",
    " │   A screen reader mode is available      Zero external dependencies        │",
    " │                                                                            │",
    " │  \x1b[35;1mUnicode support                        \x1b[36mAnd much more...\x1b[0m                   │",
    " │   Supports CJK 語 and emoji \u2764\ufe0f            \x1b[3mLinks\x1b[0m, \x1b[3mthemes\x1b[0m, \x1b[3maddons\x1b[0m, \x1b[3mtyped API\x1b[0m  │",
    " │                                            ^ Try clicking italic text      │",
    " │                                                                            │",
    " └────────────────────────────────────────────────────────────────────────────┘",
    ""
].join("\n\r"));
terminal.writeln("Below is a simple emulated backend, try running `help`.");
prompt(terminal);
terminal.onData(e => {
    switch (e) {
        case "[15~": {
            location.reload();
            break;
        }
        case "\u0003":
            terminal.write("^C");
            prompt(terminal);
            break;
        case "\r":
            runCommand(terminal, command);
            command = "";
            break;
        case "\u007F":
            if (terminal._core.buffer.x > 2) {
                terminal.write("\b \b");
                if (command.length > 0) {
                    command = command.substr(0, command.length - 1);
                }
            }
            break;
        default:
            if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7B) || e >= "\u00a0") {
                command += e;
                terminal.write(e);
            }
    }
});
//# sourceMappingURL=main.js.map