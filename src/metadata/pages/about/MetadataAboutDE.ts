import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutDE: Metadata = {
    title: "Über CHORN | Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
    description: "Entdecken Sie CHORNs Expertise in Systemanalyse, Full-Stack-Entwicklung und modernen Softwarelösungen, die den Geschäftserfolg fördern.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.about).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experten für Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
        description: "Entdecken Sie CHORNs Engagement für die Bereitstellung modernster Systemmodernisierung, Full-Stack-Entwicklung und technischen Support für Unternehmen.",
        images: metadataLink(LanguageCode.de, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Führend in Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
        description: "Erschließen Sie Geschäftspotenzial mit CHORNs fortschrittlicher Systemanalyse, Full-Stack-Entwicklung und modernen Softwarelösungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.about).twitter.images,
    },
}
