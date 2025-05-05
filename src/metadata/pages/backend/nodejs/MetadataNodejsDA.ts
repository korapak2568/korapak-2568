import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsDA: Metadata = {
    title: "Node.js Full Stack Udvikling | CHORN",
    description: "Node.js full-stack udvikling, teknisk ekspertise til at bygge effektive og skalerbare webapplikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js Udvikling | CHORN",
        description: "Byg effektive og skalerbare webapplikationer med teknisk ekspertise inden for Node.js full-stack udvikling.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.backend.nodejs).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full Stack Udvikling | CHORN",
        description: "Node.js full-stack udviklingsekspertise til effektive og skalerbare webapps.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.nodejs).twitter.images
    },
    keywords: [
        "Node.js udvikling", "Node.js teknisk ekspertise", "Node.js udvikler", "tilpasset Node.js udvikling",
        "Node.js backend udvikling", "Node.js full-stack udvikling", "Node.js mikroservices", "tilpasset softwareudvikling",
        "skalerbare webapplikationer", "backend udvikling", "højtydende applikationer",
        "enterprise Node.js applikationer", "API udvikling", "mikroservices udvikling", "full-stack udvikler",
        "Node.js udvikler Thailand", "Node.js udvikler Bangkok", "Node.js udvikler Chiang Mai",
        "backend udvikler Thailand", "full-stack udvikler Thailand", "software ingeniør", "software udvikler Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
