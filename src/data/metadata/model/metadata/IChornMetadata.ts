import {Metadata} from "next";
import {IFrontEndMetadata} from "@/data/metadata/model/metadata/IFrontEndMetadata";
import {IBackEndMetadata} from "@/data/metadata/model/metadata/IBackEndMetadata";
import {IDevOpsMetadata} from "@/data/metadata/model/metadata/IDevOpsMetadata";

export interface IChornMetadata {

    home: Metadata,
    llmAi: Metadata,
    aiCompanions: Metadata,
    gallery: Metadata,
    about: Metadata,
    contact: Metadata,

    cloudSolutions: Metadata,
    webDevelopment: Metadata,
    blockchain: Metadata,

    frontend: IFrontEndMetadata,
    backend: IBackEndMetadata,
    devops: IDevOpsMetadata
}