import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/data/metadata/pages/aiCompanion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionDA: Metadata = {
    title: "LINE-chat med LLM/AI-integration",
    description: "Test LINE-chat, forbind til LLM/AI med understøttelse af flere sprog.",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LINE-chat med LLM/AI-integration",
        description: "Test LINE-chat, forbind til LLM/AI med understøttelse af flere sprog.",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-chat med LLM/AI-integration",
        description: "Test LINE-chat, forbind til LLM/AI med understøttelse af flere sprog.",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}