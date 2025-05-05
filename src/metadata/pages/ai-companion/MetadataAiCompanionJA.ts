import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionJA: Metadata = {
    title: "LLM/AI統合によるLINEチャット",
    description: "LINEチャットをテストし、複数言語に対応したLLM/AIに接続します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI統合によるLINEチャット",
        description: "LINEチャットをテストし、複数言語に対応したLLM/AIに接続します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI統合によるLINEチャット",
        description: "LINEチャットをテストし、複数言語に対応したLLM/AIに接続します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.aiCompanion).twitter.images,
    },
}