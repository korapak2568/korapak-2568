import {Metadata} from "next";
import {MetadataLinkDocker} from "@/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerNL: Metadata = {
    title: "Docker DevOps Diensten | CHORN",
    description: "Docker-gebaseerde DevOps technische expertise voor efficiënte containerisatie en schaalbare applicatie-implementatie.",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps Diensten | CHORN",
        description: "Gebruik Docker voor containerisatie en schaalbare software-implementatie met DevOps technische expertise.",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Diensten | CHORN",
        description: "Docker DevOps technische expertise voor containerisatie en schaalbare applicatie-implementatie.",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker technische expertise", "containerisatie", "CHORN", "DevOps", "schaalbare implementatie",
        "op maat gemaakte softwareontwikkeling", "cloudgebaseerde applicaties", "DevOps Nederland", "Docker containers"
    ]
};
