import {IPolicyDetail} from "@/data/model/policy/IPolicyDetail";

export interface IPolicyContent {
    title: string,
    description?: string
    expand?: string,
    isDetailed?: boolean,
    details?: IPolicyDetail[]
}