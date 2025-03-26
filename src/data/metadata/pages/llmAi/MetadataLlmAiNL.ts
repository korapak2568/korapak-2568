import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/data/metadata/pages/llmAi/common/MetadataLinkLlmAi";

export const MetadataLlmAiNL: Metadata = {
    title: "LLM/AI-integratie | CHORN",
    description: "LLM/AI-agentontwikkelingsdiensten die intelligente oplossingen bieden voor het verbeteren van automatisering, legacy-systeemintegratie en voorspellende analyses.",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-integratie - CHORN",
        description: "Ontdek geavanceerde LLM/AI-agentontwikkeling, op maat gemaakte LLM-oplossingen en AI-workflowautomatisering om bedrijfsprocessen te optimaliseren.",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-integratie - CHORN",
        description: "Ontgrendel de kracht van AI met LLM/AI-agentontwikkeling, voorspellende analyses en intelligente workflowautomatiseringsdiensten.",
        images: MetadataLinkLlmAi.twitter.images,
    },
}