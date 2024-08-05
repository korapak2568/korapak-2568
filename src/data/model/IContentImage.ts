import {IDetail} from "@/data/model/IDetail";
import {IFaq} from "@/data/model/IFaq";

export interface IContentImage {
    title: string,
    description: string,
    image: string,
    readMore: string,
    link: string,
    details: IDetail[],
    faq: IFaq[],
    icon: string
}