import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5EN: Metadata = {
    title: "HTML5 Development Services | CHORN",
    description: "HTML5 development technical expertise to create responsive and engaging web applications.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5 Development | CHORN",
        description: "Build modern and interactive web applications with technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.frontend.html5).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 Development Services | CHORN",
        description: "Create interactive web apps with HTML5 technical-expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        // Core HTML5 & services Keywords
        "HTML5 development", "HTML5 technical-expertise", "HTML5 developer", "custom HTML5 development", "HTML5 responsive design",
        "HTML5 web applications", "HTML5 mobile development", "custom web applications", "HTML5 cross-platform apps",
        "custom software development",

        // Web & Application Development Keywords
        "single-page applications", "frontend development", "web developer", "scalable web applications",
        "high-performance web design", "responsive web design", "dynamic user interfaces",

        // Developer & Location-Specific Keywords
        "HTML5 developer Thailand", "HTML5 developer Bangkok", "HTML5 developer Chiang Mai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}