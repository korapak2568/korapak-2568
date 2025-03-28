import {Metadata} from "next";
import {MetadataLinkGo} from "@/data/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataGoDA: Metadata = {
    title: "Go Full Stack Udvikling | CHORN",
    description: "Go full stack udvikling, teknisk ekspertise til at bygge effektive og skalerbare webapplikationer.",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Udvikling | CHORN",
        description: "Byg effektive og skalerbare webapplikationer med teknisk ekspertise i Go full stack udvikling.",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Udvikling | CHORN",
        description: "Ekspertise i Go full stack udvikling til effektive og skalerbare webapplikationer.",
        images: MetadataLinkGo.twitter.images,
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
