import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoDE: Metadata = {
    title: "Go Full Stack Entwicklung | CHORN",
    description: "Go Full Stack Entwicklung, technische Expertise zum Erstellen effizienter und skalierbarer Webanwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Entwicklung | CHORN",
        description: "Erstellen Sie effiziente und skalierbare Webanwendungen mit der technischen Expertise der Go Full Stack Entwicklung.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.backend.go).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Entwicklung | CHORN",
        description: "Expertenwissen in der Go Full Stack Entwicklung für effiziente und skalierbare Webanwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.go).twitter.images,
    },
    keywords: [
        "Go-lang Entwicklung", "Go technische Expertise", "Go Entwickler", "individuelle Go-lang Entwicklung", "Go Webanwendungen",
        "Go Backend-Entwicklung", "Go Mikrodienste", "individuelle Softwareentwicklung",
        "skalierbare Webanwendungen", "Backend-Entwicklung", "leistungsstarke Anwendungen",
        "Mikrodienste Entwicklung", "Cloud-native Entwicklung", "API-Entwicklung", "Unternehmenssoftware",
        "Go Entwickler Thailand", "Go Entwickler Bangkok", "Go Entwickler Chiang Mai", "Backend-Entwickler Thailand",
        "Softwareingenieur", "Softwareentwickler Thailand",
        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
