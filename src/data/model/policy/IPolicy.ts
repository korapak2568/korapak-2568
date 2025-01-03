import {IPolicyContent} from "@/data/model/policy/IPolicyContent";

export interface IPolicy {
    title: string
    subtitle: string
    description: string
    list: IPolicyContent[]
}