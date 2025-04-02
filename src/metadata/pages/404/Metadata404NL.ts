import {Metadata} from "next";
import {MetadataLink404} from "@/metadata/pages/404/common/MetadataLink404";

export const Metadata404NL: Metadata = {
    title: "404 - Pagina niet gevonden",
    description: "Oeps! We konden de pagina die u zocht niet vinden. Controleer de URL of ga terug naar onze homepage om CHORN verder te verkennen.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLink404.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Pagina niet gevonden",
        description: "Oeps! We konden de pagina die u zocht niet vinden. Controleer de URL of ga terug naar onze homepage om CHORN verder te verkennen.",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Pagina niet gevonden",
        description: "Oeps! We konden de pagina die u zocht niet vinden. Controleer de URL of ga terug naar onze homepage om CHORN verder te verkennen.",
        images: MetadataLink404.twitter.images,
    },
}