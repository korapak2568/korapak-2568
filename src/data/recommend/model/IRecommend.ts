import {IRecommendDetail} from "@/data/recommend/model/IRecommendDetail";

export interface IRecommend {
    title: string;
    span: string;
    description: string;
    list: IRecommendDetail[]
}