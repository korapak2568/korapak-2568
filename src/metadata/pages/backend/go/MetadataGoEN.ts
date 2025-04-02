import {Metadata} from "next";
import {MetadataLinkGo} from "@/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataGoEN: Metadata = {
    title: "Go Full Stack Development | CHORN",
    description: "Go full stack development, technical expertise for building efficient and scalable web applications.",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Development | CHORN",
        description: "Build efficient and scalable web applications with Go full stack development technical expertise.",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Development | CHORN",
        description: "Expert Go full stack development, technical-expertise for efficient and scalable web applications.",
        images: MetadataLinkGo.twitter.images,
    },
    keywords: [
        // Core Go-lang & service Keywords
        "Go-lang development", "Go technical-expertise", "Go developer", "custom Go-lang development", "Go web applications",
        "Go backend development", "Go microservices", "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "high-performance applications",
        "microservices development", "cloud-native development", "API development", "enterprise software",

        // Developer & Location-Specific Keywords
        "Go developer Thailand", "Go developer Bangkok", "Go developer Chiang Mai", "backend developer Thailand",
        "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}