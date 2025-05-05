import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerNL: Metadata = {
    title: "Docker DevOps Diensten | CHORN",
    description: "Docker-gebaseerde DevOps technische expertise voor efficiënte containerisatie en schaalbare applicatie-implementatie.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps Diensten | CHORN",
        description: "Gebruik Docker voor containerisatie en schaalbare software-implementatie met DevOps technische expertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Diensten | CHORN",
        description: "Docker DevOps technische expertise voor containerisatie en schaalbare applicatie-implementatie.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker technische expertise", "containerisatie", "CHORN", "DevOps", "schaalbare implementatie",
        "op maat gemaakte softwareontwikkeling", "cloudgebaseerde applicaties", "DevOps Nederland", "Docker containers"
    ]
};
