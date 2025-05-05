import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoDA: Metadata = {
    title: "Go Full Stack Udvikling | CHORN",
    description: "Go full stack udvikling, teknisk ekspertise til at bygge effektive og skalerbare webapplikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Udvikling | CHORN",
        description: "Byg effektive og skalerbare webapplikationer med teknisk ekspertise i Go full stack udvikling.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.backend.go).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Udvikling | CHORN",
        description: "Ekspertise i Go full stack udvikling til effektive og skalerbare webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.go).twitter.images,
    },
    keywords: [
        "Go-lang udvikling", "Go teknisk ekspertise", "Go udvikler", "tilpasset Go-lang udvikling", "Go webapplikationer",
        "Go backend udvikling", "Go mikrotjenester", "tilpasset softwareudvikling",
        "skalerbare webapplikationer", "backend udvikling", "højtydende applikationer",
        "mikrotjenesteudvikling", "cloud-native udvikling", "API udvikling", "enterprise software",
        "Go udvikler Thailand", "Go udvikler Bangkok", "Go udvikler Chiang Mai", "backend udvikler Thailand",
        "software engineer", "software udvikler Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
