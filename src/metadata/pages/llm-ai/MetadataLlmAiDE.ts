import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiDE: Metadata = {
    title: "LLM/AI-Integration | CHORN",
    description: "LLM/AI-Agentenentwicklungsdienste, die intelligente Lösungen zur Verbesserung der Automatisierung, Integration von Altsystemen und prädiktiven Analysen bieten.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-Integration - CHORN",
        description: "Entdecken Sie modernste LLM/AI-Agentenentwicklung, maßgeschneiderte LLM-Lösungen und AI-Workflow-Automatisierung zur Optimierung von Geschäftsprozessen.",
        images: metadataLink(LanguageCode.de, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.llmAi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-Integration - CHORN",
        description: "Nutzen Sie die Kraft der KI mit LLM/AI-Agentenentwicklung, prädiktiven Analysen und intelligenten Workflow-Automatisierungsdiensten.",
        images: metadataLink(LanguageCode.de, MetaLinks.llmAi).twitter.images,
    },
}