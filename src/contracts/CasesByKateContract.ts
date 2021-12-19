import Config from "../Config";
import CasesByKateNFTArtifact from "./abi/cbk/artifacts/contracts/CasesByKateNFT.sol/CasesByKateNFT.json";
import KIP17Contract from "./standard/KIP17Contract";

class CasesByKateContract extends KIP17Contract {

    constructor() {
        super(Config.contracts.CasesByKate, CasesByKateNFTArtifact.abi);
    }
}

export default new CasesByKateContract();
