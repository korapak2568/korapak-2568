import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/metadata/pages/ai-companion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionFR: Metadata = {
    title: "Chat LINE avec Intégration LLM/AI",
    description: "Testez le chat LINE, connectez-vous au LLM/AI avec prise en charge de plusieurs langues.",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Chat LINE avec Intégration LLM/AI",
        description: "Testez le chat LINE, connectez-vous au LLM/AI avec prise en charge de plusieurs langues.",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chat LINE avec Intégration LLM/AI",
        description: "Testez le chat LINE, connectez-vous au LLM/AI avec prise en charge de plusieurs langues.",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}