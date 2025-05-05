import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularJA: Metadata = {
    title: "Angular開発サービス | CHORN",
    description: "Angular開発サービス。Angularを使用して、動的でスケーラブルかつ高性能なWebアプリケーションを構築します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular開発 | CHORN",
        description: "Angular開発の技術専門知識を活用し、高速でスケーラブルな動的Webアプリケーションを構築します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.frontend.angular).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular開発サービス | CHORN",
        description: "専門的なAngular開発でWebアプリケーションを向上させましょう。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "Angular開発", "Angular技術専門知識", "Angular開発者", "Angular開発 タイ",
        "Angular開発 バンコク", "Angular開発 チェンマイ", "Angular開発会社",
        "カスタムAngular開発", "カスタムソフトウェア開発", "企業向けAngularアプリケーション",
        "フロントエンド開発", "シングルページアプリケーション", "動的ユーザーインターフェース",
        "高性能アプリケーション", "スケーラブルなWebアプリケーション", "カスタムWebアプリケーション",
        "Web開発者", "フルスタック開発者", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "Angular開発者 タイ", "フロントエンド開発者 タイ", "Web開発者 バンコク",
        "Angular開発者 チェンマイ", "Angular開発者 バンコク", "Angular開発会社",
        "CHORN", "デジタルイノベーション", "エンタープライズソフトウェア",
        "AngularのレスポンシブWebデザイン", "レスポンシブWebデザイン Angular", "Angularレスポンシブデザイン"
    ]
}