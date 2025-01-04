import {IAboutFeature} from "@/data/about/model/IAboutFeature";

export interface IAboutContent {
    title: string,
    description?: string
    expand?: string,
    isDetailed?: boolean,
    details?: IAboutFeature[]
}