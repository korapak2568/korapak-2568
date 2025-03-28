import {Metadata} from "next";
import {MetadataLinkTypeScript} from "@/data/metadata/pages/frontend/typescript/common/MetadataLinkTypeScript";

export const MetadataTypeScriptEN: Metadata = {
    title: "TypeScript | CHORN - Custom Software Development Experts",
    description: "Leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries.",
    alternates: MetadataLinkTypeScript.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - TypeScript Custom Software Development",
        description: "TypeScript expertise, a powerful tool for building scalable and high-performance applications. Learn why we choose TypeScript for custom software solutions.",
        images: MetadataLinkTypeScript.openGraph.images,
        url: MetadataLinkTypeScript.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript Development for Custom Software Solutions",
        description: "Use TypeScript to deliver scalable and high-quality software solutions tailored to businesses' needs.",
        images: MetadataLinkTypeScript.twitter.images,
    },
    keywords: [
        // Core TypeScript & service Keywords
        "TypeScript development", "TypeScript technical-expertise", "TypeScript developer", "custom TypeScript development",
        "TypeScript web applications", "TypeScript full stack development", "TypeScript frontend development",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "backend development",
        "high-performance applications", "enterprise software solutions", "custom web applications", "API development",

        // Developer & Location-Specific Keywords
        "TypeScript developer Thailand", "TypeScript developer Bangkok", "TypeScript developer Chiang Mai",
        "frontend developer Thailand", "backend developer Thailand", "full stack developer Thailand",
        "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}