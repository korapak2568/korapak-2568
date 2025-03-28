import {Metadata} from "next";
import {MetadataLinkJenkins} from "@/data/metadata/pages/devops/jenkins/common/MetadataLinkJenkins";

export const MetadataJenkinsJA: Metadata = {
    title: "Jenkins DevOps サービス | CHORN",
    description: "Jenkins をベースにした DevOps の技術的専門知識で、ビルド、テスト、デプロイメントを自動化し、開発パイプラインを最適化します。",
    alternates: MetadataLinkJenkins.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps サービス | CHORN",
        description: "Jenkins を使用した DevOps の技術的専門知識で、継続的インテグレーションとデプロイメントを自動化します。",
        images: MetadataLinkJenkins.openGraph.images,
        url: MetadataLinkJenkins.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps サービス | CHORN",
        description: "CI/CD の自動化のため、Jenkins をベースにした CHORN の DevOps 技術的専門知識で、ソフトウェア開発ライフサイクルを強化します。",
        images: MetadataLinkJenkins.twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins 技術専門知識", "CI/CD 自動化", "DevOps", "継続的インテグレーション", "DevOps 日本",
        "Jenkins パイプライン", "自動化テスト", "ビルド自動化", "カスタムソフトウェア開発"
    ]
};
