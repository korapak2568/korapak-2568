import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404DA: Metadata = {
    title: "404 - Siden blev ikke fundet",
    description: "Ups! Vi kunne ikke finde den side, du ledte efter. Tjek venligst URL'en eller vend tilbage til vores hjemmeside for at fortsætte med at udforske CHORN.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.da, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Siden blev ikke fundet",
        description: "Ups! Vi kunne ikke finde den side, du ledte efter. Tjek venligst URL'en eller vend tilbage til vores hjemmeside for at fortsætte med at udforske CHORN.",
        images: metadataLink(LanguageCode.da, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Siden blev ikke fundet",
        description: "Ups! Vi kunne ikke finde den side, du ledte efter. Tjek venligst URL'en eller vend tilbage til vores hjemmeside for at fortsætte med at udforske CHORN.",
        images: metadataLink(LanguageCode.da, MetaLinks._404).twitter.images,
    },
}