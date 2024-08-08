import {IContent} from "./IContent";
import {IContentImage} from "@/data/model/IContentImage";
import {IFramework} from "@/data/model/IFramework";

export interface IServiceImage {
    title: string,
    span: string,
    subTitle: string,
    description: IContent[],
    additions: IContentImage[]
}