import {ILandingFeature} from "@/data/ai/model/landing/ILandingFeature";
import {ILandingSidebarItem} from "@/data/ai/model/landing/ILandingSidebarItem";
import {ILandingImage} from "@/data/ai/model/landing/ILandingImage";

export interface IAiLanding {
    image: ILandingImage,
    features: ILandingFeature[],
    sidebars: ILandingSidebarItem[]
}