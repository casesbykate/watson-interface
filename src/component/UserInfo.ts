import { DomNode, el } from "@hanul/skynode";

export default class UserInfo extends DomNode {
    constructor() {
        super('a.user-info');
        this.append(
            el(".connect-wallet",
                "~ 카이카스 로그인이 필요합니다."
            ),
            el(".wallet-address", "0xABCDEFGHIJKLMNOPQRSTUVWXYZ 로 로그인하셨습니다.")
        )
    }
}