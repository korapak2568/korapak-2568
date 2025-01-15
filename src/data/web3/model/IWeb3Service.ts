import {IWeb3ServiceItem} from "@/data/web3/model/IWeb3ServiceItem";

export interface IWeb3Service {
    title: string,
    descriptions: string[],
    items: IWeb3ServiceItem[]
}