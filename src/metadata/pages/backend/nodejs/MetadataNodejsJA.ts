import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsJA: Metadata = {
    title: "Node.js フルスタック開発 | CHORN",
    description: "Node.js フルスタック開発、効率的でスケーラブルなウェブアプリケーションを構築する技術的専門知識。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js 開発 | CHORN",
        description: "Node.js フルスタック開発の専門知識で効率的かつスケーラブルなウェブアプリケーションを構築。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.backend.nodejs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js フルスタック開発 | CHORN",
        description: "Node.js フルスタック開発の技術的専門知識で効率的かつスケーラブルなウェブアプリを実現。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.nodejs).twitter.images
    },
    keywords: [
        "Node.js 開発", "Node.js 技術専門知識", "Node.js 開発者", "カスタム Node.js 開発",
        "Node.js バックエンド開発", "Node.js フルスタック開発", "Node.js マイクロサービス", "カスタムソフトウェア開発",
        "スケーラブルなウェブアプリケーション", "バックエンド開発", "高パフォーマンスアプリケーション",
        "企業向け Node.js アプリケーション", "API 開発", "マイクロサービス開発", "フルスタック開発者",
        "Node.js 開発者 タイ", "Node.js 開発者 バンコク", "Node.js 開発者 チェンマイ",
        "バックエンド開発者 タイ", "フルスタック開発者 タイ", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "CHORN", "デジタルイノベーション", "企業向けソフトウェア"
    ]
}