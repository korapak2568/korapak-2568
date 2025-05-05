import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionFI: Metadata = {
    title: "LINE-chat LLM/AI-integraatiolla",
    description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LINE-chat LLM/AI-integraatiolla",
        description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-chat LLM/AI-integraatiolla",
        description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).twitter.images,
    },
}
