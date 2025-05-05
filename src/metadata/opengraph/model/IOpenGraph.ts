import {IOpenGraphUnit} from "@/metadata/opengraph/model/IOpenGraphUnit";
import {IOpenGraphFrontEnd} from "@/metadata/opengraph/model/IOpenGraphFrontEnd";
import {IOpenGraphBackEnd} from "@/metadata/opengraph/model/IOpenGraphBackEnd";
import {IOpenGraphDevOps} from "@/metadata/opengraph/model/IOpenGraphDevOps";

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