import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/about/common/MetadataLinkAbout";

export const MetadataAboutJA: Metadata = {
    title: "CHORNについて | システム分析とフルスタックソフトウェア開発エンジニアリング",
    description: "ビジネスの成功を促進するシステム分析、フルスタック開発、最新のソフトウェアソリューションにおけるCHORNの専門知識をご覧ください。",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - システム分析とフルスタックソフトウェア開発エンジニアリングの専門家",
        description: "ビジネス向けの最先端システム近代化、フルスタック開発、技術サポートを提供するCHORNの取り組みをご覧ください。",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - システム分析とフルスタックソフトウェア開発エンジニアリングのリーディングカンパニー",
        description: "CHORNの高度なシステム分析、フルスタック開発、最新のソフトウェアソリューションでビジネスの可能性を解き放ちましょう。",
        images: MetadataLinkAbout.twitter.images,
    },
}