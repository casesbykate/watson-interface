import Config from "../Config";
import CryptoCriminals77Artifact from "./abi/cc/artifacts/contracts/CryptoCriminals77.sol/CryptoCriminals77.json";
import Contract from "./Contract";

class CryptoCriminals77Contract extends Contract {

    constructor() {
        super(Config.contracts.CryptoCriminals77, CryptoCriminals77Artifact.abi);
    }
}

export default new CryptoCriminals77Contract();
