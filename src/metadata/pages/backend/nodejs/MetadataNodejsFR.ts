import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsFR: Metadata = {
    title: "Développement Full Stack Node.js | CHORN",
    description: "Développement Full Stack avec Node.js, expertise technique pour créer des applications web efficaces et évolutives.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Node.js | CHORN",
        description: "Créez des applications web efficaces et évolutives grâce à une expertise en développement Node.js Full Stack.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement Full Stack Node.js | CHORN",
        description: "Expertise en développement Full Stack Node.js pour des applications web performantes et évolutives.",
        images: MetadataLinkNodejs.twitter.images
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