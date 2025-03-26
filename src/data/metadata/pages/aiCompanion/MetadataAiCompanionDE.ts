import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/data/metadata/pages/aiCompanion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionDE: Metadata = {
    title: "LINE-Chat mit LLM/AI-Integration",
    description: "Testen Sie den LINE-Chat, verbinden Sie sich mit LLM/AI und unterstützen Sie mehrere Sprachen.",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LINE-Chat mit LLM/AI-Integration",
        description: "Testen Sie den LINE-Chat, verbinden Sie sich mit LLM/AI und unterstützen Sie mehrere Sprachen.",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-Chat mit LLM/AI-Integration",
        description: "Testen Sie den LINE-Chat, verbinden Sie sich mit LLM/AI und unterstützen Sie mehrere Sprachen.",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}
