import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsDA: Metadata = {
    title: "Node.js Full Stack Udvikling | CHORN",
    description: "Node.js full-stack udvikling, teknisk ekspertise til at bygge effektive og skalerbare webapplikationer.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js Udvikling | CHORN",
        description: "Byg effektive og skalerbare webapplikationer med teknisk ekspertise inden for Node.js full-stack udvikling.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full Stack Udvikling | CHORN",
        description: "Node.js full-stack udviklingsekspertise til effektive og skalerbare webapps.",
        images: MetadataLinkNodejs.twitter.images
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
