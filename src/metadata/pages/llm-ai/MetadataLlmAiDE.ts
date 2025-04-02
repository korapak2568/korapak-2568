import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/metadata/pages/llm-ai/common/MetadataLinkLlmAi";

export const MetadataLlmAiDE: Metadata = {
    title: "LLM/AI-Integration | CHORN",
    description: "LLM/AI-Agentenentwicklungsdienste, die intelligente Lösungen zur Verbesserung der Automatisierung, Integration von Altsystemen und prädiktiven Analysen bieten.",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-Integration - CHORN",
        description: "Entdecken Sie modernste LLM/AI-Agentenentwicklung, maßgeschneiderte LLM-Lösungen und AI-Workflow-Automatisierung zur Optimierung von Geschäftsprozessen.",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-Integration - CHORN",
        description: "Nutzen Sie die Kraft der KI mit LLM/AI-Agentenentwicklung, prädiktiven Analysen und intelligenten Workflow-Automatisierungsdiensten.",
        images: MetadataLinkLlmAi.twitter.images,
    },
}