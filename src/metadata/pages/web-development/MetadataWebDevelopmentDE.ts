import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWebDevelopmentDE: Metadata = {
    title: "Webentwicklungsdienste | Maßgeschneiderte Software- und Technologielösungen",
    description: "Entdecken Sie das technische Fachwissen von CHORN in der Webentwicklung, einschließlich Expertise in Next.js, React, Angular, Vue und mehr. CHORN bietet maßgeschneiderte Lösungen für Unternehmen in Bereichen wie Digitales Marketing, Blockchain, E-Commerce und mehr.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.webDevelopment).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Top Webentwicklungsdienste | CHORN",
        description: "CHORN bietet fachliches Know-how in der Webentwicklung mit Expertise in beliebten Frameworks wie Next.js, React, Angular und mehr. CHORN bedient verschiedene Geschäftsanforderungen, einschließlich Digitalem Marketing, E-Commerce, Blockchain und mehr.",
        images: metadataLink(LanguageCode.de, MetaLinks.webDevelopment).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.webDevelopment).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Webentwicklungsdienste | CHORN",
        description: "Entdecken Sie das technische Fachwissen von CHORN in der Webentwicklung. Von Next.js bis Angular und mehr bietet CHORN Lösungen für alle geschäftlichen Anforderungen, einschließlich Digitalem Marketing, Blockchain, E-Commerce und mehr.",
        images: metadataLink(LanguageCode.de, MetaLinks.webDevelopment).twitter.images
    },
    keywords: [
        "Webentwicklung", "technisches Fachwissen Webentwicklung", "Webentwickler", "maßgeschneiderte Webentwicklung",
        "responsives Webdesign", "dynamische Webseiten", "Unternehmens-Webentwicklung",
        "skalierbare Webanwendungen", "maßgeschneiderte Webanwendungen", "maßgeschneiderte Softwareentwicklung",
        "Senior Full-Stack Webentwickler", "Principal Webentwickler", "Senior .NET Core Angular Webentwickler",
        "Senior React Node.js Webentwickler", "Principal React Java Entwickler", "Senior Angular Spring Boot Entwickler",
        "Principal PHP Laravel Webentwickler", "Senior Webentwickler", ".NET Core Webentwicklung", "React Webentwicklung",
        "Angular Webentwicklung", "Vue.js Webentwicklung", "Node.js Webentwicklung", "Java Spring Boot Webentwicklung",
        "PHP Laravel Webentwicklung", "maßgeschneiderte React Webentwicklung", "Unternehmens-Webentwicklung Angular",
        "Webentwickler Thailand", "Webentwickler Bangkok", "Webentwickler Chiang Mai",
        "Senior Webentwickler Thailand", "Principal Webentwickler Thailand", "Backend-Entwickler Thailand",
        "Frontend-Entwickler Thailand", "Softwareingenieur Thailand", "CHORN", "digitale Innovation", "Unternehmenssoftware", "skalierbare Webanwendungen"
    ]
}