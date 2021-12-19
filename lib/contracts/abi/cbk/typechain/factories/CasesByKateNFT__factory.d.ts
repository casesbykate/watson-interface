import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CasesByKateNFT } from "../CasesByKateNFT";
export declare class CasesByKateNFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<CasesByKateNFT>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): CasesByKateNFT;
    connect(signer: Signer): CasesByKateNFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CasesByKateNFT;
}
//# sourceMappingURL=CasesByKateNFT__factory.d.ts.map