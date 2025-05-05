import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueJA: Metadata = {
    title: "Vue.js 開発サービス | CHORN",
    description: "インタラクティブでスケーラブルなウェブアプリケーションを作成するための Vue.js 開発を専門としています。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js 開発 | CHORN",
        description: "Vue.js 開発の専門技術を活用して、モダンなウェブアプリケーションを作成します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.frontend.vue).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js 開発サービス | CHORN",
        description: "Vue.js 開発の専門技術で、ウェブアプリケーションを強化します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Vue.js 開発", "Vue.js 専門技術", "Vue.js 開発者", "カスタム Vue.js 開発", "Vue.js アプリケーション",
        "Vue.js フルスタック開発", "Vue.js シングルページアプリケーション", "Vue.js ユーザーインターフェース", "カスタムウェブアプリケーション",
        "カスタムソフトウェア開発",
        "スケーラブルなウェブアプリケーション", "フロントエンド開発", "高パフォーマンスウェブアプリケーション",
        "動的なユーザーインターフェース", "シングルページアプリケーション", "Vue.js 開発者",
        "Vue.js 開発者 タイ", "Vue.js 開発者 バンコク", "Vue.js 開発者 チェンマイ", "フロントエンド開発者 タイ",
        "ウェブ開発者 バンコク", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "CHORN", "デジタル革新", "企業向けソフトウェア"
    ]
}
