import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaEN: Metadata = {
    title: "Java Spring Boot Full Stack Development | CHORN",
    description: "Java Spring Boot full stack development, technical expertise to build robust and scalable enterprise applications.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Java Spring Boot Development | CHORN",
        description: "Leverage Java Spring Boot full stack development with technical expertise to build scalable, secure, and high-performance applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.backend.java).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Development | CHORN",
        description: "Expert Java Spring Boot full stack development, technical expertise to build secure and scalable applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        // Core Java Spring Boot & services Keywords
        "Spring Boot development", "Java Spring Boot technical-expertise", "Spring Boot developer", "custom Java development",
        "Java Spring Boot applications", "enterprise Java development", "Spring Boot microservices",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "enterprise software solutions",
        "high-performance applications", "Java web applications", "microservices development", "API development",

        // Developer & Location-Specific Keywords
        "Spring Boot developer Thailand", "Java developer Thailand", "Java developer Bangkok",
        "Java developer Chiang Mai", "backend developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}