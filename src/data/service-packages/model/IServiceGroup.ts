import {IServicePlan} from "@/data/service-packages/model/IServicePlan";

export interface IServiceGroup {
    name: string,
    description: string,
    plans: IServicePlan[]
}