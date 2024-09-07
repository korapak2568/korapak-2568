import {IDetail} from "@/data/model/IDetail";

export interface IContent {
    title: string,
    description?: string
    expand?: string,
    isDetailed?: boolean,
    details?: IDetail[]
}