import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainEN: Metadata = {
    title: "Frontend Development Services | CHORN",
    description: "CHORN provides expert frontend development technical-expertise, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Frontend Development Services | CHORN",
        description: "CHORN offers frontend development technical-expertise using modern technologies like Next.js, React, Angular, Vue, HTML5, and CSS3 to build fast, responsive, and scalable websites.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.frontend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend Development Services | CHORN",
        description: "Expert frontend development technical-expertise by CHORN, utilizing technologies like Next.js, React, Angular, Vue, HTML5, and CSS3 for responsive, scalable websites.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        // Core Frontend Development Keywords
        "frontend development", "frontend technical-expertise", "frontend developer", "custom frontend development",
        "dynamic user interfaces", "single-page applications", "responsive web design",
        "high-performance front-end applications", "custom software development",

        // Senior/Principal Developer Keywords (Combined Frameworks)
        "Senior React developer", "Principal Angular developer", "Senior Vue.js developer",
        "Senior Angular Node.js developer", "Senior React Spring Boot developer",
        "Principal .NET Angular frontend developer", "Senior React frontend developer",

        // Framework-Specific Frontend Keywords
        "React development", "Angular development", "Vue.js development", "Next.js frontend development",
        "React.js development", "custom Angular frontend development", "React.js frontend applications",
        "Vue.js frontend technical-expertise", "custom Vue.js development",

        // Developer & Location-Specific Keywords
        "frontend developer Thailand", "frontend developer Bangkok", "frontend developer Chiang Mai",
        "Senior frontend developer Thailand", "Principal frontend developer Thailand",
        "web developer Thailand", "web developer Bangkok", "software engineer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software", "scalable web applications"
    ]
}