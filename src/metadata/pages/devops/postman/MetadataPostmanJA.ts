import {Metadata} from "next";
import {MetadataLinkPostman} from "@/metadata/pages/devops/postman/common/MetadataLinkPostman";

export const MetadataPostmanJA: Metadata = {
    title: "PostmanによるAPIテストサービス | CHORN",
    description: "Postmanを使用したAPIテストの技術的専門知識を提供し、ウェブ技術の信頼性とパフォーマンスを確保します。",
    alternates: MetadataLinkPostman.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PostmanによるAPIテストサービス | CHORN",
        description: "PostmanベースのAPIテスト技術専門知識で、APIが期待通りに機能することを確認します。",
        images: MetadataLinkPostman.openGraph.images,
        url: MetadataLinkPostman.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PostmanによるAPIテストサービス | CHORN",
        description: "PostmanベースのAPIテスト技術専門知識で、ウェブ技術の信頼性とパフォーマンスを検証します。",
        images: MetadataLinkPostman.twitter.images,
    },
    keywords: [
        "Postman APIテスト", "Postman技術専門知識", "APIテスト", "DevOps", "自動化APIテスト", "CHORN",
        "ウェブ技術テスト", "APIパフォーマンス", "カスタムソフトウェア開発", "DevOps 日本"
    ]
}
