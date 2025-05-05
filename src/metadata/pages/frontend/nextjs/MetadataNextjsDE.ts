import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNextjsDE: Metadata = {
    title: "Next.js Entwicklungsdienste | CHORN",
    description: "Next.js-Entwicklungsdienstleistungen, verbessern Sie Ihre Webanwendungen mit skalierbaren und leistungsstarken Lösungen unter Verwendung von Next.js.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.nextjs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js Entwicklung | CHORN",
        description: "Next.js-Entwicklung mit technischer Expertise, um schnelle, skalierbare und dynamische Webanwendungen zu erstellen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.nextjs).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.nextjs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Entwicklungsdienste | CHORN",
        description: "Verbessern Sie Ihre Webanwendungen mit der Expertise in Next.js-Entwicklung.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.nextjs).twitter.images,
    },
    keywords: [
        "Next.js Entwicklung", "Next.js technische Expertise", "Next.js Entwickler", "maßgeschneiderte Next.js Entwicklung", "Server-Side Rendering",
        "Next.js Full Stack Entwicklung", "Next.js SEO-Optimierung", "Next.js Anwendungen", "maßgeschneiderte Webanwendungen",
        "skalierbare Webanwendungen", "Frontend Entwicklung", "leistungsstarke Webanwendungen",
        "Single-AiBannerFahMain-Anwendungen", "dynamische Benutzeroberflächen", "Full Stack Entwickler", "maßgeschneiderte Softwareentwicklung",
        "Next.js Entwickler Deutschland", "Next.js Entwickler Berlin", "Next.js Entwickler München", "Frontend Entwickler Deutschland",
        "Web Entwickler Berlin", "Software Ingenieur", "Software Entwickler Deutschland",
        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
