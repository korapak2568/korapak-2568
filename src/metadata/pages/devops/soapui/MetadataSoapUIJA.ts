import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIJA: Metadata = {
    title: "SoapUIテストサービス | CHORN",
    description: "SoapUIテストの専門知識を活かし、APIとウェブ技術の完全なテストと信頼性を確保します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUIテスト | CHORN",
        description: "テスト技術の専門知識を活かし、APIとウェブ技術の信頼性を確保します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.soapui).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUIテストサービス | CHORN",
        description: "SoapUIの専門技術を活用し、包括的で信頼性の高いウェブサービスのテストを最適化します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUIテスト", "APIテスト", "CHORN", "Cloud DevOps",
        "ウェブサービステスト", "信頼性の高いテスト", "テスト自動化",
        "品質保証", "ソフトウェアテスト", "APIの信頼性",
        "日本のテスト技術専門知識", "SoapUI専門技術", "ウェブアプリケーションテスト"
    ]
}