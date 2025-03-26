import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/data/metadata/pages/aiCompanion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionFI: Metadata = {
    title: "LINE-chat LLM/AI-integraatiolla",
    description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LINE-chat LLM/AI-integraatiolla",
        description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-chat LLM/AI-integraatiolla",
        description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}
