import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptDE: Metadata = {
    title: "JavaScript | CHORN - Experten für maßgeschneiderte Softwareentwicklung",
    description: "Nutzen Sie JavaScript, um skalierbare, robuste und effiziente maßgeschneiderte Softwarelösungen für Unternehmen aus verschiedenen Branchen zu erstellen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - JavaScript maßgeschneiderte Softwareentwicklung",
        description: "JavaScript-Expertise, ein leistungsstarkes Werkzeug zum Erstellen von skalierbaren und leistungsstarken Anwendungen. Erfahren Sie, warum wir JavaScript für maßgeschneiderte Softwarelösungen wählen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.javascript).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - JavaScript-Entwicklung für maßgeschneiderte Softwarelösungen",
        description: "Nutzen Sie JavaScript, um skalierbare und hochwertige Softwarelösungen zu liefern, die auf die Bedürfnisse von Unternehmen zugeschnitten sind.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        "JavaScript-Entwicklung", "JavaScript-Expertise", "JavaScript-Entwickler", "maßgeschneiderte JavaScript-Entwicklung",
        "JavaScript-Webanwendungen", "JavaScript-Entwicklung Full Stack", "JavaScript-Frontend-Entwicklung",
        "maßgeschneiderte Softwareentwicklung",
        "skalierbare Webanwendungen", "Frontend-Entwicklung", "Backend-Entwicklung",
        "leistungsstarke Anwendungen", "unternehmensweite Softwarelösungen", "maßgeschneiderte Webanwendungen", "API-Entwicklung",
        "JavaScript-Entwickler Thailand", "JavaScript-Entwickler Bangkok", "JavaScript-Entwickler Chiang Mai",
        "Frontend-Entwickler Thailand", "Backend-Entwickler Thailand", "Full Stack-Entwickler Thailand",
        "Softwareingenieur", "Softwareentwickler Thailand",
        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
