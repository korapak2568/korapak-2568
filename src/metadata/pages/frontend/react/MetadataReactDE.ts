import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataReactDE: Metadata = {
    title: "React-Entwicklungsdienste | CHORN",
    description: "Top-React-Entwicklung mit technischer Expertise, erstellen Sie dynamische und reaktionsschnelle Benutzeroberflächen mit React.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.react).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React-Entwicklung | CHORN",
        description: "Verbessern Sie Ihre Webanwendungen mit React-Entwicklungsexpertise, technische Fachkenntnisse für leistungsstarke Anwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.react).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.react).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React-Entwicklungsdienste | CHORN",
        description: "Experten-React-Entwicklung, technische Expertise zur Erstellung ansprechender Benutzeroberflächen mit React.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.react).twitter.images,
    },
    keywords: [
        "React-Entwicklung", "React-Technische-Expertise", "React-Entwickler", "Benutzerdefinierte React-Entwicklung", "React.js-Anwendungen",
        "Full-Stack-React-Entwicklung", "React-Einzelseitenanwendungen", "React-Benutzeroberflächen", "Benutzerdefinierte Webanwendungen",
        "Benutzerdefinierte Softwareentwicklung",
        "Skalierbare Webanwendungen", "Frontend-Entwicklung", "Leistungsstarke Webanwendungen",
        "Dynamische Benutzeroberflächen", "Einzelseitenanwendungen", "React.js-Entwickler",
        "React-Entwickler Deutschland", "React-Entwickler Berlin", "React-Entwickler München", "Frontend-Entwickler Deutschland",
        "Web-Entwickler Berlin", "Softwareingenieur", "Softwareentwickler Deutschland",
        "CHORN", "Digitale Innovation", "Unternehmenssoftware"
    ]
}
