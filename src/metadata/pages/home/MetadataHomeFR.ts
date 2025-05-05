import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeFR: Metadata = {
    title: "CHORN | Développement de logiciels d'entreprise et intégration de systèmes",
    description: "Donnez à votre entreprise un avantage avec une analyse experte des systèmes et des solutions logicielles de pointe. CHORN se spécialise dans le développement full-stack, l'automatisation alimentée par l'IA, l'informatique en nuage et la modernisation des systèmes pour stimuler l'innovation et l'efficacité.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fr, MetaLinks.home).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN | Développement de logiciels d'entreprise et intégration de systèmes",
        description: "Donnez à votre entreprise un avantage avec une analyse experte des systèmes et des solutions logicielles de pointe. CHORN se spécialise dans le développement full-stack, l'automatisation alimentée par l'IA, l'informatique en nuage et la modernisation des systèmes pour stimuler l'innovation et l'efficacité.",
        images: metadataLink(LanguageCode.fr, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Développement de logiciels d'entreprise et intégration de systèmes",
        description: "Donnez à votre entreprise un avantage avec une analyse experte des systèmes et des solutions logicielles de pointe. CHORN se spécialise dans le développement full-stack, l'automatisation alimentée par l'IA, l'informatique en nuage et la modernisation des systèmes pour stimuler l'innovation et l'efficacité.",
        images: metadataLink(LanguageCode.fr, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "Développement de logiciels sur mesure CHORN", "Sous-traitance logicielle CHORN", "Qu'est-ce que CHORN",
        "Développement de logiciels CHORN Thaïlande", "Développeur de logiciels CHORN Chiang Mai", "Développeur de logiciels CHORN Bangkok",

        "Développement de logiciels sur mesure", "Entreprises de développement de logiciels sur mesure", "Sous-traitance logicielle",
        "Expertise technique en sous-traitance", "Sous-traitance de développement logiciel", "Entreprises de sous-traitance de développement logiciel",
        "Meilleures entreprises de sous-traitance logicielle", "Entreprises de sous-traitance de développement web", "Entreprises de développement IT",
        "Société de sous-traitance", "Sous-traitance en Thaïlande", "Société de sous-traitance en Thaïlande",
        "Développement de logiciels Chiang Mai", "Sous-traitance logicielle Chiang Mai", "Sous-traitance logicielle Bangkok",

        "Ingénieur logiciel", "Développeur logiciel", "Développeur Frontend", "Développeur Backend", "Développeur Full Stack",
        "Développeur web", "Développeur mobile", "Développeur React", "Développeur Angular", "Développeur Java",
        "Développeur Node.js", "Développeur .NET Core", "Développeur PHP", "Développeur API", "Développeur Blockchain",
        "Développeur Web3", "Développeur Microservices", "Innovation numérique", "Logiciel d'entreprise", "Sites web évolutifs",

        "Développeur logiciel Thaïlande", "Développeur logiciel Chiang Mai", "Développeur logiciel Bangkok",
        "Ingénieur logiciel Thaïlande", "Développeur Frontend Thaïlande", "Développeur Backend Thaïlande",
        "Développeur Full Stack Thaïlande", "Emplois de développeur web en Thaïlande", "Développeur mobile Thaïlande",
        "Développeur Full Stack Chiang Mai", "Emplois de développeur à distance", "Sous-traitance de programmeurs en Thaïlande",

        "Chef d'ingénierie", "Responsable du département d'ingénierie en Thaïlande", "Directeur de l'ingénierie",
        "Directeur de l'ingénierie en Thaïlande", "Responsable du développement logiciel", "Responsable du développement logiciel en Thaïlande",
        "Responsable de l'ingénierie logicielle", "Responsable de l'ingénierie logicielle en Thaïlande", "Chef de projet IT",
        "Responsable du développement logiciel", "Chef de la technologie", "Analyste système",

        "Développeur Next.js", "Développeur React.js", "Spring Boot", "Framework Frontend", "Architecture Frontend",
        "Développeur web Full Stack", "Développement Frontend et Backend", "Microservices",

        "Développement en sous-traitance", "Société de sous-traitance en Thaïlande", "Programmation en sous-traitance",
        "Tâches de programmation en sous-traitance", "Emplois de programmation en sous-traitance", "Tâche de programme en sous-traitance",
        "Programme en sous-traitance en ligne"
    ]
}