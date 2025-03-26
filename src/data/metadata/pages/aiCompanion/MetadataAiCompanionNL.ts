import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/data/metadata/pages/aiCompanion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionNL: Metadata = {
    title: "LINE-chat met LLM/AI-integratie",
    description: "Test LINE-chat, verbind met LLM/AI en ondersteun meerdere talen.",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LINE-chat met LLM/AI-integratie",
        description: "Test LINE-chat, verbind met LLM/AI en ondersteun meerdere talen.",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-chat met LLM/AI-integratie",
        description: "Test LINE-chat, verbind met LLM/AI en ondersteun meerdere talen.",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}