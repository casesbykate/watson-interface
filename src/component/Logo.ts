import { DomNode, el } from "@hanul/skynode";

export default class Watson extends DomNode {
    constructor() {
        super('.logo');
        this.append(
            el(".logo"
            )
        )
    }
}