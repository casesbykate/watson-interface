import Config from "../Config";
import CryptoCriminals77MinterArtifact from "./abi/cc/artifacts/contracts/CryptoCriminals77Minter.sol/CryptoCriminals77Minter.json";
import Contract from "./Contract";

class CryptoCriminals77MinterContract extends Contract {

    constructor() {
        super(Config.contracts.CryptoCriminals77Minter, CryptoCriminals77MinterArtifact.abi);
    }
}

export default new CryptoCriminals77MinterContract();
