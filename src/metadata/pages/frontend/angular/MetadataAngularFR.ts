import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularFR: Metadata = {
    title: "Services de développement Angular | CHORN",
    description: "Service de développement Angular, créez des applications web dynamiques, évolutives et performantes avec Angular.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Angular | CHORN",
        description: "Développement Angular avec une expertise technique pour créer des applications web rapides, évolutives et dynamiques.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.frontend.angular).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de développement Angular | CHORN",
        description: "Améliorez vos applications web avec un développement Angular expert.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "développement Angular", "expertise technique Angular", "développeur Angular", "développement Angular Thaïlande",
        "développement Angular Bangkok", "développement Angular Chiang Mai", "entreprise de développement Angular",
        "développement Angular personnalisé", "développement de logiciels personnalisés", "applications Angular pour entreprises",
        "développement frontend", "applications à page unique", "interfaces utilisateur dynamiques",
        "applications haute performance", "applications web évolutives", "applications web personnalisées",
        "développeur web", "développeur full stack", "ingénieur logiciel", "développeur de logiciels en Thaïlande",
        "développeur Angular Thaïlande", "développeur frontend Thaïlande", "développeur web Bangkok",
        "développeur Angular Chiang Mai", "développeur Angular Bangkok", "entreprise de développement Angular",
        "CHORN", "innovation numérique", "logiciel d'entreprise",
        "conception web responsive avec Angular", "design web responsive Angular", "Angular design web responsive"
    ]
}