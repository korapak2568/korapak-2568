import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNextjsJA: Metadata = {
    title: "Next.js開発サービス | CHORN",
    description: "Next.js開発の専門技術で、高性能でスケーラブルなWebアプリケーションを構築します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.frontend.nextjs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js開発 | CHORN",
        description: "Next.js開発の技術専門知識で、高速でスケーラブルなWebアプリケーションを作成します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.nextjs).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.frontend.nextjs).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js開発サービス | CHORN",
        description: "Next.js開発の専門技術でWebアプリケーションを強化します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.nextjs).twitter.images,
    },
    keywords: [
        "Next.js開発", "Next.js技術専門知識", "Next.js開発者", "カスタムNext.js開発", "サーバーサイドレンダリング",
        "Next.jsフルスタック開発", "Next.js SEO最適化", "Next.jsアプリケーション", "カスタムWebアプリ開発",
        "スケーラブルなWebアプリケーション", "フロントエンド開発", "高性能Webアプリケーション",
        "シングルページアプリケーション", "ダイナミックユーザーインターフェース", "フルスタック開発者", "カスタムソフトウェア開発",
        "Next.js開発者 日本", "Next.js開発者 東京", "Next.js開発者 大阪", "フロントエンド開発者 日本",
        "Web開発者 東京", "ソフトウェアエンジニア", "ソフトウェア開発者 日本",
        "CHORN", "デジタルイノベーション", "エンタープライズソフトウェア"
    ]
}
