import {IContent} from "../content/IContent";
import {IContentImage} from "@/data/model/common/IContentImage";

export interface IServiceImage {
    title: string,
    span: string,
    subTitle: string,
    description: IContent[],
    additions: IContentImage[],
    additions2: IContentImage[]
}