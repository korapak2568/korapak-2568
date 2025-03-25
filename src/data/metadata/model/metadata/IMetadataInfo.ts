import {Metadata} from "next";
import {IMetadataFrontEnd} from "@/data/metadata/model/metadata/IMetadataFrontEnd";
import {IMetadataBackEnd} from "@/data/metadata/model/metadata/IMetadataBackEnd";
import {IMetadataDevOps} from "@/data/metadata/model/metadata/IMetadataDevOps";

export interface IMetadataChorn {

    home: Metadata,
    llmAi: Metadata,

    aiCompanions: Metadata,
    aiFah: Metadata,
    aiAom: Metadata,
    aiPloy: Metadata,

    gallery: Metadata,
    about: Metadata,
    contact: Metadata,

    cloudSolutions: Metadata,
    webDevelopment: Metadata,
    blockchain: Metadata,

    frontend: IMetadataFrontEnd,
    backend: IMetadataBackEnd,
    devops: IMetadataDevOps
}