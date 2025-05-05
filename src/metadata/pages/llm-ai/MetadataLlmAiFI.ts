import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiFI: Metadata = {
    title: "LLM/AI-integraatio | CHORN",
    description: "LLM/AI-agenttien kehityspalvelut, jotka tarjoavat älykkäitä ratkaisuja automaation, perinteisten järjestelmien integroinnin ja ennakoivan analytiikan parantamiseen.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI-integraatio - CHORN",
        description: "Tutustu edistyneeseen LLM/AI-agenttien kehitykseen, räätälöityihin LLM-ratkaisuihin ja AI-työnkulkujen automatisointiin liiketoimintaprosessien optimointiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.llmAi).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-integraatio - CHORN",
        description: "Hyödynnä tekoälyn voima LLM/AI-agenttien kehityksellä, ennakoivalla analytiikalla ja älykkäillä työnkulkujen automatisointipalveluilla.",
        images: metadataLink(LanguageCode.fi, MetaLinks.llmAi).twitter.images,
    },
}