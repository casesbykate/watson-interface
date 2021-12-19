import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CryptoCriminals77Minter } from "../CryptoCriminals77Minter";
export declare class CryptoCriminals77Minter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, _cbk: string, _mix: string, _signer: string, overrides?: Overrides): Promise<CryptoCriminals77Minter>;
    getDeployTransaction(_nft: string, _cbk: string, _mix: string, _signer: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CryptoCriminals77Minter;
    connect(signer: Signer): CryptoCriminals77Minter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CryptoCriminals77Minter;
}
//# sourceMappingURL=CryptoCriminals77Minter__factory.d.ts.map