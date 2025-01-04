import {IFrontEndFeature} from "@/data/frontend/model/IFrontEndFeature";
import {IFrontEndFaq} from "@/data/frontend/model/IFrontEndFaq";
import {IFrontEndFramework} from "@/data/frontend/model/IFrontEndFramework";

export interface IFrontEndStack {
    title: string,
    description: string,
    image: string,
    alt: string,
    readMore: string,
    link: string,

    features: IFrontEndFeature[],
    faqs: IFrontEndFaq[],
    frameworks?: IFrontEndFramework[],
}