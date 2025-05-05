import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaJA: Metadata = {
    title: "Java Spring Boot フルスタック開発 | CHORN",
    description: "Java Spring Boot フルスタック開発、堅牢でスケーラブルな企業向けアプリケーションを構築するための技術的専門知識。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Java Spring Boot 開発 | CHORN",
        description: "Java Spring Boot フルスタック開発を活用し、スケーラブルで安全、高パフォーマンスなアプリケーションを構築する技術的専門知識。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.backend.java).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot フルスタック開発 | CHORN",
        description: "Java Spring Boot フルスタック開発の技術的専門知識で、安全でスケーラブルなアプリケーションを構築。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        "Spring Boot 開発", "Java Spring Boot 技術的専門知識", "Spring Boot 開発者", "カスタム Java 開発",
        "Java Spring Boot アプリケーション", "企業向け Java 開発", "Spring Boot マイクロサービス",
        "カスタムソフトウェア開発", "スケーラブルなウェブアプリケーション", "バックエンド開発", "企業向けソフトウェアソリューション",
        "高パフォーマンスアプリケーション", "Java ウェブアプリケーション", "マイクロサービス開発", "API 開発",
        "Spring Boot 開発者 タイ", "Java 開発者 タイ", "Java 開発者 バンコク",
        "Java 開発者 チェンマイ", "バックエンド開発者 タイ", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "CHORN", "デジタルイノベーション", "企業向けソフトウェア"
    ]
}
