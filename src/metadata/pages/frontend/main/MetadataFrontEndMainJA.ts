import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainJA: Metadata = {
    title: "フロントエンド開発サービス | CHORN",
    description: "CHORNは、Next.js、React、Angular、Vue、HTML5、CSS3などの最新フレームワークを活用した専門的なフロントエンド開発サービスを提供します。レスポンシブでスケーラブルなWebサイトを最先端技術で構築。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "フロントエンド開発サービス | CHORN",
        description: "CHORNは、Next.js、React、Angular、Vue、HTML5、CSS3を活用し、高速でレスポンシブかつスケーラブルなWebサイトを構築するフロントエンド開発サービスを提供します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.frontend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "フロントエンド開発サービス | CHORN",
        description: "CHORNのフロントエンド開発専門技術で、Next.js、React、Angular、Vue、HTML5、CSS3を活用し、レスポンシブでスケーラブルなWebサイトを構築。",
        images: metadataLink(LanguageCode.ja, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        "フロントエンド開発", "フロントエンド技術専門", "フロントエンド開発者", "カスタムフロントエンド開発",
        "ダイナミックUI", "シングルページアプリケーション", "レスポンシブWebデザイン",
        "高性能フロントエンドアプリ", "カスタムソフトウェア開発",
        "React開発", "Angular開発", "Vue.js開発", "Next.jsフロントエンド開発",
        "React.js開発", "カスタムAngularフロントエンド開発", "React.jsフロントエンドアプリ",
        "Vue.jsフロントエンド技術", "カスタムVue.js開発",
        "フロントエンド開発者日本", "ウェブ開発者日本", "ソフトウェアエンジニア日本",
        "CHORN", "デジタルイノベーション", "エンタープライズソフトウェア", "スケーラブルWebアプリケーション"
    ]
}