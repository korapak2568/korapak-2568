import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsEN: Metadata = {
    title: "Go Full Stack Development | CHORN",
    description: "Go full-stack development, technical-expertise for building efficient and scalable web applications.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Development | CHORN",
        description: "Build efficient and scalable web applications with Go full-stack development technical expertise.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full-Stack Development | CHORN",
        description: "Go full-stack development technical expertise for efficient and scalable web applications.",
        images: MetadataLinkNodejs.twitter.images,
    },
    keywords: [
        // Core Node.js & service Keywords
        "Node.js development", "Node.js technical-expertise", "Node.js developer", "custom Node.js development",
        "Node.js back-end development", "Node.js full-stack development", "Node.js microservices", "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "high-performance applications",
        "enterprise Node.js applications", "API development", "microservices development", "full-stack developer",

        // Developer & Location-Specific Keywords
        "Node.js developer Thailand", "Node.js developer Bangkok", "Node.js developer Chiang Mai",
        "Back-End developer Thailand", "Full-Stack developer Thailand", "Software engineer", "Software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}