import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsDA: Metadata = {
    title: "Go Full Stack Udvikling | CHORN",
    description: "Go full-stack udvikling, teknisk ekspertise til at bygge effektive og skalerbare webapplikationer.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Udvikling | CHORN",
        description: "Byg effektive og skalerbare webapplikationer med teknisk ekspertise i Go full-stack udvikling.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full-Stack Udvikling | CHORN",
        description: "Go full-stack udvikling teknisk ekspertise til effektive og skalerbare webapplikationer.",
        images: MetadataLinkNodejs.twitter.images,
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
