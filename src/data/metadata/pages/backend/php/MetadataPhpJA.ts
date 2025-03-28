import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPhpJA: Metadata = {
    title: "PHPフルスタック開発 | CHORN",
    description: "PHPフルスタック開発、ダイナミックでスケーラブルなウェブアプリケーションを作成するための技術的専門知識。",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP開発 | CHORN",
        description: "PHPフルスタック開発を活用し、スケーラブルでダイナミックなウェブアプリケーションを作成するための技術的専門知識。",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHPフルスタック開発 | CHORN",
        description: "PHPフルスタック開発の専門知識を活用し、ダイナミックでスケーラブルなウェブアプリケーションを作成します。",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "PHP開発", "PHP技術専門知識", "PHP開発者", "カスタムPHP開発", "PHPウェブアプリケーション",
        "PHPフルスタック開発", "エンタープライズPHPアプリケーション", "カスタムソフトウェア開発",
        "Symfony開発", "Laravel開発", "Yiiフレームワーク開発", "Phalcon開発",
        "カスタムSymfony開発", "カスタムLaravel開発", "カスタムYii開発", "カスタムPhalcon開発",
        "スケーラブルなウェブアプリケーション", "バックエンド開発", "ハイパフォーマンスなウェブアプリケーション",
        "カスタムウェブアプリケーション", "API開発", "エンタープライズソフトウェア", "PHPフレームワーク",
        "PHP開発者 タイ", "PHP開発者 バンコク", "PHP開発者 チェンマイ",
        "バックエンド開発者 タイ", "フルスタック開発者 タイ", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "CHORN", "デジタルイノベーション", "エンタープライズソフトウェア"
    ]
}
