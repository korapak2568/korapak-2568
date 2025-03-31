import {Metadata} from "next";
import {MetadataLink404} from "@/data/metadata/pages/404/common/MetadataLink404";

export const Metadata404FI: Metadata = {
    title: "404 - Sivua ei löydy",
    description: "Hups! Emme löytäneet etsimääsi sivua. Tarkista URL-osoite tai palaa kotisivullemme jatkaaksesi CHORNin tutkimista.",
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
        title: "404 - Sivua ei löydy",
        description: "Hups! Emme löytäneet etsimääsi sivua. Tarkista URL-osoite tai palaa kotisivullemme jatkaaksesi CHORNin tutkimista.",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Sivua ei löydy",
        description: "Hups! Emme löytäneet etsimääsi sivua. Tarkista URL-osoite tai palaa kotisivullemme jatkaaksesi CHORNin tutkimista.",
        images: MetadataLink404.twitter.images,
    },
}