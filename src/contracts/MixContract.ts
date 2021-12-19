import Config from "../Config";
import MixArtifact from "./abi/mix/artifacts/contracts/Mix.sol/Mix.json";
import KIP7Contract from "./standard/KIP7Contract";

class MixContract extends KIP7Contract {

    constructor() {
        super(Config.contracts.Mix, MixArtifact.abi);
    }
}

export default new MixContract();
