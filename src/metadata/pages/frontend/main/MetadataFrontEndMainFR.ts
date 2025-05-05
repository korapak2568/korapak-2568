import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainFR: Metadata = {
    title: "Services de développement Frontend | CHORN",
    description: "CHORN propose une expertise technique en développement Frontend, spécialisée dans les frameworks modernes tels que Next.js, React, Angular, Vue, HTML5 et CSS3. Construisez des sites web réactifs et évolutifs avec des technologies de pointe.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services de développement Frontend | CHORN",
        description: "CHORN offre une expertise technique en développement Frontend avec des technologies modernes comme Next.js, React, Angular, Vue, HTML5 et CSS3 pour créer des sites web rapides, réactifs et évolutifs.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.frontend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de développement Frontend | CHORN",
        description: "Expertise en développement Frontend par CHORN, utilisant Next.js, React, Angular, Vue, HTML5 et CSS3 pour des sites web réactifs et évolutifs.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        "développement frontend", "expertise technique frontend", "développeur frontend", "développement frontend personnalisé",
        "interfaces utilisateur dynamiques", "applications web monopage", "design web réactif",
        "applications frontend haute performance", "développement de logiciels sur mesure",
        "développement React", "développement Angular", "développement Vue.js", "développement frontend Next.js",
        "développement React.js", "développement frontend Angular sur mesure", "applications frontend React.js",
        "expertise technique Vue.js frontend", "développement Vue.js personnalisé",
        "développeur frontend France", "développeur web France", "ingénieur logiciel France",
        "CHORN", "innovation numérique", "logiciels d'entreprise", "applications web évolutives"
    ]
}