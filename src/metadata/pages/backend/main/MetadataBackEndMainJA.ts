import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainJA: Metadata = {
    title: "バックエンドAPI開発 | CHORN",
    description: "最新の技術 (Node.js、Java Spring Boot、.NET Core、Go、Python、PHP) を活用したバックエンドAPI開発サービス。高品質でスケーラブルなアプリケーションをビジネスニーズに合わせて構築します。",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "バックエンドAPI開発 | CHORN",
        description: "Node.js、Java Spring Boot、.NET Core、Go、Python、PHP を活用したバックエンドAPI開発で、高品質でスケーラブルなアプリケーションを構築します。",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "バックエンドAPI開発 | CHORN",
        description: "Node.js、Java Spring Boot、.NET Core、Go、Python、PHP を使用してスケーラブルなWebアプリケーションを開発します。",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}