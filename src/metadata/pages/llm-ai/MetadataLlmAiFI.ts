import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/metadata/pages/llm-ai/common/MetadataLinkLlmAi";

export const MetadataLlmAiFI: Metadata = {
    title: "LLM/AI-integraatio | CHORN",
    description: "LLM/AI-agenttien kehityspalvelut, jotka tarjoavat älykkäitä ratkaisuja automaation, perinteisten järjestelmien integroinnin ja ennakoivan analytiikan parantamiseen.",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-integraatio - CHORN",
        description: "Tutustu edistyneeseen LLM/AI-agenttien kehitykseen, räätälöityihin LLM-ratkaisuihin ja AI-työnkulkujen automatisointiin liiketoimintaprosessien optimointiin.",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-integraatio - CHORN",
        description: "Hyödynnä tekoälyn voima LLM/AI-agenttien kehityksellä, ennakoivalla analytiikalla ja älykkäillä työnkulkujen automatisointipalveluilla.",
        images: MetadataLinkLlmAi.twitter.images,
    },
}