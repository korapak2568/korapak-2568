import {Metadata} from "next";
import {MetadataLinkDocker} from "@/data/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerEN: Metadata = {
    title: "Docker DevOps Services | CHORN",
    description: "CHORN offers Docker-based DevOps technical-expertise for efficient containerization and scalable application deployment.",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps Services | CHORN",
        description: "Leverage Docker for containerization and scalable software deployment with CHORN’s expert DevOps technical-expertise.",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Services | CHORN",
        description: "Expert Docker DevOps technical-expertise from CHORN for containerization and scalable application deployment.",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker technical-expertise", "containerization", "CHORN", "DevOps", "scalable deployment",
        "custom software development", "cloud-based applications", "DevOps thailand", "docker containers"
    ]
}