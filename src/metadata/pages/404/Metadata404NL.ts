import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404NL: Metadata = {
    title: "404 - Pagina niet gevonden",
    description: "Oeps! We konden de pagina die u zocht niet vinden. Controleer de URL of ga terug naar onze homepage om CHORN verder te verkennen.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.nl, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Pagina niet gevonden",
        description: "Oeps! We konden de pagina die u zocht niet vinden. Controleer de URL of ga terug naar onze homepage om CHORN verder te verkennen.",
        images: metadataLink(LanguageCode.nl, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks._404).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Pagina niet gevonden",
        description: "Oeps! We konden de pagina die u zocht niet vinden. Controleer de URL of ga terug naar onze homepage om CHORN verder te verkennen.",
        images: metadataLink(LanguageCode.nl, MetaLinks._404).twitter.images,
    },
}