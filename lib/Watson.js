"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skyutil_1 = __importDefault(require("skyutil"));
const superagent_1 = __importDefault(require("superagent"));
const uuid_1 = require("uuid");
const BaseTerminal_1 = __importDefault(require("./BaseTerminal"));
const Config_1 = __importDefault(require("./Config"));
const ConstantMessages_1 = __importDefault(require("./ConstantMessages"));
const CasesByKateContract_1 = __importDefault(require("./contracts/CasesByKateContract"));
const CryptoCriminals77Contract_1 = __importDefault(require("./contracts/CryptoCriminals77Contract"));
const CryptoCriminals77MinterContract_1 = __importDefault(require("./contracts/CryptoCriminals77MinterContract"));
const KlayswapContract_1 = __importDefault(require("./contracts/KlayswapContract"));
const MixContract_1 = __importDefault(require("./contracts/MixContract"));
const database_v2_json_1 = __importDefault(require("./database-v2.json"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const Store_1 = __importDefault(require("./Store"));
const helloMessages = [
    "안녕하신가요? 저는 왓슨입니다.",
    "완슨입니다. 반갑습니다.",
];
class Watson extends BaseTerminal_1.default {
    constructor() {
        super("Watson v1.0", ConstantMessages_1.default.welcome, {
            이름변경: {
                run: () => {
                    this.changeNameMode = true;
                    this.print("이름을 변경합니다. 이름을 입력하세요.");
                },
                description: "이름을 변경합니다.",
            },
            명단: {
                run: async () => {
                    this.print("명단을 불러오는 중입니다...\n");
                    const results = (await superagent_1.default.get(`https://${Config_1.default.apiHost}/77cryptocriminals/all`)).body;
                    this.print(ConstantMessages_1.default.list);
                    this.print("< \x1b[31;1m용의자 명단\x1b[0m >");
                    for (const result of results) {
                        this.print(`(${result.id}) ${result.name} (${result.totalSupply}/${result.maxSupply})`);
                    }
                    this.print("\n[Watson] 이 중에 짐작가는 사람 있어?\n");
                    this.print("\x1b[31;1m용의자\x1b[0m를 추적하려면, ‘추적 \x1b[31;1m[용의자 번호]\x1b[0m'를 입력하세요. 명령어 예시 : 추적 12");
                },
                description: "용의자들의 명단을 봅니다.",
            },
            "추적 [용의자 번호]": {
                run: async (cardId) => {
                    const address = await Wallet_1.default.loadAddress();
                    if (address !== undefined) {
                        if ((await MixContract_1.default.allowance(address, CryptoCriminals77MinterContract_1.default.address)).lt(ethers_1.constants.MaxUint256.div(2))) {
                            this.print("믹스 사용 허락이 필요합니다. 믹스 사용을 허락하시고 추적을 다시 시도해주시기 바랍니다.");
                            await MixContract_1.default.approve(CryptoCriminals77MinterContract_1.default.address, ethers_1.constants.MaxUint256);
                        }
                        else {
                            this.print("용의자 정보를 불러오는 중입니다...\n");
                            const data = (await superagent_1.default.get(`https://${Config_1.default.apiHost}/77cryptocriminals/${cardId}/clues`)).body;
                            if (data.limited === true) {
                                this.print(`[Watson] '${data.name}'는 이미 검거됐어.`);
                            }
                            else {
                                this.cardId = cardId;
                                this.print(`[Watson] '${data.name}' 말이야?`);
                                for (const clue of data.clues) {
                                    this.print(`[Watson] ${clue}`);
                                }
                                this.print("\n검거에 필요한 단서가 적힌 케이스를 모두 모았다고 판단되면, 추적을 시작하세요.");
                                this.print("추적에는 7개의 케이스가 필요하며, 추적을 할때마다 \x1b[31;1m1 믹스가 의뢰비로 사용\x1b[0m됩니다.");
                                this.print("추적에 사용할 7개의 케이스 번호를 띄어쓰기로 입력해주세요. 입력 예시 : 33 44 142 334 1234 5678 42");
                                this.changeMintMode = true;
                            }
                        }
                    }
                },
                description: "[용의자 번호]에 해당하는 용의자를 추적합니다. ex) 추적 12",
            },
            케이스: {
                run: async () => {
                    this.print("케이스를 불러오는 중입니다...\n");
                    const address = await Wallet_1.default.loadAddress();
                    if (address !== undefined) {
                        const balance = await CasesByKateContract_1.default.balanceOf(address);
                        const ids = [];
                        const idsUsed = [];
                        const promises = [];
                        for (let i = 0; i < balance.toNumber(); i += 1) {
                            const promise = async (index) => {
                                try {
                                    const id = (await CasesByKateContract_1.default.tokenOfOwnerByIndex(address, index)).toNumber();
                                    ids.push(id);
                                    if (await CryptoCriminals77MinterContract_1.default.usedCases(id) === true) {
                                        idsUsed.push(id);
                                    }
                                }
                                catch (e) {
                                    console.error(e);
                                }
                            };
                            promises.push(promise(i));
                        }
                        await Promise.all(promises);
                        ids.sort((a, b) => a - b);
                        this.print(ConstantMessages_1.default.inventory);
                        this.print("< 보유한 케이스 목록 >\n");
                        let message = "";
                        for (const [index, id] of ids.entries()) {
                            if (index > 0) {
                                message += ", ";
                            }
                            if (idsUsed.includes(id) === true) {
                                message += `\x1b[31;1m#${id}\x1b[0m`;
                            }
                            else {
                                message += `#${id}`;
                            }
                        }
                        this.print(message);
                        this.print(`\n총 ${ids.length} 개의 케이스를 보유하고 있습니다.`);
                        this.print("\x1b[31;1m빨간색\x1b[0m으로 표시된 케이스는 이미 사용된 케이스입니다.");
                    }
                },
                description: "내가 소유한 케이스들과 이미 사용된 케이스를 확인합니다.",
            },
            "케이스 [케이스 ID]": {
                run: async (caseId) => {
                    const _case = database_v2_json_1.default[caseId];
                    if (_case !== undefined) {
                        this.print(`\n< CASE #${caseId} 정보 >\n`);
                        this.print(_case.text);
                        if (await CryptoCriminals77MinterContract_1.default.usedCases(caseId) === true) {
                            this.print(`\x1b[31;1mCASE #${caseId}은 이미 사용되었습니다.\x1b[0m`);
                        }
                        else {
                            this.print(`CASE #${caseId}은 아직 사용되지 않았습니다.`);
                        }
                    }
                    else {
                        this.print("[Watson] 그런 케이스는 없어.");
                    }
                },
                description: "[케이스 ID]에 해당하는 케이스의 정보를 봅니다. ex) 케이스 4823",
            },
            카드: {
                run: async () => {
                    this.print("카드를 불러오는 중입니다...\n");
                    const list = (await superagent_1.default.get(`https://${Config_1.default.apiHost}/77cryptocriminals/all`)).body;
                    const address = await Wallet_1.default.loadAddress();
                    if (address !== undefined) {
                        const owners = [];
                        const ids = [];
                        skyutil_1.default.repeat(77, (index) => {
                            owners.push(address);
                            ids.push(index + 1);
                        });
                        const results = await CryptoCriminals77Contract_1.default.balanceOfBatch(owners, ids);
                        this.print(ConstantMessages_1.default.inventory);
                        this.print("< 보유한 카드 목록 >\n");
                        let totalCount = 0;
                        for (const [index, result] of results.entries()) {
                            const count = result.toNumber();
                            if (count > 0) {
                                const data = list[index];
                                this.print(`(${data.id}) ${data.name} (${count}개)`);
                                totalCount += count;
                            }
                        }
                        this.print(`\n총 ${totalCount} 개의 카드를 보유하고 있습니다.`);
                    }
                },
                description: "내가 소유한 카드들을 봅니다.",
            },
            "믹스": {
                run: async () => {
                    this.print("믹스 수량을 불러오는 중입니다...\n");
                    const address = await Wallet_1.default.loadAddress();
                    if (address !== undefined) {
                        const mix = await MixContract_1.default.balanceOf(address);
                        this.print("< 보유한 믹스 수량 >\n");
                        this.print(`${ethers_1.utils.formatEther(mix)} MIX`);
                    }
                },
                description: "내가 소유한 믹스 수량을 확인합니다.",
            },
            "믹스구매": {
                run: () => {
                    this.changeBuyMixMode = true;
                    this.print("믹스를 구매합니다. 구매 수량을 입력하세요.");
                },
                description: "믹스를 구매합니다.",
            },
        }, {
            "안녕": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "안녕?": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "안녕하세요": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "안녕하세요?": { run: () => this.print(helloMessages[skyutil_1.default.random(0, helloMessages.length - 1)]) },
            "반가워": { run: () => this.print("반갑습니다.") },
            "반갑습니다": { run: () => this.print("반갑습니다.") },
            "방가": { run: () => this.print("반갑습니다.") },
        }, async (...commands) => {
            const command = commands[0];
            if (this.changeNameMode === true) {
                this.store.set("username", command, true);
                this.prefix = command;
                this.print("이름이 등록되었습니다.");
                this.print(`\n\n[Watson] 안녕 \x1b[36;1m${this.store.get("username")}\x1b[0m, 어떤 걸 도와줄까? 뭘 해야할지 모르겠다면, \x1b[33;1m도움말\x1b[0m을 입력해.`);
                this.print("명령어를 입력하세요. 도움말 또는 명령어를 보고 싶다면 \x1b[33;1m도움말\x1b[0m을 입력하세요.");
                this.changeNameMode = false;
                return true;
            }
            if (this.changeBuyMixMode === true) {
                const mix = ethers_1.utils.parseEther(command);
                await KlayswapContract_1.default.buyMix(mix);
                this.changeBuyMixMode = false;
                return true;
            }
            if (this.changeMintMode === true) {
                if (commands.length !== 7) {
                    this.print("\x1b[31;1m[오류] 7개의 케이스 번호가 필요합니다. 추적을 다시 시도해주시기 바랍니다.\x1b[0m");
                }
                else {
                    const address = await Wallet_1.default.loadAddress();
                    if (address !== undefined) {
                        if ((await MixContract_1.default.allowance(address, CryptoCriminals77MinterContract_1.default.address)).lt(ethers_1.constants.MaxUint256.div(2))) {
                            this.print("믹스 사용 허락이 필요합니다. 믹스 사용을 허락하시고 추적을 다시 시도해주시기 바랍니다.");
                            await MixContract_1.default.approve(CryptoCriminals77MinterContract_1.default.address, ethers_1.constants.MaxUint256);
                        }
                        else {
                            for (const command of commands) {
                                if (await CasesByKateContract_1.default.ownerOf(command) !== address) {
                                    this.print(`\x1b[31;1mCASE #${command}를 소유하고 있지 않습니다.\x1b[0m`);
                                    this.changeMintMode = false;
                                    return true;
                                }
                                if (await CryptoCriminals77MinterContract_1.default.usedCases(command) === true) {
                                    this.print(`\x1b[31;1mCASE #${command}은 이미 사용되었습니다. 추적을 다시 시도해주시기 바랍니다.\x1b[0m`);
                                    this.changeMintMode = false;
                                    return true;
                                }
                            }
                            const key = (0, uuid_1.v4)();
                            this.print("추적을 시도합니다.");
                            await CryptoCriminals77MinterContract_1.default.tryMint(key, commands);
                            this.print("\n추적중...\n");
                            await new Promise((resolve) => {
                                setTimeout(async () => {
                                    const result = await fetch(`https://${Config_1.default.apiHost}/77cryptocriminals/sign`, {
                                        method: "POST",
                                        body: JSON.stringify({
                                            to: address,
                                            id: this.cardId,
                                            cases: commands,
                                            key,
                                        }),
                                    });
                                    const data = await result.json();
                                    if (data.passed !== true) {
                                        this.print("검거에 \x1b[31;1m실패\x1b[0m하였습니다. \x1b[31;1m범인을 잡기 위한 단서가 부족합니다\x1b[0m");
                                    }
                                    else {
                                        await CryptoCriminals77MinterContract_1.default.mint(address, this.cardId, commands, key, data.signature);
                                        const card = (await superagent_1.default.get(`https://${Config_1.default.apiHost}/77cryptocriminals/${this.cardId}/clues`)).body;
                                        this.print(`'${card.name}' 카드를 획득 했습니다 !`);
                                    }
                                    resolve();
                                }, 2000);
                            });
                        }
                    }
                }
                this.changeMintMode = false;
                return true;
            }
            return false;
        });
        this.store = new Store_1.default("watson-store");
        this.changeNameMode = false;
        this.changeBuyMixMode = false;
        this.changeMintMode = false;
        this.cardId = "";
        this.on("boot", () => this.checkWallet());
    }
    async checkWallet() {
        if (await Wallet_1.default.connected() !== true) {
            this.print("\x1b[31;1m카이카스 로그인이 필요합니다.\x1b[0m");
            await Wallet_1.default.connect();
        }
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            this.print(`\x1b[32;1m${address} 로 로그인하셨습니다.\x1b[0m`);
            this.print(ConstantMessages_1.default.intro);
            if (this.store.get("username") === undefined) {
                this.print("\n\n[Watson] 처음 온 것 같군. 이름이 뭐야? 이름이 없는 사람한텐 우린 수사할 거리 안줘.");
                this.print("이름을 입력하세요.");
                this.changeNameMode = true;
            }
            else {
                this.prefix = this.store.get("username");
                this.print(`\n\n[Watson] 안녕 \x1b[36;1m${this.store.get("username")}\x1b[0m, 어떤 걸 도와줄까? 뭘 해야할지 모르겠다면, \x1b[33;1m도움말\x1b[0m을 입력해.`);
                this.print("명령어를 입력하세요. 도움말 또는 명령어를 보고 싶다면 \x1b[33;1m도움말\x1b[0m을 입력하세요.");
            }
            this.prompt();
        }
    }
}
exports.default = Watson;
//# sourceMappingURL=Watson.js.map