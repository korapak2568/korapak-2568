import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeJA: Metadata = {
    title: "Kubernetes DevOps サービス | CHORN",
    description: "Kubernetes に基づく DevOps の技術的な専門知識で、コンテナ化されたアプリケーションの展開、スケーリング、管理を自動化します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps サービス | CHORN",
        description: "Kubernetes を活用した DevOps の技術的な専門知識で、アプリケーションの自動スケーリングと管理を最適化します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.kube).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps サービス | CHORN",
        description: "Kubernetes の DevOps 専門知識を活用して、スケーラブルなコンテナ化されたアプリケーションを自動化および管理します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes 技術専門知識", "コンテナオーケストレーション", "CHORN", "DevOps",
        "スケーラブルなアプリケーション管理", "自動スケーリング", "DevOps 日本", "クラウドネイティブアプリケーション"
    ]
};
