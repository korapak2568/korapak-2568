import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/metadata/pages/llm-ai/common/MetadataLinkLlmAi";

export const MetadataLlmAiEN: Metadata = {
    title: "LLM/AI Integration | CHORN",
    description: "LLM/AI agent development services, offering intelligent solutions tailored to enhance automation, legacy system integration, and predictive analytics.",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI Integration - CHORN",
        description: "Explore cutting-edge LLM/AI agent development, custom LLM solutions, and AI workflow automation to optimize business operations.",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI Integration - CHORN",
        description: "Unlock the power of AI with LLM/AI agent development, predictive analytics, and intelligent workflow automation services.",
        images: MetadataLinkLlmAi.twitter.images,
    },
}