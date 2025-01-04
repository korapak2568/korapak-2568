import {IPolicyContent} from "@/data/policy/model/IPolicyContent";

export interface IPolicy {
    title: string
    subtitle: string
    description: string
    list: IPolicyContent[]
}