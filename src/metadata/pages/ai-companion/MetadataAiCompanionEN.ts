import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionEN: Metadata = {
    title: "Line Chat With LLM/AI Integration",
    description: "Test LINE chat, connect to LLM/AI with supporting multiple languages.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Line Chat With LLM/AI Integration",
        description: "Test LINE chat, connect to LLM/AI with supporting multiple languages.",
        images: metadataLink(LanguageCode.en, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.aiCompanion).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Line Chat With LLM/AI Integration",
        description: "Test LINE chat, connect to LLM/AI with supporting multiple languages.",
        images: metadataLink(LanguageCode.en, MetaLinks.aiCompanion).twitter.images,
    },
}