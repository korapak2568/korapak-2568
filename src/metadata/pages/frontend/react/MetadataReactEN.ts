import {Metadata} from "next";
import {MetadataLinkReact} from "@/metadata/pages/frontend/react/common/MetadataLinkReact";

export const MetadataReactEN: Metadata = {
    title: "React Development Services | CHORN",
    description: "Top-tier React development with technical expertise, build dynamic and responsive user interfaces with React.",
    alternates: MetadataLinkReact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React Development | CHORN",
        description: "Enhance your web apps with expert React development, technical expertise for high-performance applications.",
        images: MetadataLinkReact.openGraph.images,
        url: MetadataLinkReact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React Development Services | CHORN",
        description: "Expert React development, technical expertise create engaging user interfaces with React.",
        images: MetadataLinkReact.twitter.images,
    },
    keywords: [
        // Core React & service Keywords
        "React development", "React technical-expertise", "React developer", "custom React development", "React.js applications",
        "React full stack development", "React single-page applications", "React user interfaces", "custom web applications",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "high-performance web applications",
        "dynamic user interfaces", "single-page applications", "React.js developer",

        // Developer & Location-Specific Keywords
        "React developer Thailand", "React developer Bangkok", "React developer Chiang Mai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}