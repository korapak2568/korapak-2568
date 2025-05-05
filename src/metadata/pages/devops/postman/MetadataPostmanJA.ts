import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanJA: Metadata = {
    title: "PostmanによるAPIテストサービス | CHORN",
    description: "Postmanを使用したAPIテストの技術的専門知識を提供し、ウェブ技術の信頼性とパフォーマンスを確保します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PostmanによるAPIテストサービス | CHORN",
        description: "PostmanベースのAPIテスト技術専門知識で、APIが期待通りに機能することを確認します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.postman).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PostmanによるAPIテストサービス | CHORN",
        description: "PostmanベースのAPIテスト技術専門知識で、ウェブ技術の信頼性とパフォーマンスを検証します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Postman APIテスト", "Postman技術専門知識", "APIテスト", "DevOps", "自動化APIテスト", "CHORN",
        "ウェブ技術テスト", "APIパフォーマンス", "カスタムソフトウェア開発", "DevOps 日本"
    ]
}
