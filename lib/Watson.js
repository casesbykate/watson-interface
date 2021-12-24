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
const welcomeMessages = [
    "그거 아나? 비가 올 때 살인 사건이 많이 일어난다고 하는데, 사실은 그렇지 않아. ",
    "언젠가 보스톤에서는 일렉트릭 기타를 흉기로 사용했던 살인 사건이 있었지.",
    "블랙 달리아 사건은 아직까지도 소름돋는 사건이야. 찢어진 입, 절단된 시신.. 범인을 잡지 못했다는 사실이 가장 무섭지.",
    "…. 아직도 생각 중인가? 자네가 단서와 씨름하는 동안, 지구상의 누군가는 목숨을 잃었겠지.",
    "통계학적으로 희생자의 대부분은 50대 이하라는 것이 밝혀진 적 있다네.",
    "내가 본 사건들 중 가장 황당한 흉기 말인가? 음… 가득 찬 피클 병이라네. 그래, 열지도 않은 피클 병 말이야.",
    "때로는 주먹이 총보다 더 무서울 수 있어. 너클을 낀 범인이 피해자를 단 1분 만에 살해한 사건이 있을 정도니까.",
    "… 묻지마 살인이 우발적일 가능성은 거의 없어. 오히려 아주 계획적이라면 모를까.",
    "살인 사건이 언제 가장 많이 일어나냐고? 월요일. 스트레스가 가장 높은 날이니까. 암, 그렇지.",
    "자네, 톱의 종류를 다 말해보게. 일반 톱, 줄톱, 와이어 톱, 원형 톱…... 하나 빠트렸군. 전기톱을 잊으면 안 되지. ",
    "<텍사스 전기톱 살인사건> 이 그저 영화인 줄 알았나? … 전기톱은 생각보다 많이 사용되는 흉기야.",
    "현장에서 가장 많이 마주했던 도구는 쇠지렛대야. 단순 강도부터 살인 사건까지, 다양한 범죄에 쓰이는 도구지.",
    "끔찍한 현장을 보고 왔나 보군… 칼이 사용된 사건 현장에 가면 그야말로 난장판이지. ",
    "회칼은 두께가 얇아 저항이 별로 없어. 다시 말하자면, 빠른 공격을 할 수 있다는 말일세… 더 깊이 알려고 하지 말게. ",
    "농약에는 구토 유발제가 들어 있는 경우가 있어. ",
    "자네, 화분에서 유골을 발견한 적 있나? 웃지 말게. 캐나다에서 실제로 일어났던 사건이니까.",
    "용의자가 종종 편지를 보낼 때가 있어. 철자나 문법이 엉망일 경우, 편지를 쓰면서 평정심을 잃었다는 뜻이라네.",
    "…. 자네 지금 이걸 단서라고 가져온 건가? 다시 공부해야겠군. ",
    "테드 번디는 엄청난 양의 팬레터를 받았다지. 찰스 맨슨은 그의 팬과 옥중 결혼을 했고. 세상이 어떻게 돌아가는 건지, 참…",
    "\"하이브리스토필리아\"는 중범죄를 저지른 범죄자에게 매력을 느끼는 심리적 이상 증상을 부르는 말일세.",
    "아돌프 히틀러의 필체는 너무나 명료해. 권위주의적이며 잔인하고, 비관적이며 폭발적인 기질을 읽을 수 있지. ",
];
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
                                this.print("첫 2개의 케이스는 보유하고 있어야하며, 나머지 케이스는 타인의 케이스를 입력하셔도 됩니다.");
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
                            for (const [index, command] of commands.entries()) {
                                if (index < 2 && await CasesByKateContract_1.default.ownerOf(command) !== address) {
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
                            await CryptoCriminals77MinterContract_1.default.tryMint(key, [commands[0], commands[1]]);
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
                                        this.print("역시 신입은 어쩔 수 없군. 다시 한 번 생각해보게. 단서 속에 답이 있어.");
                                    }
                                    else {
                                        await CryptoCriminals77MinterContract_1.default.mint(address, this.cardId, [commands[0], commands[1]], key, data.signature);
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
                this.print(`\n\n[Watson] ${welcomeMessages[skyutil_1.default.random(0, welcomeMessages.length - 1)]}`);
                this.print(`[Watson] 안녕 \x1b[36;1m${this.store.get("username")}\x1b[0m, 어떤 걸 도와줄까? 뭘 해야할지 모르겠다면, \x1b[33;1m도움말\x1b[0m을 입력해.`);
                this.print("명령어를 입력하세요. 도움말 또는 명령어를 보고 싶다면 \x1b[33;1m도움말\x1b[0m을 입력하세요.");
            }
            this.prompt();
        }
    }
}
exports.default = Watson;
//# sourceMappingURL=Watson.js.map