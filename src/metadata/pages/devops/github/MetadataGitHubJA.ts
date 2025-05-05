import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubJA: Metadata = {
    title: "GitHub DevOps サービス | CHORN",
    description: "GitHub を活用したバージョン管理、継続的インテグレーション、そして自動化されたワークフローにおける DevOps の技術的な専門知識。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps サービス | CHORN",
        description: "GitHub を基盤とした DevOps の技術的な専門知識で CI/CD とバージョン管理を強化し、開発ワークフローを向上させます。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps サービス | CHORN",
        description: "GitHub の DevOps 技術専門知識で、バージョン管理と CI/CD ワークフローをスムーズに進めます。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub 技術専門知識", "バージョン管理", "CI/CD", "DevOps", "カスタムソフトウェア開発",
        "継続的インテグレーション", "DevOps 日本", "GitHub 自動化", "ソフトウェア開発ワークフロー"
    ]
};
