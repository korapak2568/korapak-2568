import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataContactNL: Metadata = {
    title: "Over CHORN | Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
    description: "Ontdek de expertise van CHORN in systeemanalyse, full-stack ontwikkeling en moderne softwareoplossingen die zakelijk succes stimuleren.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.contact).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experts in Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
        description: "Verken CHORNs toewijding aan het leveren van geavanceerde systeemmodernisering, full-stack ontwikkeling en technische ondersteuning voor bedrijven.",
        images: metadataLink(LanguageCode.nl, MetaLinks.contact).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.contact).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Toonaangevend in Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
        description: "Ontgrendel zakelijk potentieel met CHORNs geavanceerde systeemanalyse, full-stack ontwikkeling en moderne softwareoplossingen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.contact).twitter.images,
    },
}