import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPhpDE: Metadata = {
    title: "PHP Full Stack Entwicklung | CHORN",
    description: "PHP Full Stack Entwicklung, technische Expertise für den Aufbau dynamischer und skalierbarer Webanwendungen.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP Entwicklung | CHORN",
        description: "Nutzen Sie die PHP Full Stack Entwicklung, technische Expertise, um skalierbare und dynamische Webanwendungen zu erstellen.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP Full Stack Entwicklung | CHORN",
        description: "Expertise in PHP Full Stack Entwicklung für dynamische und skalierbare Webanwendungen.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "PHP Entwicklung", "PHP technische Expertise", "PHP Entwickler", "maßgeschneiderte PHP Entwicklung", "PHP Webanwendungen",
        "PHP Full Stack Entwicklung", "PHP Anwendungen für Unternehmen", "maßgeschneiderte Softwareentwicklung",
        "Symfony Entwicklung", "Laravel Entwicklung", "Yii Framework Entwicklung", "Phalcon Entwicklung",
        "maßgeschneiderte Symfony Entwicklung", "maßgeschneiderte Laravel Entwicklung", "maßgeschneiderte Yii Entwicklung", "maßgeschneiderte Phalcon Entwicklung",
        "skalierbare Webanwendungen", "Backend Entwicklung", "hochperformante Webanwendungen",
        "maßgeschneiderte Webanwendungen", "API Entwicklung", "Unternehmenssoftware", "PHP Frameworks",
        "PHP Entwickler Thailand", "PHP Entwickler Bangkok", "PHP Entwickler Chiang Mai",
        "Backend Entwickler Thailand", "Full Stack Entwickler Thailand", "Software Ingenieur", "Software Entwickler Thailand",
        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
