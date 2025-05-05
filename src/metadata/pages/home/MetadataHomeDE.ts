import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeDE: Metadata = {
    title: "CHORN | Entwicklung von Unternehmenssoftware und Systemintegration",
    description: "Stärken Sie Ihr Unternehmen mit professioneller Systemanalyse und modernsten Softwarelösungen. CHORN spezialisiert sich auf Full-Stack-Entwicklung, KI-gestützte Automatisierung, Cloud-Computing und Systemmodernisierung, um Innovation und Effizienz voranzutreiben.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.de, MetaLinks.home).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN | Entwicklung von Unternehmenssoftware und Systemintegration",
        description: "Stärken Sie Ihr Unternehmen mit professioneller Systemanalyse und modernsten Softwarelösungen. CHORN spezialisiert sich auf Full-Stack-Entwicklung, KI-gestützte Automatisierung, Cloud-Computing und Systemmodernisierung, um Innovation und Effizienz voranzutreiben.",
        images: metadataLink(LanguageCode.de, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.home).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Entwicklung von Unternehmenssoftware und Systemintegration",
        description: "Stärken Sie Ihr Unternehmen mit professioneller Systemanalyse und modernsten Softwarelösungen. CHORN spezialisiert sich auf Full-Stack-Entwicklung, KI-gestützte Automatisierung, Cloud-Computing und Systemmodernisierung, um Innovation und Effizienz voranzutreiben.",
        images: metadataLink(LanguageCode.de, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "CHORN maßgeschneiderte Softwareentwicklung", "CHORN Software-Outsourcing", "Was ist CHORN",
        "CHORN Softwareentwicklung Thailand", "CHORN Softwareentwickler Chiang Mai", "CHORN Softwareentwickler Bangkok",

        "maßgeschneiderte Softwareentwicklung", "maßgeschneiderte Softwareentwicklungsunternehmen", "Software-Outsourcing",
        "Software-Outsourcing technische Expertise", "Softwareentwicklungs-Outsourcing", "Softwareentwicklungs-Outsourcing-Unternehmen",
        "Top-Software-Outsourcing-Unternehmen", "Webentwicklungs-Outsourcing-Unternehmen", "IT-Entwicklungsunternehmen",
        "Outsourcing-Entwicklungsunternehmen", "Outsourcing Thailand", "Outsourcing-Unternehmen in Thailand",
        "Softwareentwicklung Chiang Mai", "Software-Outsourcing Chiang Mai", "Software-Outsourcing Bangkok",

        "Softwareingenieur", "Softwareentwickler", "Frontend-Entwickler", "Backend-Entwickler", "Full-Stack-Entwickler",
        "Webentwickler", "Mobile-Entwickler", "React-Entwickler", "Angular-Entwickler", "Java-Entwickler",
        "Node.js-Entwickler", ".NET Core-Entwickler", "PHP-Entwickler", "API-Entwickler", "Blockchain-Entwickler",
        "Web3-Entwickler", "Microservices-Entwickler", "digitale Innovation", "Unternehmenssoftware", "skalierbare Webseiten",

        "Softwareentwickler Thailand", "Softwareentwickler Chiang Mai", "Softwareentwickler Bangkok",
        "Softwareingenieur Thailand", "Frontend-Entwickler Thailand", "Backend-Entwickler Thailand",
        "Full-Stack-Entwickler Thailand", "Webentwickler Jobs in Thailand", "Mobile-Entwickler Thailand",
        "Full-Stack-Entwickler Chiang Mai", "Softwareentwickler Remote Jobs", "Outsourcing-Programmierer Thailand",

        "Leiter der Technik", "Leiter der Technikabteilung Thailand", "Direktor der Technik",
        "Direktor der Technik Thailand", "Leiter der Softwareentwicklung", "Leiter der Softwareentwicklung Thailand",
        "Leiter der Softwaretechnik", "Leiter der Softwaretechnik Thailand", "IT-Projektmanager",
        "Softwareentwicklungsmanager", "Leiter der Technologie", "Systemanalytiker",

        "Next.js-Entwickler", "React.js-Entwickler", "Spring Boot", "Frontend-Framework", "Frontend-Architektur",
        "Full-Stack-Webentwickler", "Frontend-Backend-Entwicklung", "Microservices",

        "Outsourcing-Entwicklung", "Outsourcing-Unternehmen in Thailand", "Outsourcing-Programmierung",
        "Outsourcing-Programmieraufgaben", "Outsourcing-Programmierjobs", "Outsourcing-Programmieraufgaben",
        "Online-Outsourcing-Programm"
    ]
}
