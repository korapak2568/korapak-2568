import {ILandingItem} from "@/data/ai/model/landing/ILandingItem";

export interface ILandingFeature {
    title: string,
    description: string,
    items: ILandingItem[]
}