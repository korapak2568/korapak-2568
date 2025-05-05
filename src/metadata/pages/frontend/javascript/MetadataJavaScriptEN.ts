import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptEN: Metadata = {
    title: "JavaScript | CHORN - Custom Software Development Experts",
    description: "Leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - JavaScript Custom Software Development",
        description: "JavaScript expertise, a powerful tool for building scalable and high-performance applications. Learn why we choose JavaScript for custom software solutions.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.frontend.javascript).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - JavaScript Development for Custom Software Solutions",
        description: "JavaScript development to deliver scalable and high-quality software solutions tailored to businesses' needs.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        // Core JavaScript & services Keywords
        "JavaScript development", "JavaScript technical-expertise", "JavaScript developer", "custom JavaScript development",
        "JavaScript web applications", "JavaScript full stack development", "JavaScript frontend development",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "backend development",
        "high-performance applications", "enterprise software solutions", "custom web applications", "API development",

        // Developer & Location-Specific Keywords
        "JavaScript developer Thailand", "JavaScript developer Bangkok", "JavaScript developer Chiang Mai",
        "frontend developer Thailand", "backend developer Thailand", "full stack developer Thailand",
        "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}