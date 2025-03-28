import {Metadata} from "next";
import {MetadataLinkGo} from "@/data/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataDotnetCoreJA: Metadata = {
    title: ".NET Core C# フルスタック開発 | CHORN",
    description: ".NET Core C# フルスタック開発の技術的専門知識を活用し、現代的でスケーラブルで安全なウェブアプリケーションを構築します。",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# 開発 | CHORN",
        description: ".NET Core C# フルスタック開発の技術的専門知識を活用して、安全でスケーラブルで現代的なウェブアプリケーションを構築します。",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# フルスタック開発 | CHORN",
        description: "現代的でスケーラブルなウェブアプリケーションのための .NET Core C# フルスタック開発技術の専門知識。",
        images: MetadataLinkGo.twitter.images,
    },
    keywords: [
        ".NET Core C# 開発", ".NET Core C# 技術的専門知識", ".NET Core C# 開発者", "カスタム .NET Core C# 開発",
        "企業向け .NET Core C# アプリケーション", "ASP.NET Core C# 開発", ".NET Core C# ウェブアプリケーション",
        "カスタムソフトウェア開発",

        "スケーラブルなウェブアプリケーション", "バックエンド開発", "企業向けソフトウェアソリューション", "フルスタック開発",
        "高パフォーマンスアプリケーション", "カスタムウェブアプリケーション", "API開発",

        ".NET Core C# 開発者 タイ", ".NET Core C# 開発者 バンコク", ".NET Core C# 開発者 チェンマイ",
        "バックエンド開発者 タイ", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",

        "CHORN", "デジタル革新", "企業向けソフトウェア"
    ]
}
