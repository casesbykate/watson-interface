import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebglAddon } from "xterm-addon-webgl";

const element = document.getElementById("terminal")!;

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

var terminal = new Terminal({
    fontFamily: "NeoDunggeunmo",
    theme: baseTheme,
    cursorBlink: true,
});
terminal.open(element);

const fitAddon = new FitAddon();
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
    const webgl = new WebglAddon();
    terminal.loadAddon(webgl);
    isWebglEnabled = true;
} catch (e) {
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
var commands: any = {
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
    "초기화": {
        f: () => {
            terminal.write('\x1b[H\x1b[2J');
        },
        description: "화면을 초기화합니다."
    },
    loadtest: {
        f: () => {
            let testData = [];
            let byteCount = 0;
            for (let i = 0; i < 50; i++) {
                let count = 1 + Math.floor(Math.random() * 79);
                byteCount += count + 2;
                let data = new Uint8Array(count + 2);
                data[0] = 0x0A; // \n
                for (let i = 1; i < count + 1; i++) {
                    data[i] = 0x61 + Math.floor(Math.random() * (0x7A - 0x61));
                }
                // End each line with \r so the cursor remains constant, this is what ls/tree do and improves
                // performance significantly due to the cursor DOM element not needing to change
                data[data.length - 1] = 0x0D; // \r
                testData.push(data);
            }
            let start = performance.now();
            for (let i = 0; i < 1024; i++) {
                for (const d of testData) {
                    terminal.write(d);
                }
            }
            // Wait for all data to be parsed before evaluating time
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

// TODO: Use a nicer default font
terminal.writeln((`████████████████────────────────██████████████████
████████████████─────────────────█████████████████
███████████████───────────────────████████████████
██████████████────────────────────████████████████
█████████████──────────────────────███████████████
████████████───────────────────────███████████████
███████████─────────────────────────██████████████
██████████──────────────────────────██████████████
██████████───────────────────────────█████████████
██████████───────────────────────────█████████████
██████████───────────────────────────────█████████
██████████───────────────────────────────────█████
██████████───────────────────────────███─────────█
██████████────────────────────────────███████────█
██████████───────────────────────────█████████████
██████████────────────────────────────████████████
███████████────────────────────────────███████████
███████████─────────────────────────────██████████
██████████──────────────────────────────██████████
████████───██────────────────────────────█████████
███████───███────────────────────────────█████████
██████────███───────────────────────────██████████
█████────████─────────────────────────████████████
█████─██████────────────────────────────██████████
███████████──────────────────────────────█████████
██████████───────────────────────────────█████████
██████████───────────────────────────██──█████████
█████████─────────────────────────────██──████████
████████──────────────────────────────██──████████
███████───────────────────────────────██──██───███
██████───────────────────────────────███──██─────█
█████─────────────────────────██────████──██──────
█████─────────────────────────██████████───█──────
████──────────────────────────██████████──────────
████─────────────────────────███████████──────────
███───────────────────────────██████████─────────█
██────────────────────────────██████████─────────█
█──────────────────────────────██████████───────██
─────██────────────────────────████████████────███
────███████─────────────────────██████████████████
───████████████──────────────────█████████████████
──███████████████────────────────█████████████████`).split("\n").join("\n\r"));

terminal.writeln("Below is a simple emulated backend, try running `help`.");
prompt(terminal);

terminal.onData(e => {
    switch (e) {
        case "[15~": {
            location.reload();
            break;
        }
        case "\u0003": // Ctrl+C
            terminal.write("^C");
            prompt(terminal);
            break;
        case "\r": // Enter
            runCommand(terminal, command);
            command = "";
            break;
        case "\u007F": // Backspace (DEL)
            // Do not delete the prompt
            if (terminal.buffer.normal.cursorX > 2) {
                terminal.write("\b \b");
                if (command.length > 0) {
                    command = command.substring(0, command.length - 1);
                }
            }
            break;
        default: // Print all other characters for demo
            if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7B) || e >= "\u00a0") {
                command += e;
                terminal.write(e);
            }
    }
});