import {Metadata} from "next";
import {MetadataLinkHtml5} from "@/data/metadata/pages/frontend/html5/common/MetadataLinkHtml5";

export const MetadataHtml5EN: Metadata = {
    title: "HTML5 Development Services | CHORN",
    description: "HTML5 development technical expertise to create responsive and engaging web applications.",
    alternates: MetadataLinkHtml5.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5 Development | CHORN",
        description: "Build modern and interactive web applications with technical expertise.",
        images: MetadataLinkHtml5.openGraph.images,
        url: MetadataLinkHtml5.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 Development Services | CHORN",
        description: "Create interactive web apps with HTML5 technical-expertise.",
        images: MetadataLinkHtml5.twitter.images,
    },
    keywords: [
        // Core HTML5 & service Keywords
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