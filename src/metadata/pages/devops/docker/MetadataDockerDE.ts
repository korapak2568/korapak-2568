import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerDE: Metadata = {
    title: "Docker DevOps-Dienste | CHORN",
    description: "Docker-basierte DevOps-Expertise für effiziente Containerisierung und skalierbare Anwendungsbereitstellung.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps-Dienste | CHORN",
        description: "Nutzen Sie Docker für die Containerisierung und skalierbare Softwarebereitstellung mit DevOps-Expertise.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps-Dienste | CHORN",
        description: "Docker DevOps-Expertise für Containerisierung und skalierbare Anwendungsbereitstellung.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker-Expertise", "Containerisierung", "CHORN", "DevOps", "skalierbare Bereitstellung",
        "maßgeschneiderte Softwareentwicklung", "Cloud-Anwendungen", "DevOps Deutschland", "Docker-Container"
    ]
};
