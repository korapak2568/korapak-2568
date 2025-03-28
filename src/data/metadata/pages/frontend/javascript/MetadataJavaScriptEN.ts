import {Metadata} from "next";
import {MetadataLinkJavaScript} from "@/data/metadata/pages/frontend/javascript/common/MetadataLinkJavaScript";

export const MetadataJavaScriptEN: Metadata = {
    title: "JavaScript | CHORN - Custom Software Development Experts",
    description: "Leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries.",
    alternates: MetadataLinkJavaScript.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - JavaScript Custom Software Development",
        description: "JavaScript expertise, a powerful tool for building scalable and high-performance applications. Learn why we choose JavaScript for custom software solutions.",
        images: MetadataLinkJavaScript.openGraph.images,
        url: MetadataLinkJavaScript.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - JavaScript Development for Custom Software Solutions",
        description: "JavaScript development to deliver scalable and high-quality software solutions tailored to businesses' needs.",
        images: MetadataLinkJavaScript.twitter.images,
    },
    keywords: [
        // Core JavaScript & service Keywords
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