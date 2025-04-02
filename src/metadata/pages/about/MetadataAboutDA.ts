import {Metadata} from "next";
import {MetadataLinkAbout} from "@/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataAboutDA: Metadata = {
    title: "Om CHORN | Systemanalyse & Full-Stack Softwareudviklingsteknik",
    description: "Opdag CHORNs ekspertise inden for systemanalyse, full-stack udvikling og moderne softwareløsninger, der driver forretningssucces.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Eksperter i Systemanalyse & Full-Stack Softwareudviklingsteknik",
        description: "Udforsk CHORNs engagement i at levere topmoderne systemmodernisering, full-stack udvikling og teknisk support til virksomheder.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Førende inden for Systemanalyse & Full-Stack Softwareudviklingsteknik",
        description: "Frigør forretningspotentiale med CHORNs avancerede systemanalyse, full-stack udvikling og moderne softwareløsninger.",
        images: MetadataLinkAbout.twitter.images,
    },
}