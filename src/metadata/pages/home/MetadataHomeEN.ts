import {Metadata} from "next";
import {MetadataLinkHome} from "@/metadata/pages/home/common/MetadataLinkHome";

export const MetadataHomeEN: Metadata = {
    title: "CHORN | Enterprise Software Development and System Integration",
    description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud, and system modernization to drive innovation and efficiency.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkHome.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN | Enterprise Software Development and System Integration",
        description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud, and system modernization to drive innovation and efficiency.",
        images: MetadataLinkHome.openGraph.images,
        url: MetadataLinkHome.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Enterprise Software Development and System Integration",
        description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud, and system modernization to drive innovation and efficiency.",
        images: MetadataLinkHome.twitter.images,
    },
    keywords: [
        // Brand Keywords
        "CHORN", "CHORN custom software development", "CHORN software outsourcing", "What is chorn",
        "CHORN software development thailand", "CHORN software developer Chiang Mai", "CHORN software developer bangkok",

        // Core service Keywords
        "custom software development", "custom software development companies", "software outsourcing",
        "software outsourcing technical-expertise", "software development outsourcing", "software development outsourcing companies",
        "top software outsourcing companies", "web development outsourcing companies", "IT development companies",
        "outsourcing development company", "outsourcing thailand", "outsourcing company in thailand",
        "software development Chiang Mai", "software outsourcing Chiang Mai", "software outsourcing bangkok",

        // Developer & Technical Roles
        "software engineer", "software developer", "frontend developer", "backend developer", "full stack developer",
        "web developer", "mobile developer", "react-developer developer", "angular-developer developer", "java developer",
        "node.js developer", ".net core developer", "php-developer developer", "API developer", "blockchain developer",
        "web3 developer", "microservices developer", "digital innovation", "enterprise software", "scalable websites",

        // Developer Locations
        "software developer thailand", "software developer Chiang Mai", "software developer bangkok",
        "software engineer thailand", "frontend developer thailand", "backend developer thailand",
        "full stack developer thailand", "web developer jobs in thailand", "mobile developer thailand",
        "full stack developer Chiang Mai", "software developer remote jobs", "outsourcing programmers thailand",

        // Senior Leadership & Engineering Roles
        "head of engineering", "head of engineering department thailand", "director of engineering",
        "director of engineering thailand", "head of software development", "head of software development thailand",
        "head of software engineering", "head of software engineering thailand", "IT project manager",
        "software development manager", "head of technology", "system analyst",

        // Technologies & Frameworks
        "nextjs-developer", "react-developer.js", "spring boot", "front end framework", "front end architecture",
        "full stack web developer", "front end back end development", "microservices",

        // Outsourcing-Related Keywords
        "outsourcing development", "outsourcing company in thailand", "outsourcing programming",
        "outsourcing programming tasks", "outsourcing program jobs", "outsourcing program task",
        "outsourcing program online"
    ]
}