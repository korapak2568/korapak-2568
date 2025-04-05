import {ISection} from "@/data/cloud-solutions/model/ISection";
import {IMigrationProcess} from "@/data/cloud-solutions/model/IMigrationProcess";

export interface ICloudSolution {
    title: string;
    descriptions: ISection[];
    benefits: string[],
    sections: ISection[];
    migrationProcess: IMigrationProcess[];
}