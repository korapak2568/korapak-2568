import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaFR: Metadata = {
    title: "Développement Full Stack Java Spring Boot | CHORN",
    description: "Développement Full Stack avec Java Spring Boot, expertise technique pour créer des applications robustes et évolutives pour les entreprises.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Java Spring Boot | CHORN",
        description: "Exploitez le développement Full Stack Java Spring Boot avec une expertise technique pour créer des applications évolutives, sécurisées et performantes.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.backend.java).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement Full Stack Java Spring Boot | CHORN",
        description: "Expertise en développement Full Stack Java Spring Boot pour créer des applications sécurisées et évolutives.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        "Développement Spring Boot", "Expertise technique Java Spring Boot", "Développeur Spring Boot", "Développement Java personnalisé",
        "Applications Java Spring Boot", "Développement Java pour entreprise", "Microservices Spring Boot",
        "Développement logiciel personnalisé", "Applications web évolutives", "Développement backend", "Solutions logicielles pour entreprises",
        "Applications performantes", "Applications web Java", "Développement de microservices", "Développement d'API",
        "Développeur Spring Boot Thaïlande", "Développeur Java Thaïlande", "Développeur Java Bangkok",
        "Développeur Java Chiang Mai", "Développeur backend Thaïlande", "Ingénieur logiciel", "Développeur logiciel Thaïlande",
        "CHORN", "Innovation numérique", "Logiciel pour entreprises"
    ]
}
