import { BigNumberish } from "ethers";
import Contract from "./Contract";
declare class CryptoCriminals77MinterContract extends Contract {
    constructor();
    usedCases(id: BigNumberish): Promise<boolean>;
    tryMint(key: string, cases: BigNumberish[]): Promise<void>;
    mint(to: string, id: BigNumberish, cases: BigNumberish[], key: string, signature: string): Promise<void>;
}
declare const _default: CryptoCriminals77MinterContract;
export default _default;
//# sourceMappingURL=CryptoCriminals77MinterContract.d.ts.map