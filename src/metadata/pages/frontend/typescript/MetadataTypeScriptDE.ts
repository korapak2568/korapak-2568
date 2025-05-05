import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTypeScriptDE: Metadata = {
    title: "TypeScript | CHORN - Experten für maßgeschneiderte Softwareentwicklung",
    description: "Nutzen Sie TypeScript, um skalierbare, robuste und effiziente maßgeschneiderte Softwarelösungen für Unternehmen in verschiedenen Branchen zu entwickeln.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.typescript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Maßgeschneiderte Softwareentwicklung mit TypeScript",
        description: "Expertise in TypeScript, ein leistungsstarkes Werkzeug zum Erstellen skalierbarer und leistungsstarker Anwendungen. Erfahren Sie, warum wir TypeScript für maßgeschneiderte Softwarelösungen wählen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.typescript).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.typescript).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript-Entwicklung für maßgeschneiderte Softwarelösungen",
        description: "Nutzen Sie TypeScript, um skalierbare und hochwertige Softwarelösungen zu liefern, die den Bedürfnissen von Unternehmen entsprechen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.typescript).twitter.images,
    },
    keywords: [
        "TypeScript-Entwicklung", "TypeScript-Expertise", "TypeScript-Entwickler", "Maßgeschneiderte TypeScript-Entwicklung",
        "TypeScript-Webanwendungen", "TypeScript Full Stack-Entwicklung", "TypeScript Frontend-Entwicklung",
        "Maßgeschneiderte Softwareentwicklung",
        "Skalierbare Webanwendungen", "Frontend-Entwicklung", "Backend-Entwicklung",
        "Leistungsstarke Anwendungen", "Softwarelösungen für Unternehmen", "Maßgeschneiderte Webanwendungen", "API-Entwicklung",
        "TypeScript-Entwickler Thailand", "TypeScript-Entwickler Bangkok", "TypeScript-Entwickler Chiang Mai",
        "Frontend-Entwickler Thailand", "Backend-Entwickler Thailand", "Full Stack-Entwickler Thailand",
        "Softwareingenieur", "Softwareentwickler Thailand",
        "CHORN", "Digitale Innovation", "Unternehmenssoftware"
    ]
}
