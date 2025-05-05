import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptFR: Metadata = {
    title: "JavaScript | CHORN - Experts en développement de logiciels sur mesure",
    description: "Exploite JavaScript pour créer des solutions logicielles personnalisées évolutives, robustes et efficaces pour les entreprises de divers secteurs.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Développement de logiciels sur mesure avec JavaScript",
        description: "Expertise en JavaScript, un outil puissant pour créer des applications évolutives et performantes. Découvrez pourquoi nous choisissons JavaScript pour des solutions logicielles personnalisées.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.frontend.javascript).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Développement JavaScript pour des solutions logicielles personnalisées",
        description: "Le développement JavaScript pour fournir des solutions logicielles évolutives et de haute qualité adaptées aux besoins des entreprises.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        "développement JavaScript", "expertise technique JavaScript", "développeur JavaScript", "développement JavaScript sur mesure",
        "applications web JavaScript", "développement JavaScript full stack", "développement JavaScript frontend",
        "développement de logiciels sur mesure",
        "applications web évolutives", "développement frontend", "développement backend",
        "applications performantes", "solutions logicielles d'entreprise", "applications web personnalisées", "développement d'API",
        "développeur JavaScript Thaïlande", "développeur JavaScript Bangkok", "développeur JavaScript Chiang Mai",
        "développeur frontend Thaïlande", "développeur backend Thaïlande", "développeur full stack Thaïlande",
        "ingénieur logiciel", "développeur logiciel Thaïlande",
        "CHORN", "innovation numérique", "logiciels d'entreprise"
    ]
}
