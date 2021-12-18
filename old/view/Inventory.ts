import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Help implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".inventory-view", el(".container", el("span.name", "ARVITOR"), ":사무소# 명단 1"),
            el("img", { src: "images/inventory.svg" }),
            el(".container",
                `
        ~ 보유한 케이스를 확인하려면 인벤토리 케이스
        ~ 보유한 단서를 확인하려면 인벤토리 단서
        ~ 보유한 범인 카드를 확인하려면 인벤토리 카드 를 입력하세요.
        `,
            ),
            el(".container", el("span.name", "ARVITOR"), el("span", ":사무소# 인벤토리 케이스")),
            el(".container",
                `~ < 보유한 케이스 목록 >
        ~ #9, #10
        ~ 총 2 개의 케이스를 보유하고 있습니다.`),
            el(".container", el("span.name", "ARVITOR"), el("span", ":사무소# 인벤토리 케이스 정보 9")),
            el(".container",
                `~ < CASE #9 정보 >
        ~ 50대 초반
        ~ 염산
        ~ 회색/분홍색 배색의 등산복
        ~ 하얀색/파란색 배색의 유명 브랜드 러닝화
        ~ 앞머리가 있는 갈색 파마 머리
        ~ 해골 모양으로 조각된 은색 반지
        ~ 운동선수
        ~ 거센 바람 소리
        ~ 오후 3시
        ~ 중학교 앞 건물 2층의 최신식 PC방
        ~ 밝은 갈색의 머리카락`),
            el(".container", el("span.name", "ARVITOR"), el("span", ":사무소# 인벤토리 케이스 1 분해 9")),
            el(".container",
                `~ 10 믹스를 사용하여 CASE #9을 분해합니다. 나눠진 단서를 다시 조합하여 케이스를 되찾을 수 있습니다.
        ~ 케이스 #9을 나누시겠습니까? `,
                "(", el("span.name", "Y"), "/", el("span.danger", "N"), ")"),
            el("container",
                `~ 케이스 #9이 다음 11개의 단서로 나누어 졌습니다. 
        ~ 50대 초반
        ~ 염산
        ~ 회색/분홍색 배색의 등산복
        ~ 하얀색/파란색 배색의 유명 브랜드 러닝화
        ~ 앞머리가 있는 갈색 파마 머리
        ~ 해골 모양으로 조각된 은색 반지
        ~ 운동선수
        ~ 거센 바람 소리
        ~ 오후 3시
        ~ 중학교 앞 건물 2층의 최신식 PC방
        ~ 밝은 갈색의 머리카락`
            ),
            el(".container", el("span.name", "ARVITOR"), el("span", "# 인벤토리 케이스"),
                `~ < 보유한 케이스 (1/1) >
        ~ #10
        ~ 총 1 개의 케이스를 보유하고 있습니다.`),
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}