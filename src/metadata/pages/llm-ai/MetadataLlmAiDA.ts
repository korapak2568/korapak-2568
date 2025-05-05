import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiDA: Metadata = {
    title: "LLM/AI-integration | CHORN",
    description: "LLM/AI-agentudviklingstjenester, der tilbyder intelligente løsninger til at forbedre automatisering, integration af ældre systemer og prædiktiv analyse.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-integration - CHORN",
        description: "Udforsk avanceret LLM/AI-agentudvikling, skræddersyede LLM-løsninger og AI-arbejdsgangsautomatisering for at optimere forretningsdriften.",
        images: metadataLink(LanguageCode.da, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.llmAi).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-integration - CHORN",
        description: "Frigør AI's potentiale med LLM/AI-agentudvikling, prædiktiv analyse og intelligente arbejdsgangsautomatiseringstjenester.",
        images: metadataLink(LanguageCode.da, MetaLinks.llmAi).twitter.images,
    },
}