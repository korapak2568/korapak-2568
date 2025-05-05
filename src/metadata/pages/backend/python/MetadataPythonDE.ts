import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPythonDE: Metadata = {
    title: "Python Full Stack Entwicklung | CHORN",
    description: "Python Full Stack Entwicklung, technische Expertise zum Erstellen dynamischer und skalierbarer Webanwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.backend.python).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python Entwicklung | CHORN",
        description: "Erstellen Sie dynamische und skalierbare Webanwendungen mit der technischen Expertise der Python Full Stack Entwicklung.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.python).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.backend.python).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Entwicklung | CHORN",
        description: "Technische Expertise in der Python Full Stack Entwicklung für dynamische und skalierbare Webanwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.python).twitter.images,
    },
    keywords: [
        "Python Entwicklung", "Python technische Expertise", "Python Entwickler", "Custom Python Entwicklung", "Python Webanwendungen",
        "Python Backend Entwicklung", "Python Full Stack Entwicklung", "Custom Software Entwicklung",
        "Skalierbare Webanwendungen", "Backend Entwicklung", "Unternehmens-Python-Anwendungen",
        "Hochleistungsanwendungen", "Custom Webanwendungen", "API Entwicklung", "Machine Learning Entwicklung",
        "Python Entwickler Thailand", "Python Entwickler Bangkok", "Python Entwickler Chiang Mai",
        "Backend Entwickler Thailand", "Software Ingenieur", "Software Entwickler Thailand",
        "CHORN", "Digitale Innovation", "Unternehmenssoftware"
    ]
}
