import {Metadata} from "next";
import {MetadataLinkDocker} from "@/data/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerDE: Metadata = {
    title: "Docker DevOps-Dienste | CHORN",
    description: "Docker-basierte DevOps-Expertise für effiziente Containerisierung und skalierbare Anwendungsbereitstellung.",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps-Dienste | CHORN",
        description: "Nutzen Sie Docker für die Containerisierung und skalierbare Softwarebereitstellung mit DevOps-Expertise.",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps-Dienste | CHORN",
        description: "Docker DevOps-Expertise für Containerisierung und skalierbare Anwendungsbereitstellung.",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker-Expertise", "Containerisierung", "CHORN", "DevOps", "skalierbare Bereitstellung",
        "maßgeschneiderte Softwareentwicklung", "Cloud-Anwendungen", "DevOps Deutschland", "Docker-Container"
    ]
};
