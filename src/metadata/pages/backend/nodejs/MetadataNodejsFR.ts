import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsFR: Metadata = {
    title: "Développement Full Stack Node.js | CHORN",
    description: "Développement Full Stack avec Node.js, expertise technique pour créer des applications web efficaces et évolutives.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Node.js | CHORN",
        description: "Créez des applications web efficaces et évolutives grâce à une expertise en développement Node.js Full Stack.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.backend.nodejs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement Full Stack Node.js | CHORN",
        description: "Expertise en développement Full Stack Node.js pour des applications web performantes et évolutives.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.nodejs).twitter.images
    },
    keywords: [
        "développement Node.js", "expertise technique Node.js", "développeur Node.js", "développement personnalisé Node.js",
        "développement back-end Node.js", "développement full-stack Node.js", "microservices Node.js", "développement de logiciels personnalisé",
        "applications web évolutives", "développement backend", "applications haute performance",
        "applications Node.js pour entreprises", "développement API", "développement microservices", "développeur full-stack",
        "développeur Node.js Thaïlande", "développeur Node.js Bangkok", "développeur Node.js Chiang Mai",
        "développeur back-end Thaïlande", "développeur full-stack Thaïlande", "ingénieur logiciel", "développeur logiciel Thaïlande",
        "CHORN", "innovation numérique", "logiciels pour entreprises"
    ]
}