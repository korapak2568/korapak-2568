import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTypeScriptEN: Metadata = {
    title: "TypeScript | CHORN - Custom Software Development Experts",
    description: "Leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.frontend.typescript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - TypeScript Custom Software Development",
        description: "TypeScript expertise, a powerful tool for building scalable and high-performance applications. Learn why we choose TypeScript for custom software solutions.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.typescript).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.frontend.typescript).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript Development for Custom Software Solutions",
        description: "Use TypeScript to deliver scalable and high-quality software solutions tailored to businesses' needs.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.typescript).twitter.images,
    },
    keywords: [
        // Core TypeScript & services Keywords
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