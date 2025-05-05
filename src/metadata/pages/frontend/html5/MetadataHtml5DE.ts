import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5DE: Metadata = {
    title: "HTML5 Entwicklungsdienste | CHORN",
    description: "HTML5-Entwicklungsexpertise zur Erstellung von reaktionsschnellen und interaktiven Webanwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5 Entwicklung | CHORN",
        description: "Erstellen Sie moderne und interaktive Webanwendungen mit technischer Expertise.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.html5).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 Entwicklungsdienste | CHORN",
        description: "Erstellen Sie interaktive Webanwendungen mit HTML5-Expertise.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "HTML5 Entwicklung", "HTML5 technische Expertise", "HTML5 Entwickler", "benutzerdefinierte HTML5 Entwicklung", "HTML5 responsive Design",
        "HTML5 Webanwendungen", "HTML5 mobile Entwicklung", "benutzerdefinierte Webanwendungen", "HTML5 plattformübergreifende Apps",
        "maßgeschneiderte Softwareentwicklung",
        "Single-AiBannerFahMain-Anwendungen", "Frontend-Entwicklung", "Webentwickler", "skalierbare Webanwendungen",
        "hochleistungsfähiges Webdesign", "responsives Webdesign", "dynamische Benutzeroberflächen",
        "HTML5 Entwickler Thailand", "HTML5 Entwickler Bangkok", "HTML5 Entwickler Chiang Mai", "Frontend-Entwickler Thailand",
        "Webentwickler Bangkok", "Softwareingenieur", "Softwareentwickler Thailand",
        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
