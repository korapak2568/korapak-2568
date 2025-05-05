import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueDA: Metadata = {
    title: "Vue.js Udviklingstjenester | CHORN",
    description: "Specialiseret i Vue.js-udvikling for at skabe interaktive og skalerbare webapplikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js Udvikling | CHORN",
        description: "Ekspertise i Vue.js-udvikling, teknisk viden til at bygge moderne webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.vue).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js Udviklingstjenester | CHORN",
        description: "Forbedr dine webapplikationer med Vue.js-udviklingsekspertise.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Vue.js udvikling", "Vue.js teknisk ekspertise", "Vue.js udvikler", "tilpasset Vue.js udvikling", "Vue.js applikationer",
        "Vue.js full stack udvikling", "Vue.js single-page applikationer", "Vue.js brugergrænseflader", "tilpassede webapplikationer",
        "tilpasset softwareudvikling",
        "skalerbare webapplikationer", "frontend udvikling", "højtydende webapplikationer",
        "dynamiske brugergrænseflader", "single-page applikationer", "Vue.js udvikler",
        "Vue.js udvikler Thailand", "Vue.js udvikler Bangkok", "Vue.js udvikler Chiang Mai", "frontend udvikler Thailand",
        "webudvikler Bangkok", "softwareingeniør", "softwareudvikler Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
