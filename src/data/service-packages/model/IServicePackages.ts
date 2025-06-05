import {IServiceGroup} from "@/data/service-packages/model/IServiceGroup";

export interface IServicePackages {
    name: string,
    platinum: IServiceGroup,
    gold: IServiceGroup,
    premium: IServiceGroup
}