import {Metadata} from "next";
import {MetadataLink404} from "@/data/metadata/pages/404/common/MetadataLink404";

export const Metadata404DA: Metadata = {
    title: "404 - Siden blev ikke fundet",
    description: "Ups! Vi kunne ikke finde den side, du ledte efter. Tjek venligst URL'en eller vend tilbage til vores hjemmeside for at fortsætte med at udforske CHORN.",
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
        title: "404 - Siden blev ikke fundet",
        description: "Ups! Vi kunne ikke finde den side, du ledte efter. Tjek venligst URL'en eller vend tilbage til vores hjemmeside for at fortsætte med at udforske CHORN.",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Siden blev ikke fundet",
        description: "Ups! Vi kunne ikke finde den side, du ledte efter. Tjek venligst URL'en eller vend tilbage til vores hjemmeside for at fortsætte med at udforske CHORN.",
        images: MetadataLink404.twitter.images,
    },
}