import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainJA: Metadata = {
    title: "バックエンドAPI開発 | CHORN",
    description: "最新の技術 (Node.js、Java Spring Boot、.NET Core、Go、Python、PHP) を活用したバックエンドAPI開発サービス。高品質でスケーラブルなアプリケーションをビジネスニーズに合わせて構築します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "バックエンドAPI開発 | CHORN",
        description: "Node.js、Java Spring Boot、.NET Core、Go、Python、PHP を活用したバックエンドAPI開発で、高品質でスケーラブルなアプリケーションを構築します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.backend.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "バックエンドAPI開発 | CHORN",
        description: "Node.js、Java Spring Boot、.NET Core、Go、Python、PHP を使用してスケーラブルなWebアプリケーションを開発します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.main).twitter.images,
    },
}