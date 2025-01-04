import {IFullStackFeature} from "@/data/fullstack/model/IFullStackFeature";
import {IFullStackFaq} from "@/data/fullstack/model/IFullStackFaq";
import {IFullStackFramework} from "@/data/fullstack/model/IFullStackFramework";

export interface IFullStackStack {
    title: string,
    description: string,
    image: string,
    alt: string,
    readMore: string,
    link: string,

    features: IFullStackFeature[],
    faqs: IFullStackFaq[],
    frameworks?: IFullStackFramework[],
}