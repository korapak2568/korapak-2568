import {ILandingFeature} from "@/data/ai/model/landing/ILandingFeature";
import {ILandingSidebarItem} from "@/data/ai/model/landing/ILandingSidebarItem";
import {ILandingImage} from "@/data/ai/model/landing/ILandingImage";
import {IAiDetail} from "@/data/ai/model/IAiDetail";

export interface IAiLanding {
    image: ILandingImage,
    features: ILandingFeature[],
    sidebars: ILandingSidebarItem[],
    relevants: IAiDetail[],
}