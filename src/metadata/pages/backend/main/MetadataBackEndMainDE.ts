import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainDE: Metadata = {
    title: "Back-End API-Entwicklung | CHORN",
    description: "Back-End API-Entwicklungsdienste mit technischer Expertise unter Verwendung moderner Technologien wie Node.js, Java Spring Boot, .NET Core, Go, Python und PHP zur Erstellung hochwertiger und skalierbarer Anwendungen für Unternehmen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API-Entwicklung | CHORN",
        description: "Back-End API-Entwicklung mit technischer Expertise unter Verwendung von Node.js, Java Spring Boot, .NET Core, Go, Python und PHP zur Erstellung skalierbarer Anwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.backend.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-Entwicklung | CHORN",
        description: "Erstellen Sie skalierbare Webanwendungen mit Node.js, Java Spring Boot, .NET Core, Go, Python und PHP.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.main).twitter.images,
    },
}