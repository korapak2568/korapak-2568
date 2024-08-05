import {IRecommendation} from "@/data/model/IRecommendation";

export interface IRecommendations {
    title: string;
    span: string;
    description: string;
    list: IRecommendation[]
}