import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPhpFR: Metadata = {
    title: "Développement PHP Full Stack | CHORN",
    description: "Développement PHP Full Stack, expertise technique pour créer des applications web dynamiques et évolutives.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement PHP | CHORN",
        description: "Exploitez le développement PHP Full Stack, expertise technique pour créer des applications web évolutives et dynamiques.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement PHP Full Stack | CHORN",
        description: "Expertise en développement PHP Full Stack pour des applications web dynamiques et évolutives.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "Développement PHP", "Expertise technique PHP", "Développeur PHP", "Développement PHP personnalisé", "Applications web PHP",
        "Développement PHP Full Stack", "Applications PHP pour entreprises", "Développement de logiciels personnalisés",
        "Développement Symfony", "Développement Laravel", "Développement Yii Framework", "Développement Phalcon",
        "Développement Symfony personnalisé", "Développement Laravel personnalisé", "Développement Yii personnalisé", "Développement Phalcon personnalisé",
        "Applications web évolutives", "Développement backend", "Applications web haute performance",
        "Applications web personnalisées", "Développement API", "Logiciels d'entreprise", "Frameworks PHP",
        "Développeur PHP Thaïlande", "Développeur PHP Bangkok", "Développeur PHP Chiang Mai",
        "Développeur backend Thaïlande", "Développeur full stack Thaïlande", "Ingénieur logiciel", "Développeur logiciel Thaïlande",
        "CHORN", "Innovation numérique", "Logiciels d'entreprise"
    ]
}
