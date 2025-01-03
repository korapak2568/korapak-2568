import {IDetail} from "@/data/model/common/IDetail";

export interface IContent {
    title: string,
    description?: string
    expand?: string,
    isDetailed?: boolean,
    details?: IDetail[]
}