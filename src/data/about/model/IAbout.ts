import {IAboutContent} from "@/data/about/model/IAboutContent";
import {IAboutRole} from "@/data/about/model/IAboutRole";

export interface IAbout {
    title: string,
    span: string,
    subTitle: string,

    description: IAboutContent[],
    stacks: IAboutContent[],

    contact: {
        title: string,
        description: string,
        roles: IAboutRole[],
    }
}