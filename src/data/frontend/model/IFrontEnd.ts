import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";

export interface IFrontEnd {
    title: string,
    span: string,
    subTitle: string,

    angular: IFrontEndStack,
    css3: IFrontEndStack,
    html5: IFrontEndStack,
    nextjs: IFrontEndStack,
    react: IFrontEndStack,
    typescript: IFrontEndStack,
    vue: IFrontEndStack,
    javascript: IFrontEndStack,

    stacks: IFrontEndStack[],
}