import {IServiceItem} from "@/data/service/model/IServiceItem";
import {IServiceLink} from "@/data/service/model/IServiceLink";

export interface IService {
    title: string,
    description: string,

    services: IServiceItem[],

    demo: {
        title: string,
        description: string,
        link: IServiceLink,
        procedure: {
            title: string,
            steps: IServiceItem[],
        }
        note: IServiceItem[]
    }
}