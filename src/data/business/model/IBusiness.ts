import {IBusinessLink} from "@/data/business/model/IBusinessLink";

export interface IBusiness {
    span: string,
    title: string,
    domains: IBusinessLink[]
}