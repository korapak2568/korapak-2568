import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiFahJA: Metadata = {
    title: "AIチャットコンパニオン | CHORN AI統合",
    description: "ファーはLINEアプリケーション上のAIチャット友達です。彼女は20歳のタイ風の明るく親しみやすいコンパニオンです。ワンクリックまたはQRコードをスキャンして彼女を追加し、タイの人気観光地、料理、文化の魅力を発見してください。複数の言語で会話でき、若々しいエネルギーでタイ文化を案内します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.aiFah).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "ファーに会おう - LINE上のタイAIチャット友達",
        description: "ファーに会おう、LINE上の20歳のタイAI友達で、タイの人気観光地、料理、文化体験を複数の言語でおすすめします。今すぐ追加しよう！",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiFah).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.aiFah).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "ファー - LINE上のタイ文化ガイド",
        description: "LINE上の明るく親しみやすい20歳のタイAIコンパニオン、ファーを追加して、タイの観光地、料理、文化を複数の言語で探検しましょう。",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiFah).twitter.images,
    },
}