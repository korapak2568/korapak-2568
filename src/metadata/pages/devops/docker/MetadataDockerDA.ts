import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerDA: Metadata = {
    title: "Docker DevOps Tjenester | CHORN",
    description: "Docker-baseret DevOps teknisk ekspertise til effektiv containerisering og skalerbar applikationsimplementering.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps Tjenester | CHORN",
        description: "Udnyt Docker til containerisering og skalerbar softwareimplementering med DevOps teknisk ekspertise.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.docker).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Tjenester | CHORN",
        description: "Docker DevOps teknisk ekspertise til containerisering og skalerbar applikationsimplementering.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker teknisk ekspertise", "containerisering", "CHORN", "DevOps", "skalerbar implementering",
        "tilpasset softwareudvikling", "cloud-baserede applikationer", "DevOps Danmark", "Docker containere"
    ]
};
