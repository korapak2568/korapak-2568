import {Metadata} from "next";
import { metadataLinkCloudSolution} from "@/metadata/metadataLink/MetadataLinkCloudSolution";
import {LanguageCode} from "@/data/translate/LanguageCode";

export const MetadataCloudSolutionJA: Metadata = {
    title: "クラウドソリューションアーキテクチャとシステム分析 | CHORN | AWS、Azure、GCP、DigitalOcean",
    description: "CHORNは、AWS、Azure、GCP、DigitalOceanを対象に、クラウドソリューションアーキテクチャとシステム分析の専門知識を提供します。パフォーマンス、スケーラビリティ、コスト効率を最適化します。",
    alternates: metadataLinkCloudSolution(LanguageCode.ja).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "クラウドソリューションアーキテクチャとシステム分析 | CHORN",
        description: "CHORNの最先端クラウドソリューションアーキテクチャとシステム分析を探求し、AWS、Azure、GCP、DigitalOceanで柔軟で拡張性のあるクラウドソリューションを設計します。",
        images: metadataLinkCloudSolution(LanguageCode.ja).openGraph.images,
        url: metadataLinkCloudSolution(LanguageCode.ja).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "クラウドソリューションアーキテクチャとシステム分析 | CHORN",
        description: "AWS、Azure、GCP、DigitalOcean向けのクラウドインフラを最適化するCHORNのクラウドソリューションアーキテクチャとシステム分析サービスを活用しましょう。",
        images: metadataLinkCloudSolution(LanguageCode.ja).twitter.images,
    },
    keywords: [
        "クラウドソリューションアーキテクチャ", "システム分析", "AWSアーキテクチャ", "Azureクラウドソリューション",
        "GCPアーキテクチャ", "DigitalOceanインフラ", "クラウド最適化", "マルチクラウド戦略",
        "クラウドスケーラビリティ", "クラウドインフラ設計", "クラウドセキュリティ分析",
        "AWSクラウドコンサルティング", "Azureシステム統合", "GCPコスト最適化", "DigitalOceanソリューション",
        "クラウド移行の専門知識", "クラウド性能チューニング", "マルチクラウド統合", "クラウドネイティブアプリケーション",
        "日本のクラウドアーキテクト", "AWSアーキテクト日本", "Azureアーキテクト日本", "GCPアーキテクト日本",
        "DigitalOcean開発者日本", "システムアナリスト日本", "クラウドインフラ専門家日本",
        "CHORN", "クラウドソリューション", "デジタルイノベーション", "クラウドインフラ設計", "スケーラブルなクラウドシステム"
    ]
}