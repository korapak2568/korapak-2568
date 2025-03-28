import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonFR: Metadata = {
    title: "Développement Full Stack Python | CHORN",
    description: "Développement Full Stack Python, expertise technique pour créer des applications web dynamiques et évolutives.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Python | CHORN",
        description: "Créez des applications web dynamiques et évolutives avec l'expertise technique du développement Full Stack Python.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement Full Stack Python | CHORN",
        description: "Expertise en développement Full Stack Python pour des applications web dynamiques et évolutives.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "Développement Python", "Expertise Python", "Développeur Python", "Développement Python personnalisé", "Applications web Python",
        "Développement Python backend", "Développement Full Stack Python", "Développement logiciel personnalisé",
        "Applications web évolutives", "Développement backend", "Applications Python pour entreprise",
        "Applications haute performance", "Applications web personnalisées", "Développement d'API", "Développement de machine learning",
        "Développeur Python Thaïlande", "Développeur Python Bangkok", "Développeur Python Chiang Mai",
        "Développeur backend Thaïlande", "Ingénieur logiciel", "Développeur logiciel Thaïlande",
        "CHORN", "Innovation numérique", "Logiciel d'entreprise"
    ]
}
