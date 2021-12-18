import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import UserInfo from "../component/UserInfo";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".home-view", el(".home-container",
            el("img.watson", { src: "images/watson.svg" }), el(".logo-container", el("img.logo", { src: "images/logo.svg" }), new UserInfo(), el(".footer", "케탐정 사무소 수사 시뮬레이터 Watson v1.0 c Cases By Kate"))),
            el("div", `
        한낮인데도 셔터를 내린 가게들이 많은 어느 골목길, 당신은 낡은 붉은색 벽돌 건물의 2층으로 들어섰습니다.
        유리문을 열고 들어서자 ‘딸랑’ 하고 종소리가 들립니다. 담배꽁초로 가득한 재떨이, 연기로 자욱한 실내. 당신은 기침을 합니다. 
        당신의 기침 소리를 들은 것일까요? 책상에 앉아 있던 누군가가 고개를 들어 당신을 쳐다봅니다.
        시선을 돌리자 책상 위에 놓여진 명패가 보입니다. ‘Watson’이라고 적혀 있습니다.`),
            el(".counter", el("img.counter", { src: "images/counter.svg" })),
            el(".dialogue", "[Watson] 처음 온 것 같군. 이름이 뭐야? 이름이 없는 사람한텐 우린 수사할 거리 안줘.",
                el("div.container", el("span.name", "이름"), el("span", "을 입력하세요. 공백 없이 영문만 입력 가능합니다. ")), el(".danger", "~ 첫 작명은 무료입니다만, 이후 변경 또는 삭제에는 10믹스가 필요합니다."),
                el("div.container", el("span", "~ 이름 짓기 명령어 예 : "), el("span.name", "name Kate")),
                el("div.container", el("span", "0xABCDEFGHIJKLMNOPQRSTUVWXYZ:office# "), el("span.name", "name ARVITOR")),
                el("div.container", el("span", "[Watson] 안녕. "), el("span.name", "ARVITOR"), el("span", " 어떤 걸 도와줄까? 뭘 해야할지 모르겠다면, "), el("span.help", "도움말"), el("sapn", "을 입력해.")),
                el("div.container", el("span", "~ 명령어를 입력하세요. 도움말 또는 명령어를 보고 싶다면 "), el("span.help", "도움말"), el("sapn", "을 입력하세요.")),
                el("div.container", el("span.name", "ARVITOR"), el("span", ":사무소"), el("span.help", "#도움말"))
            ),
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}