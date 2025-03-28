import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/data/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabJA: Metadata = {
    title: "GitLab DevOps サービス | CHORN",
    description: "GitLab を統合した DevOps 技術的専門知識によるバージョン管理、継続的インテグレーション、そして自動化されたワークフロー。",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps サービス | CHORN",
        description: "CI/CD とバージョン管理のための GitLab ベースの DevOps 技術的専門知識で開発ワークフローを強化。",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps サービス | CHORN",
        description: "GitLab DevOps 技術的専門知識でバージョン管理と CI/CD ワークフローを最適化。",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab 技術的専門知識", "CI/CD", "バージョン管理", "DevOps", "自動化", "DevOps パイプライン",
        "DevOps 日本", "GitLab 自動化", "継続的インテグレーション"
    ]
};
