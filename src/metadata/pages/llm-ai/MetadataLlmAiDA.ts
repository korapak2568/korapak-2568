import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/metadata/pages/llm-ai/common/MetadataLinkLlmAi";

export const MetadataLlmAiDA: Metadata = {
    title: "LLM/AI-integration | CHORN",
    description: "LLM/AI-agentudviklingstjenester, der tilbyder intelligente løsninger til at forbedre automatisering, integration af ældre systemer og prædiktiv analyse.",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-integration - CHORN",
        description: "Udforsk avanceret LLM/AI-agentudvikling, skræddersyede LLM-løsninger og AI-arbejdsgangsautomatisering for at optimere forretningsdriften.",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-integration - CHORN",
        description: "Frigør AI's potentiale med LLM/AI-agentudvikling, prædiktiv analyse og intelligente arbejdsgangsautomatiseringstjenester.",
        images: MetadataLinkLlmAi.twitter.images,
    },
}