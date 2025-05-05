import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceDE: Metadata = {
    title: "Nutzungsbedingungen | CHORN",
    description: "CHORN stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.de, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Nutzungsbedingungen | CHORN",
        description: "CHORN stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
        images: metadataLink(LanguageCode.de, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.termOfServices).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nutzungsbedingungen | CHORN",
        description: "CHORN stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
        images: metadataLink(LanguageCode.de, MetaLinks.termOfServices).twitter.images,
    },
}