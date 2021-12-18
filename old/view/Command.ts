import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Command implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".command-view",
            el(".container", el("span.name", "ARVITOR"), ":사무소# 명단 1"),
            el("img", { src: "images/books.svg", height: "300px" }), el("div", `
~ < 용의자 명단 (1/1) > # 전부 검거 완료되면, 명단에서 사라짐
~ (1) 검은 안경 낀 사내 (1/8)
~ (2) 성가신 노숙자 (13/291)
# 생략했습니다.
~ (77) 분노 조절 장애 수트맨 (299/300) 
[Watson] 이 중에 짐작가는 사람 있어?
~ 용의자를 추적하려면, ‘명단 [명단 페이지 번호] 추적 [용의자 번호]'를 입력하세요. 명령어 예시 : 명단 1 추적 1ARVITOR:사무소# 명단 추적 1
[Watson] 무슨 말이야?
~ 잘못된 명령어입니다.
ARVITOR:사무소# 명단 1 추적 1
[Watson] '검은 안경 낀 사내' 말이야?[Watson] 그는 칠흑같은 어둠처럼 아주 까만 눈을 가졌다고 해. #[주석] 레옹 선글라스[Watson] 총은 없었는데, 이상하게 그것만 한 개 있었다더군. #[주석] 총알 1개
~ '검은 안경 낀 사내' 검거에 필요한 단서 수는 총 2 개 입니다.
~ 검거에 필요한 단서를 모두 모았다면 판단되면, 추적을 시작하세요. 추적 한번 당 10 믹스가 사용됩니다.
~ 추적을 시작하시겠습니까 ( Y / N ) : Y
[Watson] 증거가 부족해. 그 정도론 놈을 찾을 수 없어.~ 검거에 실패하였습니다. 범인을 잡기 위한 단서가 부족합니다.
ARVITOR:사무소# 명단 1
~ < 용의자 명단 (1/1) >
~ (1) 검은 안경 낀 사내 (1/8)
~ (2) 성가신 노숙자 (13/291)
# 생략했습니다.
~ (77) 분노 조절 장애 수트맨 (299/300)
[Watson] 이 중에 짐작가는 사람 있어?
~ 용의자를 추적하려면, 'list [명단 페이지 번호] trace [용의자 번호]'를 입력하세요. 명령어 예시 명단 1 추적 1
ARVITOR:사무소# 명단 1 추적 77
[Watson] '분노 조절 장애 수트맨' 말이야?
[Watson] 성격과 다르게 항상 넥타이를 한다고 해. #[주석] 파란색 넥타이와 하얀색 셔츠 1개[Watson] 몸이 근육질이야. #[주석] 운동 선수 1개
[Watson] 옷 속에 늘 총을 숨기고 있다고 하니 조심하길 바래. #[주석] 발터 PPK 1개
~ '분노 조절 장애 수트맨' 검거에 필요한 단서 수는 총 3 개 입니다.
~ 검거에 필요한 단서를 모두 모았다면 판단되면, 추적을 시작하세요. 추적 한번 당 10 믹스가 사용됩니다.
~ 추적을 시작하시겠습니까  ( Y / N ) : Y
# [검거 성공 이벤트 텍스트 출력 (생략됨)]
#. 이곳에 추후 추리/추적하는 씬을 묘사하는 텍스트 삽입이 되도록 염두해두고 개발 부탁드립니다 !
# 이 텍스트를 홀더분들에게 받아서 적을까 합니다.
~ '분노 조절 장애 수트맨' 카드를 획득 했습니다 !
~ < 용의자 명단 (1/1) > # 전부 검거 완료되면, 명단에서 사라짐
~ (1) 검은 안경 낀 사내 (1/8)
~ (2) 성가신 노숙자 (13/291)
# 생략했습니다.
~ (76) 평범하게 생긴 린다 (101/290)[Watson] 이 중에 짚히는 놈 좀 있어?
~ 용의자를 추적하려면, ‘추적 [용의자 번호]'를 입력하세요. 도움말을 보려면 도움말을 입력하세요.
ARVITOR:사무소# 

        `)
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}