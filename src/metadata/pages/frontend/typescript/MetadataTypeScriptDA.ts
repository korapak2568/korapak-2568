import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTypeScriptDA: Metadata = {
    title: "TypeScript | CHORN - Eksperter i tilpasset softwareudvikling",
    description: "Brug TypeScript til at udvikle skalerbare, robuste og effektive tilpassede softwareløsninger til virksomheder på tværs af industrier.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.typescript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Tilpasset softwareudvikling med TypeScript",
        description: "Ekspertise i TypeScript, et kraftfuldt værktøj til at skabe skalerbare og højtydende applikationer. Læs hvorfor vi vælger TypeScript til tilpassede softwareløsninger.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.typescript).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.typescript).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript-udvikling til tilpassede softwareløsninger",
        description: "Brug TypeScript til at levere skalerbare og højtkvalitets softwareløsninger, der er skræddersyet til virksomhedernes behov.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.typescript).twitter.images,
    },
    keywords: [
        "TypeScript-udvikling", "TypeScript-ekspertise", "TypeScript-udvikler", "Tilpasset TypeScript-udvikling",
        "TypeScript-webapplikationer", "TypeScript Full Stack-udvikling", "TypeScript Frontend-udvikling",
        "Tilpasset softwareudvikling",
        "Skalerbare webapplikationer", "Frontend-udvikling", "Backend-udvikling",
        "Højtydende applikationer", "Softwareløsninger til virksomheder", "Tilpassede webapplikationer", "API-udvikling",
        "TypeScript-udvikler Thailand", "TypeScript-udvikler Bangkok", "TypeScript-udvikler Chiang Mai",
        "Frontend-udvikler Thailand", "Backend-udvikler Thailand", "Full Stack-udvikler Thailand",
        "Softwareingeniør", "Softwareudvikler Thailand",
        "CHORN", "Digital innovation", "Virksomhedssoftware"
    ]
}
