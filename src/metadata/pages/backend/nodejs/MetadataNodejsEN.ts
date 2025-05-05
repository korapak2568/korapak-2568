import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsEN: Metadata = {
    title: "Node.js Full Stack Development | CHORN",
    description: "Node.js full-stack development, technical-expertise for building efficient and scalable web applications.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js Development | CHORN",
        description: "Build efficient and scalable web applications with Node.js full-stack development technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.backend.nodejs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full-Stack Development | CHORN",
        description: "Node.js full-stack development technical expertise for efficient and scalable web applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.nodejs).twitter.images,
    },
    keywords: [
        // Core Node.js & services Keywords
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