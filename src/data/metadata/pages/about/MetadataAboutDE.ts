import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataAboutDE: Metadata = {
    title: "Über CHORN | Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
    description: "Entdecken Sie CHORNs Expertise in Systemanalyse, Full-Stack-Entwicklung und modernen Softwarelösungen, die den Geschäftserfolg fördern.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experten für Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
        description: "Entdecken Sie CHORNs Engagement für die Bereitstellung modernster Systemmodernisierung, Full-Stack-Entwicklung und technischen Support für Unternehmen.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Führend in Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
        description: "Erschließen Sie Geschäftspotenzial mit CHORNs fortschrittlicher Systemanalyse, Full-Stack-Entwicklung und modernen Softwarelösungen.",
        images: MetadataLinkAbout.twitter.images,
    },
}
