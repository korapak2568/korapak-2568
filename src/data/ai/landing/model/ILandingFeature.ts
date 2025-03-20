import {ILandingItem} from "@/data/ai/landing/model/ILandingItem";

export interface ILandingFeature {
    title: string,
    description: string,
    items: ILandingItem[]
}