import {IFeatureFeature} from "@/data/feature/model/IFeatureFeature";
import {IFeatureFaq} from "@/data/feature/model/IFeatureFaq";
import {IFeatureFramework} from "@/data/feature/model/IFeatureFramework";

export interface IFeatureStack {
    title: string,
    description: string,
    link: string,
    icon: string

    frameworks?: IFeatureFramework[],
}