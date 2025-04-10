import {ILandingFeature} from "@/data/ai/model/ILandingFeature";
import {ILandingSidebarItem} from "@/data/ai/model/ILandingSidebarItem";
import {ILandingImage} from "@/data/ai/model/ILandingImage";
import {IAiDetail} from "@/data/ai/model/IAiDetail";
import {IImageUnit} from "@/image/model/IImageUnit";

export interface IAiLanding {
    name: string;
    category: string;
    thumbnail?: string;
    pages: {
        landing: {
            link: string;
            image: IImageUnit
        };
    },
    title: string,
    features: ILandingFeature[],
    sidebars: ILandingSidebarItem[],
    line: {
        link: string;
        button: string;
    },
    relevants: IAiDetail[],
}