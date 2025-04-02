import {Metadata} from "next";
import {IMetadataFrontEnd} from "@/metadata/model/metadata/IMetadataFrontEnd";
import {IMetadataBackEnd} from "@/metadata/model/metadata/IMetadataBackEnd";
import {IMetadataDevOps} from "@/metadata/model/metadata/IMetadataDevOps";

export interface IMetadataChorn {

    home: Metadata,
    llmAi: Metadata,

    aiCompanions: Metadata,
    aiFah: Metadata,
    aiAom: Metadata,
    aiPloy: Metadata,

    gallery: Metadata,
    contact: Metadata,

    cloudSolutions: Metadata,
    webDevelopment: Metadata,
    blockchain: Metadata,

    frontend: IMetadataFrontEnd,
    backend: IMetadataBackEnd,
    devops: IMetadataDevOps
}