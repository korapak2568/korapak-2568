import {IOpenGraphUnit} from "@/data/metadata/model/opengraph/IOpenGraphUnit";
import {IOpenGraphFrontEnd} from "@/data/metadata/model/opengraph/IOpenGraphFrontEnd";
import {IOpenGraphBackEnd} from "@/data/metadata/model/opengraph/IOpenGraphBackEnd";
import {IOpenGraphDevOps} from "@/data/metadata/model/opengraph/IOpenGraphDevOps";

export interface IOpenGraph {
    home: IOpenGraphUnit,
    llmAi: IOpenGraphUnit,
    aiCompanions: IOpenGraphUnit,
    aiFah: IOpenGraphUnit,
    aiAom: IOpenGraphUnit,
    aiPloy: IOpenGraphUnit,
    gallery: IOpenGraphUnit,
    about: IOpenGraphUnit,
    contact: IOpenGraphUnit,

    cloudSolutions: IOpenGraphUnit,
    webDevelopment: IOpenGraphUnit,
    blockchain: IOpenGraphUnit,

    frontend: IOpenGraphFrontEnd,
    backend: IOpenGraphBackEnd,
    devops: IOpenGraphDevOps
}