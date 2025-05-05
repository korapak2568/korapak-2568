import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueEN: Metadata = {
    title: "Vue.js Development Services | CHORN",
    description: "Specializes in Vue.js development to create interactive and scalable web applications.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js Development | CHORN",
        description: "Expert Vue.js development, technical expertise for building modern web applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.frontend.vue).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js Development Services | CHORN",
        description: "Enhance your web applications with Vue.js with Vue.js development technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        // Core Vue.js & services Keywords
        "Vue.js development", "Vue.js technical-expertise", "Vue.js developer", "custom Vue.js development", "Vue.js applications",
        "Vue.js full stack development", "Vue.js single-page applications", "Vue.js user interfaces", "custom web applications",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "high-performance web applications",
        "dynamic user interfaces", "single-page applications", "Vue.js developer",

        // Developer & Location-Specific Keywords
        "Vue.js developer Thailand", "Vue.js developer Bangkok", "Vue.js developer Chiang Mai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}