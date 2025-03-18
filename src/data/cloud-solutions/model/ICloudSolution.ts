import {ISection} from "@/data/cloud-solutions/model/ISection";

export interface ICloudSolution {
    title: string;
    descriptions: ISection[];
    sections: ISection[];
}