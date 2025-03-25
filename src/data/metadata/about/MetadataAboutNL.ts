import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/about/common/MetadataLinkAbout";

export const MetadataAboutNL: Metadata = {
    title: "Over CHORN | Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
    description: "Ontdek de expertise van CHORN in systeemanalyse, full-stack ontwikkeling en moderne softwareoplossingen die zakelijk succes stimuleren.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experts in Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
        description: "Verken CHORNs toewijding aan het leveren van geavanceerde systeemmodernisering, full-stack ontwikkeling en technische ondersteuning voor bedrijven.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Toonaangevend in Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
        description: "Ontgrendel zakelijk potentieel met CHORNs geavanceerde systeemanalyse, full-stack ontwikkeling en moderne softwareoplossingen.",
        images: MetadataLinkAbout.twitter.images,
    },
}