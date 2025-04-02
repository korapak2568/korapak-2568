import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/metadata/pages/ai-companion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionEN: Metadata = {
    title: "Line Chat With LLM/AI Integration",
    description: "Test LINE chat, connect to LLM/AI with supporting multiple languages.",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Line Chat With LLM/AI Integration",
        description: "Test LINE chat, connect to LLM/AI with supporting multiple languages.",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Line Chat With LLM/AI Integration",
        description: "Test LINE chat, connect to LLM/AI with supporting multiple languages.",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}