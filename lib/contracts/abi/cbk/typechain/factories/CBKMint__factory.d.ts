import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CBKMint } from "../CBKMint";
export declare class CBKMint__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, overrides?: Overrides): Promise<CBKMint>;
    getDeployTransaction(_nft: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CBKMint;
    connect(signer: Signer): CBKMint__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CBKMint;
}
//# sourceMappingURL=CBKMint__factory.d.ts.map