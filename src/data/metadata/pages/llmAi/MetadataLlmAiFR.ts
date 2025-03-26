import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/data/metadata/pages/llmAi/common/MetadataLinkLlmAi";

export const MetadataLlmAiFR: Metadata = {
    title: "Intégration LLM/AI | CHORN",
    description: "Services de développement d'agents LLM/AI, offrant des solutions intelligentes adaptées pour améliorer l'automatisation, l'intégration des systèmes existants et l'analyse prédictive.",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Intégration LLM/AI - CHORN",
        description: "Découvrez le développement d'agents LLM/AI de pointe, des solutions LLM personnalisées et l'automatisation des flux de travail AI pour optimiser les opérations commerciales.",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Intégration LLM/AI - CHORN",
        description: "Libérez la puissance de l'IA avec le développement d'agents LLM/AI, l'analyse prédictive et les services d'automatisation intelligente des flux de travail.",
        images: MetadataLinkLlmAi.twitter.images,
    },
}