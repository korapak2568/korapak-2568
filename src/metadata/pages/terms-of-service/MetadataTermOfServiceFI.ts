import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceFI: Metadata = {
    title: "Palveluehdot | CHORN",
    description: "CHORN tarjoaa palveluehdot, jotka säätelevät tämän verkkosivuston käyttöä. Käyttämällä verkkosivustoa hyväksyt nämä ehdot.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkTermOfService.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Palveluehdot | CHORN",
        description: "CHORN tarjoaa palveluehdot, jotka säätelevät tämän verkkosivuston käyttöä. Käyttämällä verkkosivustoa hyväksyt nämä ehdot.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Palveluehdot | CHORN",
        description: "CHORN tarjoaa palveluehdot, jotka säätelevät tämän verkkosivuston käyttöä. Käyttämällä verkkosivustoa hyväksyt nämä ehdot.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}