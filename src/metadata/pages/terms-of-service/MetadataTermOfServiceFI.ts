import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceFI: Metadata = {
    title: "Palveluehdot | CHORN",
    description: "CHORN tarjoaa palveluehdot, jotka säätelevät tämän verkkosivuston käyttöä. Käyttämällä verkkosivustoa hyväksyt nämä ehdot.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fi, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Palveluehdot | CHORN",
        description: "CHORN tarjoaa palveluehdot, jotka säätelevät tämän verkkosivuston käyttöä. Käyttämällä verkkosivustoa hyväksyt nämä ehdot.",
        images: metadataLink(LanguageCode.fi, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.termOfServices).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Palveluehdot | CHORN",
        description: "CHORN tarjoaa palveluehdot, jotka säätelevät tämän verkkosivuston käyttöä. Käyttämällä verkkosivustoa hyväksyt nämä ehdot.",
        images: metadataLink(LanguageCode.fi, MetaLinks.termOfServices).twitter.images,
    },
}