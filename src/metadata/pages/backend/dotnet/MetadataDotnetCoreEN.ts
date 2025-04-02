import {Metadata} from "next";
import {MetadataLinkGo} from "@/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataDotnetCoreEN: Metadata = {
    title: ".NET Core C# Full Stack Development | CHORN",
    description: ".NET Core C# full stack development with technical expertise to build modern, scalable, and secure web applications.",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# Development | CHORN",
        description: "Build secure, scalable, and modern web applications with .NET Core C# full stack development technical-expertise.",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# Full Stack Development | CHORN",
        description: "Expert .NET Core C# full stack development, technical expertise for modern and scalable web applications.",
        images: MetadataLinkGo.twitter.images,
    },
    keywords: [
        // Core .NET Core C# & service Keywords
        ".NET Core C# development", ".NET Core C# technical-expertise", ".NET Core C# developer", "custom .NET Core C# development",
        "enterprise .NET Core C# applications", "ASP.NET Core C# development", ".NET Core C# web applications",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "enterprise software solutions", "full stack development",
        "high-performance applications", "custom web applications", "API development",

        // Developer & Location-Specific Keywords
        ".NET Core C# developer Thailand", ".NET Core C# developer Bangkok", ".NET Core C# developer Chiang Mai",
        "backend developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}