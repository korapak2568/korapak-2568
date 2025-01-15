import {IServiceItem} from "@/data/service/model/IServiceItem";

export interface IService {
    title: string,
    description: string,

    services: IServiceItem[]
}