"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Help {
    constructor() {
        this.container = (0, skynode_1.el)(".help-view", (0, skynode_1.el)(".container", (0, skynode_1.el)("span.name", "ARVITOR"), ":사무소# ", (0, skynode_1.el)("span.help", "도움말")), (0, skynode_1.el)("img", { src: "images/help.svg", height: '500px' }), (0, skynode_1.el)(".container", "~ Cases By Kate", (0, skynode_1.el)("span.help", " 도움말 "), "및 명령어 모음입니다."), (0, skynode_1.el)("div", `~ 
        ~ 1. 추리 시뮬레이션 방법
        ~
        ~ 명령어 입력을 통해 추리 시뮬레이션을 진행하실 수 있습니다.
        ~ 케이스의 특성을 분해해서 단서로 만들 수 있습니다.`), (0, skynode_1.el)(".container", "~ 특정 ", (0, skynode_1.el)("span.danger", "용의자"), "에 해당하는 단서를 모아서 제출하면, ", (0, skynode_1.el)("span.danger", "용의자"), "를 검거하여 NFT로 보상받을 수 있습니다."), (0, skynode_1.el)("div", `
        ~
~ 2. 사무소 이용 명령어
~
~ 2-1 명령어 규칙
~ (1) 하위 명령어(ㄴ 표시)일 경우, 상위 명령어를 앞에 기입해야 사용 가능합니다.
~ 예) 명단 추적 9, 인벤토리 사건 정보 113, 명단
~ 2-2 명렁어 모음
~
~ 도움말 : 명령어 및 도움말 보기
~ 이름 : 사용자 이름 지정 또는 바꾸기
~ 명단 [명단 페이지 번호] : 용의자 명단 보기
~  ㄴ 추적 [추적할 용의자 번호] : 용의자 추적하기 
~ 인벤토리 : 인벤토리 도움말 표시
~  ㄴ 사건 : 보유한 케이스들 보기, 단서로 쪼개기
~     ㄴ 정보 : 케이스 정보 조회
~     ㄴ 분해 : 쪼개기(케이스 -> 단서)
~  ㄴ 단서 : 보유한 단서들 보기, 케이스로 조합하기
~     ㄴ 정보 : 단서 정보 조회
~     ㄴ 조합 : 단서 맞추기(단서 -> 케이스)
~  ㄴ 카드 : 보유한 범인 카드 보기
~     ㄴ 정보 : 카드 정보 조회
~     ㄴ 분해 : 쪼개기(카드 -> 단서)
        `), (0, skynode_1.el)('.container', (0, skynode_1.el)("span.name", "ARVITOR"), ":사무소# 명단", `
        [Watson] 몇 페이지를 보길 원해? 
~ 페이지 [페이지 번호]로 입력해주세요. 명렁어 예 : 페이지 1
        `), (0, skynode_1.el)(".container", (0, skynode_1.el)("span.name", "ARVITOR:"), "사무소# 페이지 2"), (0, skynode_1.el)("div", "[Watson] 명단은 지금 1 페이지까지 밖에 없어.")).appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Help;
//# sourceMappingURL=Help.js.map