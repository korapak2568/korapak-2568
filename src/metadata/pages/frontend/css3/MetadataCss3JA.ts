import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3JA: Metadata = {
    title: "CSS3開発サービス | CHORN",
    description: "CSS3開発でウェブアプリケーションを強化し、現代的で視覚的に魅力的なデザインを提供します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3開発 | CHORN",
        description: "CSS3の技術的な専門知識を活用して、スタイリッシュで反応の良いウェブデザインを作成します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3開発サービス | CHORN",
        description: "CSS3の技術的な専門知識を活用して、視覚的に優れたウェブデザインを作成します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "CSS3開発", "CSS3技術専門知識", "CSS3開発者", "カスタムCSS3開発", "レスポンシブデザインCSS3",
        "CSS3ウェブアプリケーション", "CSS3モバイル開発", "カスタムウェブアプリケーション", "クロスプラットフォームアプリCSS3",
        "カスタムソフトウェア開発",
        "ウェブ開発", "高パフォーマンスウェブデザイン", "動的なユーザーインターフェース",
        "CSS3開発者 タイ", "CSS3開発者 バンコク", "CSS3開発者 チェンマイ", "フロントエンド開発者 タイ",
        "ウェブ開発者 バンコク", "ソフトウェアエンジニア", "ソフトウェア開発者 タイ",
        "CHORN", "デジタルイノベーション", "エンタープライズソフトウェア"
    ]
}
