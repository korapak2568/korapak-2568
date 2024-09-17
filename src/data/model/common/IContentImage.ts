import {IDetail} from "@/data/model/common/IDetail";
import {IFaq} from "@/data/model/common/IFaq";
import {IFramework} from "@/data/model/common/IFramework";

export interface IContentImage {
    title: string,
    description: string,
    image: string,
    alt: string,
    readMore: string,
    link: string,
    icon: string,
    details: IDetail[],
    faq: IFaq[],
    frameworks?: IFramework[]
}