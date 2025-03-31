import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/data/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceFR: Metadata = {
    title: "Conditions d'utilisation | CHORN",
    description: "CHORN fournit les conditions d'utilisation qui régissent l'utilisation de ce site Web. En accédant ou en utilisant le site Web, vous acceptez de vous conformer à ces conditions.",
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
        title: "Conditions d'utilisation | CHORN",
        description: "CHORN fournit les conditions d'utilisation qui régissent l'utilisation de ce site Web. En accédant ou en utilisant le site Web, vous acceptez de vous conformer à ces conditions.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Conditions d'utilisation | CHORN",
        description: "CHORN fournit les conditions d'utilisation qui régissent l'utilisation de ce site Web. En accédant ou en utilisant le site Web, vous acceptez de vous conformer à ces conditions.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}