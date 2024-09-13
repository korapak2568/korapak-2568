import {IRecommendation} from "@/data/model/common/IRecommendation";

export interface IRecommendations {
    title: string;
    span: string;
    description: string;
    list: IRecommendation[]
}