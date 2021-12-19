import Config from "../Config";
import CasesByKateNFTArtifact from "./abi/cbk/artifacts/contracts/CasesByKateNFT.sol/CasesByKateNFT.json";
import Contract from "./Contract";

class CasesByKateContract extends Contract {

    constructor() {
        super(Config.contracts.CasesByKate, CasesByKateNFTArtifact.abi);
    }
}

export default new CasesByKateContract();
