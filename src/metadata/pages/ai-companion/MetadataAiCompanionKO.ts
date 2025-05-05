import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionKO: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Welcome to the AI Chat Companion, a demo of AI-powered integration. Explore AI companions with unique personalities, designed for seamless interaction via the LINE app, supporting multiple languages.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "AI Chat Companion - AI-Powered Integration",
        description: "Discover AI companions with unique personalities, interacting seamlessly via the LINE app in Thai, English, Chinese, Japanese, Korean, French, and Vietnamese.",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.aiCompanion).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Chat Companion - Explore AI-Powered Interactions",
        description: "Engage with AI companions that communicate in multiple languages via the LINE app. Discover seamless AI integration today!",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiCompanion).twitter.images,
    },
}