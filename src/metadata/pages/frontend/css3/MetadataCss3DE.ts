import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3DE: Metadata = {
    title: "CSS3-Entwicklungsdienste | CHORN",
    description: "Verbessern Sie Ihre Webanwendungen mit CSS3-Entwicklung, technisches Fachwissen für moderne und ansprechende Designs.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3-Entwicklung | CHORN",
        description: "CSS3-Entwicklung mit technischem Fachwissen, um stilvolle und reaktionsfähige Webdesigns zu erstellen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3-Entwicklungsdienste | CHORN",
        description: "Erstellen Sie visuell beeindruckende Webdesigns mit CSS3 durch die Bereitstellung von CSS3-Entwicklungstechnischem Fachwissen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "CSS3-Entwicklung", "CSS3-Technische-Fachkenntnisse", "CSS3-Entwickler", "maßgeschneiderte CSS3-Entwicklung", "responsives CSS3-Design",
        "CSS3-Webanwendungen", "CSS3-Mobile-Entwicklung", "maßgeschneiderte Webanwendungen", "Cross-Platform-Apps CSS3",
        "maßgeschneiderte Softwareentwicklung",
        "Webentwicklung", "High-Performance-Webdesign", "dynamische Benutzeroberflächen",
        "CSS3-Entwickler Thailand", "CSS3-Entwickler Bangkok", "CSS3-Entwickler Chiang Mai", "Frontend-Entwickler Thailand",
        "Webentwickler Bangkok", "Software-Ingenieur", "Software-Entwickler Thailand",
        "CHORN", "Digitale Innovation", "Unternehmenssoftware"
    ]
}
