import {ILandingFeature} from "@/data/ai/landing/model/ILandingFeature";
import {ILandingSidebarItem} from "@/data/ai/landing/model/ILandingSidebarItem";
import {ILandingImage} from "@/data/ai/landing/model/ILandingImage";
import {IAiDetail} from "@/data/ai/landing/model/IAiDetail";
import {IImageDetail} from "@/data/image/model/IImageDetail";

export interface IAiLanding {
    name: string;
    category: string;
    thumbnail: string;
    pages: {
        home: {
            link: string;
            image: IImageDetail,
        },
        landing: {
            link: string;
            image: IImageDetail
        };
    },
    title: string,
    image: ILandingImage,
    features: ILandingFeature[],
    sidebars: ILandingSidebarItem[],
    line: {
        link: string;
        button: string;
    },
    relevants: IAiDetail[],
}