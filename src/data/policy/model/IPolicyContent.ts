import {IPolicyDetail} from "@/data/policy/model/IPolicyDetail";

export interface IPolicyContent {
    title: string,
    description?: string
    expand?: string,
    isDetailed?: boolean,
    details?: IPolicyDetail[]
}