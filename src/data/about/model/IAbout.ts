import {IAboutContent} from "@/data/about/model/IAboutContent";

export interface IAbout {
    title: string,
    span: string,
    subTitle: string,

    description: IAboutContent[],
    stacks: IAboutContent[]
}