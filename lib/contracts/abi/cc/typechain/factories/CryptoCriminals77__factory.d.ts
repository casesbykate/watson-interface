import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CryptoCriminals77 } from "../CryptoCriminals77";
export declare class CryptoCriminals77__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<CryptoCriminals77>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): CryptoCriminals77;
    connect(signer: Signer): CryptoCriminals77__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CryptoCriminals77;
}
//# sourceMappingURL=CryptoCriminals77__factory.d.ts.map