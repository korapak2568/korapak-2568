import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumJA: Metadata = {
    title: "Appiumテストサービス | CHORN",
    description: "Appiumのテスト技術専門知識を活用し、複数のプラットフォームでのモバイルアプリの自動テストを行い、高品質なパフォーマンスを確保します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appiumテスト | CHORN",
        description: "Appiumの技術専門知識を活用し、包括的なクロスプラットフォームテストでモバイルアプリのテストを自動化しましょう。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.appium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appiumテストサービス | CHORN",
        description: "Appiumのテスト技術専門知識で、モバイルアプリが完璧に動作することを保証するため、徹底した自動クロスプラットフォームテストを行います。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Appiumテスト", "モバイルアプリテスト", "CHORN", "Cloud DevOps",
        "クロスプラットフォームテスト", "テスト自動化", "品質保証",
        "モバイルテスト技術専門知識", "ソフトウェアテスト", "アプリのパフォーマンス",
        "日本のテスト技術専門知識", "Appium技術専門知識", "モバイルアプリケーションテスト"
    ]
};
