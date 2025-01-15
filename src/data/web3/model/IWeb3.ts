import {IWeb3Service} from "@/data/web3/model/IWeb3Service";

export interface IWeb3 {
    title: string,
    span: string,
    subTitle: string,

    services: IWeb3Service
}