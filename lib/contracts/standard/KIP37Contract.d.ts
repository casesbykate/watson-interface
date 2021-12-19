import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import Contract from "../Contract";
export default abstract class KIP37Contract extends Contract {
    constructor(address: string, abi: ContractInterface);
    getTotalSupply(id: BigNumberish): Promise<BigNumber>;
    balanceOf(owner: string, id: BigNumberish): Promise<BigNumber>;
    balanceOfBatch(owners: string[], ids: BigNumberish[]): Promise<BigNumber[]>;
}
//# sourceMappingURL=KIP37Contract.d.ts.map