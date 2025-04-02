import {Metadata} from "next";
import {MetadataLinkJava} from "@/metadata/pages/backend/java/common/MetadataLinkJava";

export const MetadataJavaFR: Metadata = {
    title: "Développement Full Stack Java Spring Boot | CHORN",
    description: "Développement Full Stack avec Java Spring Boot, expertise technique pour créer des applications robustes et évolutives pour les entreprises.",
    alternates: MetadataLinkJava.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Java Spring Boot | CHORN",
        description: "Exploitez le développement Full Stack Java Spring Boot avec une expertise technique pour créer des applications évolutives, sécurisées et performantes.",
        images: MetadataLinkJava.openGraph.images,
        url: MetadataLinkJava.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement Full Stack Java Spring Boot | CHORN",
        description: "Expertise en développement Full Stack Java Spring Boot pour créer des applications sécurisées et évolutives.",
        images: MetadataLinkJava.twitter.images,
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
