import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNextjsFR: Metadata = {
    title: "Services de développement Next.js | CHORN",
    description: "Expertise en développement Next.js pour améliorer vos applications web avec des solutions évolutives et performantes.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.frontend.nextjs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Next.js | CHORN",
        description: "Développement Next.js spécialisé pour créer des applications web rapides et évolutives.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.nextjs).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.frontend.nextjs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de développement Next.js | CHORN",
        description: "Améliorez vos applications web avec l'expertise en développement Next.js.",
        images: metadataLink(LanguageCode.fr, MetaLinks.frontend.nextjs).twitter.images,
    },
    keywords: [
        "Développement Next.js", "Expertise Next.js", "Développeur Next.js", "Développement Next.js personnalisé", "Rendu côté serveur",
        "Développement Full Stack Next.js", "Optimisation SEO avec Next.js", "Applications Next.js", "Développement d'applications web",
        "Applications web évolutives", "Développement frontend", "Applications web performantes",
        "Applications monopages", "Interfaces utilisateur dynamiques", "Développeur full stack", "Développement de logiciels personnalisés",
        "Développeur Next.js France", "Développeur Next.js Paris", "Développeur Next.js Lyon", "Développeur frontend France",
        "Développeur web Paris", "Ingénieur logiciel", "Développeur de logiciels France",
        "CHORN", "Innovation numérique", "Logiciels d'entreprise"
    ]
}