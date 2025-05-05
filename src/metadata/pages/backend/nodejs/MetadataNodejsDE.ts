import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsDE: Metadata = {
    title: "Node.js Full-Stack-Entwicklung | CHORN",
    description: "Node.js Full-Stack-Entwicklung, technische Expertise für effiziente und skalierbare Webanwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js Entwicklung | CHORN",
        description: "Effiziente und skalierbare Webanwendungen mit Node.js Full-Stack-Entwicklungsexpertise erstellen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.backend.nodejs).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full-Stack-Entwicklung | CHORN",
        description: "Node.js Full-Stack-Expertise für leistungsstarke und skalierbare Webanwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.nodejs).twitter.images
    },
    keywords: [
        "Node.js Entwicklung", "Node.js technische Expertise", "Node.js Entwickler", "benutzerdefinierte Node.js Entwicklung",
        "Node.js Backend-Entwicklung", "Node.js Full-Stack-Entwicklung", "Node.js Microservices", "benutzerdefinierte Softwareentwicklung",
        "skalierbare Webanwendungen", "Backend-Entwicklung", "leistungsstarke Anwendungen",
        "Enterprise Node.js Anwendungen", "API-Entwicklung", "Microservices-Entwicklung", "Full-Stack-Entwickler",
        "Node.js Entwickler Thailand", "Node.js Entwickler Bangkok", "Node.js Entwickler Chiang Mai",
        "Backend-Entwickler Thailand", "Full-Stack-Entwickler Thailand", "Softwareingenieur", "Softwareentwickler Thailand",
        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
