import {Metadata} from "next";
import {MetadataLinkDocker} from "@/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerDA: Metadata = {
    title: "Docker DevOps Tjenester | CHORN",
    description: "Docker-baseret DevOps teknisk ekspertise til effektiv containerisering og skalerbar applikationsimplementering.",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps Tjenester | CHORN",
        description: "Udnyt Docker til containerisering og skalerbar softwareimplementering med DevOps teknisk ekspertise.",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Tjenester | CHORN",
        description: "Docker DevOps teknisk ekspertise til containerisering og skalerbar applikationsimplementering.",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker teknisk ekspertise", "containerisering", "CHORN", "DevOps", "skalerbar implementering",
        "tilpasset softwareudvikling", "cloud-baserede applikationer", "DevOps Danmark", "Docker containere"
    ]
};
