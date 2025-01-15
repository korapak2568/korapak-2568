import {IFullStackServiceItem} from "@/data/fullstack/model/IFullStackServiceItem";

export interface IFullStackService {
    title: string,
    descriptions: string[],
    items: IFullStackServiceItem[]
}