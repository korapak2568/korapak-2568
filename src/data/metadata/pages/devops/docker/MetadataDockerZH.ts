import {Metadata} from "next";
import {MetadataLinkDocker} from "@/data/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerZH: Metadata = {
    title: "Docker DevOps 服务 | CHORN",
    description: "基于 Docker 的 DevOps 技术专长，提供高效的容器化和可扩展的应用程序部署解决方案。",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps 服务 | CHORN",
        description: "利用 Docker 进行容器化和可扩展的软件部署，结合 DevOps 技术专长。",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps 服务 | CHORN",
        description: "Docker DevOps 技术专长，提供容器化和可扩展的应用程序部署方案。",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker 技术专长", "容器化", "CHORN", "DevOps", "可扩展部署",
        "定制软件开发", "云端应用", "DevOps 中国", "Docker 容器"
    ]
};
