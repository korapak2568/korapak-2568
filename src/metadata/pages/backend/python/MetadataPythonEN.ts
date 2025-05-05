import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPythonEN: Metadata = {
    title: "Python Full Stack Development | CHORN",
    description: "Python full stack development, technical expertise to build dynamic and scalable web applications.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.backend.python).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python Development | CHORN",
        description: "Build dynamic and scalable web applications with Python full stack development technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.python).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.backend.python).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Development | CHORN",
        description: "Expert Python full stack development, technical expertise for dynamic and scalable web applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.python).twitter.images,
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