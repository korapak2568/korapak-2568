import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404FI: Metadata = {
    title: "404 - Sivua ei löydy",
    description: "Hups! Emme löytäneet etsimääsi sivua. Tarkista URL-osoite tai palaa kotisivullemme jatkaaksesi CHORNin tutkimista.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fi, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Sivua ei löydy",
        description: "Hups! Emme löytäneet etsimääsi sivua. Tarkista URL-osoite tai palaa kotisivullemme jatkaaksesi CHORNin tutkimista.",
        images: metadataLink(LanguageCode.fi, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Sivua ei löydy",
        description: "Hups! Emme löytäneet etsimääsi sivua. Tarkista URL-osoite tai palaa kotisivullemme jatkaaksesi CHORNin tutkimista.",
        images: metadataLink(LanguageCode.fi, MetaLinks._404).twitter.images,
    },
}