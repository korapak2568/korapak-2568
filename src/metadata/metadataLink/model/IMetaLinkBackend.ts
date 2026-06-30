import {IMetaLink} from "@/metadata/metadataLink/model/IMetaLink";

export interface IMetaLinkBackend {
    main: IMetaLink,
    go: IMetaLink,
    java: IMetaLink,
    nodejs: IMetaLink,
    php: IMetaLink,
    python: IMetaLink
}