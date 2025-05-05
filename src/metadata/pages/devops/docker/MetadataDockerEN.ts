import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerEN: Metadata = {
    title: "Docker DevOps Services | CHORN",
    description: "Docker-based DevOps technical expertise for efficient containerization and scalable application deployment.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps Services | CHORN",
        description: "Leverage Docker for containerization and scalable software deployment with DevOps technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Services | CHORN",
        description: "Docker DevOps technical expertise for containerization and scalable application deployment.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker technical expertise", "containerization", "CHORN", "DevOps", "scalable deployment",
        "custom software development", "cloud-based applications", "DevOps thailand", "docker containers"
    ]
}