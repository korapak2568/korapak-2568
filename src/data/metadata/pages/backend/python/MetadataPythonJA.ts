import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonJA: Metadata = {
    title: "Python フルスタック開発 | CHORN",
    description: "Python フルスタック開発、ダイナミックでスケーラブルなウェブアプリケーションを構築するための技術的専門知識。",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python 開発 | CHORN",
        description: "Python フルスタック開発の技術的専門知識を使用して、ダイナミックでスケーラブルなウェブアプリケーションを構築します。",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python フルスタック開発 | CHORN",
        description: "ダイナミックでスケーラブルなウェブアプリケーションのための Python フルスタック開発の技術的専門知識。",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "Python 開発", "Python 技術専門知識", "Python 開発者", "カスタム Python 開発", "Python ウェブアプリケーション",
        "Python バックエンド開発", "Python フルスタック開発", "カスタムソフトウェア開発",
        "スケーラブルなウェブアプリケーション", "バックエンド開発", "企業向け Python アプリケーション",
        "高パフォーマンスアプリケーション", "カスタムウェブアプリケーション", "API 開発", "機械学習開発",
        "Python 開発者 タイ", "Python 開発者 バンコク", "Python 開発者 チェンマイ",
        "バックエンド開発者 タイ", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "CHORN", "デジタルイノベーション", "企業向けソフトウェア"
    ]
}
