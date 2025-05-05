import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceNL: Metadata = {
    title: "Gebruiksvoorwaarden | CHORN",
    description: "CHORN biedt de Gebruiksvoorwaarden die het gebruik van deze website regelen. Door de website te bezoeken of te gebruiken, gaat u akkoord met deze voorwaarden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.nl, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Gebruiksvoorwaarden | CHORN",
        description: "CHORN biedt de Gebruiksvoorwaarden die het gebruik van deze website regelen. Door de website te bezoeken of te gebruiken, gaat u akkoord met deze voorwaarden.",
        images: metadataLink(LanguageCode.nl, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.termOfServices).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gebruiksvoorwaarden | CHORN",
        description: "CHORN biedt de Gebruiksvoorwaarden die het gebruik van deze website regelen. Door de website te bezoeken of te gebruiken, gaat u akkoord met deze voorwaarden.",
        images: metadataLink(LanguageCode.nl, MetaLinks.termOfServices).twitter.images,
    },
}