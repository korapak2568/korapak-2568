import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiNL: Metadata = {
    title: "LLM/AI-integratie | CHORN",
    description: "LLM/AI-agentontwikkelingsdiensten die intelligente oplossingen bieden voor het verbeteren van automatisering, legacy-systeemintegratie en voorspellende analyses.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-integratie - CHORN",
        description: "Ontdek geavanceerde LLM/AI-agentontwikkeling, op maat gemaakte LLM-oplossingen en AI-workflowautomatisering om bedrijfsprocessen te optimaliseren.",
        images: metadataLink(LanguageCode.nl, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.llmAi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-integratie - CHORN",
        description: "Ontgrendel de kracht van AI met LLM/AI-agentontwikkeling, voorspellende analyses en intelligente workflowautomatiseringsdiensten.",
        images: metadataLink(LanguageCode.nl, MetaLinks.llmAi).twitter.images,
    },
}