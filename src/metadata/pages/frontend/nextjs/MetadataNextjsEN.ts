import {Metadata} from "next";
import {MetadataLinkNextjs} from "@/metadata/pages/frontend/nextjs/common/MetadataLinkNextjs";

export const MetadataNextjsEN: Metadata = {
    title: "Next.js Development Services | CHORN",
    description: "Expert Next.js development, enhance your web applications with scalable and high-performance solutions using Next.js.",
    alternates: MetadataLinkNextjs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js Development | CHORN",
        description: "Specialized Next.js development, technical expertise to create fast and scalable web applications.",
        images: MetadataLinkNextjs.openGraph.images,
        url: MetadataLinkNextjs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Development Services | CHORN",
        description: "Elevate your web applications with expert Next.js development technical-expertise.",
        images: MetadataLinkNextjs.twitter.images,
    },
    keywords: [
        // Core Next.js & service Keywords
        "Next.js development", "Next.js technical-expertise", "Next.js developer", "custom Next.js development", "server-side rendering",
        "Next.js full stack development", "Next.js SEO optimization", "Next.js applications", "custom web applications",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "high-performance web applications",
        "single-page applications", "dynamic user interfaces", "full stack developer", "custom software development",

        // Developer & Location-Specific Keywords
        "Next.js developer Thailand", "Next.js developer Bangkok", "Next.js developer Chiang Mai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}