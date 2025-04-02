import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/metadata/pages/ai-companion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionJA: Metadata = {
    title: "LLM/AI統合によるLINEチャット",
    description: "LINEチャットをテストし、複数言語に対応したLLM/AIに接続します。",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI統合によるLINEチャット",
        description: "LINEチャットをテストし、複数言語に対応したLLM/AIに接続します。",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI統合によるLINEチャット",
        description: "LINEチャットをテストし、複数言語に対応したLLM/AIに接続します。",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}