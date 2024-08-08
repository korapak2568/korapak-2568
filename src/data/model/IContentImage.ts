import {IDetail} from "@/data/model/IDetail";
import {IFaq} from "@/data/model/IFaq";
import {IFramework} from "@/data/model/IFramework";

export interface IContentImage {
    title: string,
    description: string,
    image: string,
    readMore: string,
    link: string,
    icon: string,
    details: IDetail[],
    faq: IFaq[],
    frameworks?: IFramework[]
}