import {IFeatureStack} from "@/data/feature/model/IFeatureStack";

export interface IFeature {
    title: string,
    span: string,
    subTitle: string,

    stacks: IFeatureStack[],
}