import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceNL: Metadata = {
    title: "Gebruiksvoorwaarden | CHORN",
    description: "CHORN biedt de Gebruiksvoorwaarden die het gebruik van deze website regelen. Door de website te bezoeken of te gebruiken, gaat u akkoord met deze voorwaarden.",
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
        title: "Gebruiksvoorwaarden | CHORN",
        description: "CHORN biedt de Gebruiksvoorwaarden die het gebruik van deze website regelen. Door de website te bezoeken of te gebruiken, gaat u akkoord met deze voorwaarden.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gebruiksvoorwaarden | CHORN",
        description: "CHORN biedt de Gebruiksvoorwaarden die het gebruik van deze website regelen. Door de website te bezoeken of te gebruiken, gaat u akkoord met deze voorwaarden.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}