import Config from "../Config";
import CryptoCriminals77Artifact from "./abi/cc/artifacts/contracts/CryptoCriminals77.sol/CryptoCriminals77.json";
import KIP37Contract from "./standard/KIP37Contract";

class CryptoCriminals77Contract extends KIP37Contract {

    constructor() {
        super(Config.contracts.CryptoCriminals77, CryptoCriminals77Artifact.abi);
    }
}

export default new CryptoCriminals77Contract();
