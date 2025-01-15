import {IDevOpsFeature} from "@/data/devops/model/IDevOpsFeature";
import {IDevOpsFaq} from "@/data/devops/model/IDevOpsFaq";
import {IDevOpsFramework} from "@/data/devops/model/IDevOpsFramework";

export interface IWeb3Stack {
    title: string,
    description: string,
    image: string,
    alt: string,
    readMore: string,
    link: string,

    features: IDevOpsFeature[],
    faqs: IDevOpsFaq[],
    frameworks?: IDevOpsFramework[],
}