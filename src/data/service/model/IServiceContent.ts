import {IServiceDetail} from "@/data/service/model/IServiceDetail";

export interface IServiceContent {
    title: string,
    description?: string
    expand?: string,
    isDetailed?: boolean,
    details?: IServiceDetail
}