import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {IFullStackService} from "@/data/fullstack/model/IFullStackService";

export interface IFullStack {
    title: string,
    span: string,
    subTitle: string,

    dotnetcore: IFullStackStack,
    go: IFullStackStack,
    java: IFullStackStack,
    nodejs: IFullStackStack,
    php: IFullStackStack,
    python: IFullStackStack,

    stacks: IFullStackStack[],

    services: IFullStackService
}