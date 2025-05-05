import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5FR: Metadata = {
    title: "Services de Développement HTML5 | CHORN",
    description: "Expertise en développement HTML5 pour créer des applications web interactives et réactives.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement HTML5 | CHORN",
        description: "Construisez des applications web modernes et interactives avec une expertise technique.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.frontend.html5).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de Développement HTML5 | CHORN",
        description: "Créez des applications web interactives avec l'expertise en HTML5.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "Développement HTML5", "Expertise technique HTML5", "Développeur HTML5", "Développement HTML5 sur mesure", "Conception responsive HTML5",
        "Applications web HTML5", "Développement mobile HTML5", "Applications web sur mesure", "Applications multiplateformes HTML5",
        "Développement de logiciels sur mesure",
        "Applications à une seule page", "Développement Frontend", "Développeur web", "Applications web évolutives",
        "Conception web haute performance", "Conception web responsive", "Interfaces utilisateur dynamiques",
        "Développeur HTML5 Thaïlande", "Développeur HTML5 Bangkok", "Développeur HTML5 Chiang Mai", "Développeur Frontend Thaïlande",
        "Développeur web Bangkok", "Ingénieur logiciel", "Développeur logiciel Thaïlande",
        "CHORN", "Innovation numérique", "Logiciel d'entreprise"
    ]
}
