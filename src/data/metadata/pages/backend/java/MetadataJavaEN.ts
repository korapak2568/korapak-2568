import {Metadata} from "next";
import {MetadataLinkJava} from "@/data/metadata/pages/backend/java/common/MetadataLinkJava";

export const MetadataJavaEN: Metadata = {
    title: "Java Spring Boot Full Stack Development | CHORN",
    description: "CHORN offers Java Spring Boot full stack development technical-expertise to build robust and scalable enterprise applications.",
    alternates: MetadataLinkJava.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Java Spring Boot Development | CHORN",
        description: "Leverage CHORN’s Java Spring Boot full stack development technical-expertise to build scalable, secure, and high-performance applications.",
        images: MetadataLinkJava.openGraph.images,
        url: MetadataLinkJava.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Development | CHORN",
        description: "Expert Java Spring Boot full stack development technical-expertise from CHORN to build secure and scalable applications.",
        images: MetadataLinkJava.twitter.images,
    },
    keywords: [
        // Core Java Spring Boot & service Keywords
        "Spring Boot development", "Java Spring Boot technical-expertise", "Spring Boot developer", "custom Java development",
        "Java Spring Boot applications", "enterprise Java development", "Spring Boot microservices",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "enterprise software solutions",
        "high-performance applications", "Java web applications", "microservices development", "API development",

        // Developer & Location-Specific Keywords
        "Spring Boot developer Thailand", "Java developer Thailand", "Java developer Bangkok",
        "Java developer Chiangmai", "backend developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}