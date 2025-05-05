import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataReactFR: Metadata = {
    title: "Services de développement React | CHORN",
    description: "Développement React de haut niveau avec expertise technique, créez des interfaces utilisateur dynamiques et réactives avec React.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.frontend.react).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement React | CHORN",
        description: "Améliorez vos applications web avec un développement React d'expert, une expertise technique pour des applications performantes.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.react).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.frontend.react).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de développement React | CHORN",
        description: "Développement React d'expert, expertise technique pour créer des interfaces utilisateur attrayantes avec React.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.react).twitter.images,
    },
    keywords: [
        "Développement React", "Expertise technique React", "Développeur React", "Développement React personnalisé", "Applications React.js",
        "Développement full stack React", "Applications à page unique React", "Interfaces utilisateur React", "Applications web personnalisées",
        "Développement de logiciels personnalisés",
        "Applications web évolutives", "Développement frontend", "Applications web haute performance",
        "Interfaces utilisateur dynamiques", "Applications à page unique", "Développeur React.js",
        "Développeur React France", "Développeur React Paris", "Développeur React Lyon", "Développeur frontend France",
        "Développeur web Paris", "Ingénieur logiciel", "Développeur logiciel France",
        "CHORN", "Innovation numérique", "Logiciel d'entreprise"
    ]
}
