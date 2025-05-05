import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueFR: Metadata = {
    title: "Services de développement Vue.js | CHORN",
    description: "Spécialisé dans le développement Vue.js pour créer des applications web interactives et évolutives.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Vue.js | CHORN",
        description: "Développement Vue.js d'experts, savoir-faire technique pour créer des applications web modernes.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.frontend.vue).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de développement Vue.js | CHORN",
        description: "Améliorez vos applications web avec Vue.js grâce à l'expertise technique du développement Vue.js.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Développement Vue.js", "Expertise technique Vue.js", "Développeur Vue.js", "Développement personnalisé Vue.js", "Applications Vue.js",
        "Développement full stack Vue.js", "Applications mono-page Vue.js", "Interfaces utilisateur Vue.js", "Applications web personnalisées",
        "Développement logiciel personnalisé",
        "Applications web évolutives", "Développement frontend", "Applications web haute performance",
        "Interfaces utilisateur dynamiques", "Applications mono-page", "Développeur Vue.js",
        "Développeur Vue.js Thaïlande", "Développeur Vue.js Bangkok", "Développeur Vue.js Chiang Mai", "Développeur frontend Thaïlande",
        "Développeur web Bangkok", "Ingénieur logiciel", "Développeur logiciel Thaïlande",
        "CHORN", "Innovation numérique", "Logiciels d'entreprise"
    ]
}
