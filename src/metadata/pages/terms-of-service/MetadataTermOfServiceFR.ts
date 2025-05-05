import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceFR: Metadata = {
    title: "Conditions d'utilisation | CHORN",
    description: "CHORN fournit les conditions d'utilisation qui régissent l'utilisation de ce site Web. En accédant ou en utilisant le site Web, vous acceptez de vous conformer à ces conditions.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fr, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Conditions d'utilisation | CHORN",
        description: "CHORN fournit les conditions d'utilisation qui régissent l'utilisation de ce site Web. En accédant ou en utilisant le site Web, vous acceptez de vous conformer à ces conditions.",
        images: metadataLink(LanguageCode.fr, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.termOfServices).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Conditions d'utilisation | CHORN",
        description: "CHORN fournit les conditions d'utilisation qui régissent l'utilisation de ce site Web. En accédant ou en utilisant le site Web, vous acceptez de vous conformer à ces conditions.",
        images: metadataLink(LanguageCode.fr, MetaLinks.termOfServices).twitter.images,
    },
}