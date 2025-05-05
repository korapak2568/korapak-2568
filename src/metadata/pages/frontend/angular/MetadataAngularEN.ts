import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularEN: Metadata = {
    title: "Angular Development Services | CHORN",
    description: "Angular development services, build dynamic, scalable, and high-performance web applications using Angular.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular Development | CHORN",
        description: "Angular development with technical expertise to create fast, scalable, and dynamic web applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.frontend.angular).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Development Services | CHORN",
        description: "Elevate your web applications with expert Angular development.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        // Core Angular & services Keywords
        "Angular development", "Angular technical-expertise", "Angular developer", "Angular development Thailand",
        "Angular development Bangkok", "Angular development Chiang Mai", "Angular development company",
        "custom Angular development", "custom software development", "enterprise Angular applications",

        // Web & Application Development Keywords
        "frontend development", "single-page applications", "dynamic user interfaces",
        "high-performance applications", "scalable web applications", "custom web applications",

        // Developer & Location-Specific Keywords
        "web developer", "full stack developer", "software engineer", "software developer Thailand",
        "Angular developer Thailand", "frontend developer Thailand", "web developer Bangkok", "Angular developer Chiang Mai",
        "Angular developer Bangkok", "Angular development company",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software",

        // Google
        "responsive web design in angular", "responsive web design angular", "angular responsive web design"
    ]
}