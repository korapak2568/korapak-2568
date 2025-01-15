import {IDevOpsServiceItem} from "@/data/devops/model/IDevOpsServiceItem";

export interface IDevOpsService {
    title: string,
    descriptions: string[],
    items: IDevOpsServiceItem[]
}