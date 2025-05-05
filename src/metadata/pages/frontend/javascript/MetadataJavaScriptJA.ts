import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptJA: Metadata = {
    title: "JavaScript | CHORN - カスタムソフトウェア開発の専門家",
    description: "業界を問わず、スケーラブルで堅牢かつ効率的なカスタムソフトウェアソリューションをJavaScriptを使用して構築します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - JavaScriptによるカスタムソフトウェア開発",
        description: "JavaScriptの専門知識を活用し、スケーラブルで高性能なアプリケーションを構築するための強力なツールです。なぜカスタムソフトウェアソリューションにJavaScriptを選んだのかを学びましょう。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.frontend.javascript).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - カスタムソフトウェアソリューションのためのJavaScript開発",
        description: "ビジネスのニーズに合わせたスケーラブルで高品質なソフトウェアソリューションを提供するためにJavaScriptを使用します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        "JavaScript開発", "JavaScriptの専門知識", "JavaScript開発者", "カスタムJavaScript開発",
        "JavaScriptウェブアプリケーション", "JavaScriptフルスタック開発", "JavaScriptフロントエンド開発",
        "カスタムソフトウェア開発",
        "スケーラブルなウェブアプリケーション", "フロントエンド開発", "バックエンド開発",
        "高性能アプリケーション", "企業向けソフトウェアソリューション", "カスタムウェブアプリケーション", "API開発",
        "JavaScript開発者 タイ", "JavaScript開発者 バンコク", "JavaScript開発者 チェンマイ",
        "フロントエンド開発者 タイ", "バックエンド開発者 タイ", "フルスタック開発者 タイ",
        "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "CHORN", "デジタルイノベーション", "企業向けソフトウェア"
    ]
}
