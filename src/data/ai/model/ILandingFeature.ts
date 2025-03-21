import {ILandingItem} from "@/data/ai/model/ILandingItem";

export interface ILandingFeature {
    title: string,
    description: string,
    items: ILandingItem[]
}