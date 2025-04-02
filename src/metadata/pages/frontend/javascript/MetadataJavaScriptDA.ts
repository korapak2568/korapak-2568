import {Metadata} from "next";
import {MetadataLinkJavaScript} from "@/metadata/pages/frontend/javascript/common/MetadataLinkJavaScript";

export const MetadataJavaScriptDA: Metadata = {
    title: "JavaScript | CHORN - Eksperter i tilpasset softwareudvikling",
    description: "Brug JavaScript til at bygge skalerbare, robuste og effektive tilpassede softwareløsninger for virksomheder på tværs af brancher.",
    alternates: MetadataLinkJavaScript.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - JavaScript tilpasset softwareudvikling",
        description: "JavaScript-ekspertise, et kraftfuldt værktøj til at opbygge skalerbare og højtydende applikationer. Læs hvorfor vi vælger JavaScript til tilpassede softwareløsninger.",
        images: MetadataLinkJavaScript.openGraph.images,
        url: MetadataLinkJavaScript.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - JavaScript udvikling til tilpassede softwareløsninger",
        description: "Brug JavaScript til at levere skalerbare og høj kvalitet softwareløsninger, der er skræddersyet til virksomhedens behov.",
        images: MetadataLinkJavaScript.twitter.images,
    },
    keywords: [
        "JavaScript udvikling", "JavaScript teknisk ekspertise", "JavaScript udvikler", "tilpasset JavaScript udvikling",
        "JavaScript webapplikationer", "JavaScript full stack udvikling", "JavaScript frontend udvikling",
        "tilpasset softwareudvikling",
        "skalerbare webapplikationer", "frontend udvikling", "backend udvikling",
        "højtydende applikationer", "enterprise softwareløsninger", "tilpassede webapplikationer", "API-udvikling",
        "JavaScript udvikler Thailand", "JavaScript udvikler Bangkok", "JavaScript udvikler Chiang Mai",
        "frontend udvikler Thailand", "backend udvikler Thailand", "full stack udvikler Thailand",
        "softwareingeniør", "softwareudvikler Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
