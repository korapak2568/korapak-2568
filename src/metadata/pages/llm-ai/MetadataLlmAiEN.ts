import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiEN: Metadata = {
    title: "LLM/AI Integration | CHORN",
    description: "LLM/AI agent development services, offering intelligent solutions tailored to enhance automation, legacy system integration, and predictive analytics.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI Integration - CHORN",
        description: "Explore cutting-edge LLM/AI agent development, custom LLM solutions, and AI workflow automation to optimize business operations.",
        images: metadataLink(LanguageCode.en, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.llmAi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI Integration - CHORN",
        description: "Unlock the power of AI with LLM/AI agent development, predictive analytics, and intelligent workflow automation services.",
        images: metadataLink(LanguageCode.en, MetaLinks.llmAi).twitter.images,
    },
}