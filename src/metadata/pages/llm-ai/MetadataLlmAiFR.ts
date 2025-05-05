import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiFR: Metadata = {
    title: "Intégration LLM/AI | CHORN",
    description: "Services de développement d'agents LLM/AI, offrant des solutions intelligentes adaptées pour améliorer l'automatisation, l'intégration des systèmes existants et l'analyse prédictive.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Intégration LLM/AI - CHORN",
        description: "Découvrez le développement d'agents LLM/AI de pointe, des solutions LLM personnalisées et l'automatisation des flux de travail AI pour optimiser les opérations commerciales.",
        images: metadataLink(LanguageCode.fr, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.llmAi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Intégration LLM/AI - CHORN",
        description: "Libérez la puissance de l'IA avec le développement d'agents LLM/AI, l'analyse prédictive et les services d'automatisation intelligente des flux de travail.",
        images: metadataLink(LanguageCode.fr, MetaLinks.llmAi).twitter.images,
    },
}