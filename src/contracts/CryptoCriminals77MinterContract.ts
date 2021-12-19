import { BigNumberish } from "ethers";
import Config from "../Config";
import CryptoCriminals77MinterArtifact from "./abi/cc/artifacts/contracts/CryptoCriminals77Minter.sol/CryptoCriminals77Minter.json";
import Contract from "./Contract";

class CryptoCriminals77MinterContract extends Contract {

    constructor() {
        super(Config.contracts.CryptoCriminals77Minter, CryptoCriminals77MinterArtifact.abi);
    }

    public async usedCases(id: BigNumberish): Promise<boolean> {
        return await this.runMethod("usedCases", id);
    }

    public async tryMint(key: string, cases: BigNumberish[]) {
        await this.runWalletMethod("tryMint", key, cases);
    }

    public async mint(to: string, id: BigNumberish, cases: BigNumberish[], key: string, signature: string) {
        await this.runWalletMethod("mint", to, id, cases, key, signature);
    }
}

export default new CryptoCriminals77MinterContract();
