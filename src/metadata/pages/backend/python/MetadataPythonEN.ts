import {Metadata} from "next";
import {MetadataLinkPhp} from "@/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonEN: Metadata = {
    title: "Python Full Stack Development | CHORN",
    description: "Python full stack development, technical expertise to build dynamic and scalable web applications.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python Development | CHORN",
        description: "Build dynamic and scalable web applications with Python full stack development technical expertise.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Development | CHORN",
        description: "Expert Python full stack development, technical expertise for dynamic and scalable web applications.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        // Core Python & services Keywords
        "Python development", "Python technical-expertise", "Python developer", "custom Python development",
        "Python web applications", "Python backend development", "Python full stack development",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "enterprise Python applications",
        "high-performance applications", "custom web applications", "API development", "machine learning development",

        // Developer & Location-Specific Keywords
        "Python developer Thailand", "Python developer Bangkok", "Python developer Chiang Mai",
        "backend developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}