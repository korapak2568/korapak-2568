import {ICloudStack} from "@/data/cloud/model/ICloudStack";

export interface ICloud {
    title: string,
    span: string,
    subTitle: string,

    stacks: ICloudStack[],
}