import {IFrontEndServiceItem} from "@/data/frontend/model/IFrontEndServiceItem";

export interface IFrontEndService {
    title: string,
    descriptions: string[],
    items: IFrontEndServiceItem[]
}