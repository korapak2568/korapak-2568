import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWebDevelopmentEN: Metadata = {
    title: "Web Development Services | Custom Software & Technology Solutions",
    description: "Explore CHORN's web development technical-expertise, including expertise in Next.js, React, Angular, Vue, and more. CHORN offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.webDevelopment).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Top Web Development Services | CHORN",
        description: "CHORN provides cutting-edge web development technical-expertise with expertise in popular frameworks like Next.js, React, Angular, and more. CHORN caters to diverse business needs including Digital Marketing, E-Commerce, Blockchain, and more.",
        images: metadataLink(LanguageCode.en, MetaLinks.webDevelopment).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.webDevelopment).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services | CHORN",
        description: "Discover CHORN’s expert web development technical-expertise. From Next.js to Angular and beyond, CHORN offers solutions for all business needs including Digital Marketing, Blockchain, E-Commerce, and more.",
        images: metadataLink(LanguageCode.en, MetaLinks.webDevelopment).twitter.images,
    },
    keywords: [
        // Core Web Development Keywords
        "web development", "web development technical-expertise", "web developer", "custom web development",
        "responsive web development", "dynamic websites", "enterprise web development",
        "scalable web applications", "custom web applications", "custom software development",

        // Senior/Principal Developer Keywords (Combined Frameworks)
        "Senior full stack web developer", "Principal web developer", "Senior .NET Core Angular web developer",
        "Senior React Node.js web developer", "Principal React Java developer",
        "Senior Angular Spring Boot developer", "Principal PHP Laravel web developer", "Senior web developer",

        // Framework-Specific Web Development Keywords
        ".NET Core web development", "React web development", "Angular web development",
        "Vue.js web development", "Node.js web development", "Java Spring Boot web development",
        "PHP Laravel web development", "custom React web development", "enterprise Angular web development",

        // Developer & Location-Specific Keywords
        "web developer Thailand", "web developer Bangkok", "web developer Chiang Mai",
        "Senior web developer Thailand", "Principal web developer Thailand",
        "backend developer Thailand", "frontend developer Thailand", "software engineer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software", "scalable web applications"
    ]
}