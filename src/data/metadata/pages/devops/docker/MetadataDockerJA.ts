import {Metadata} from "next";
import {MetadataLinkDocker} from "@/data/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerJA: Metadata = {
    title: "Docker DevOps サービス | CHORN",
    description: "Docker ベースの DevOps 技術専門知識を活用し、効率的なコンテナ化とスケーラブルなアプリケーションのデプロイを実現。",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps サービス | CHORN",
        description: "Docker を活用したコンテナ化とスケーラブルなソフトウェアのデプロイを DevOps 技術専門知識で支援。",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps サービス | CHORN",
        description: "Docker DevOps 技術専門知識を活用し、コンテナ化とスケーラブルなアプリケーションのデプロイを実現。",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker 技術専門知識", "コンテナ化", "CHORN", "DevOps", "スケーラブルなデプロイ",
        "カスタムソフトウェア開発", "クラウドアプリケーション", "DevOps 日本", "Docker コンテナ"
    ]
};
