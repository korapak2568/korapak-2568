import {IOpenGraphImage} from "@/data/metadata/model/IOpenGraphImage";
import {IOpenGraphFrontEnd} from "@/data/metadata/model/opengraph/IOpenGraphFrontEnd";
import {IOpenGraphBackEnd} from "@/data/metadata/model/opengraph/IOpenGraphBackEnd";
import {IOpenGraphDevOps} from "@/data/metadata/model/opengraph/IOpenGraphDevOps";

export interface IOpenGraph {
    home: IOpenGraphImage,
    llmAi: IOpenGraphImage,
    aiCompanions: IOpenGraphImage,
    aiFah: IOpenGraphImage,
    aiAom: IOpenGraphImage,
    aiPloy: IOpenGraphImage,
    gallery: IOpenGraphImage,
    about: IOpenGraphImage,
    contact: IOpenGraphImage,

    cloudSolutions: IOpenGraphImage,
    webDevelopment: IOpenGraphImage,
    blockchain: IOpenGraphImage,

    frontend: IOpenGraphFrontEnd,
    backend: IOpenGraphBackEnd,
    devops: IOpenGraphDevOps
}