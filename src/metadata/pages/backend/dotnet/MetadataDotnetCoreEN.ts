import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreEN: Metadata = {
    title: ".NET Core C# Full Stack Development | CHORN",
    description: ".NET Core C# full stack development with technical expertise to build modern, scalable, and secure web applications.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# Development | CHORN",
        description: "Build secure, scalable, and modern web applications with .NET Core C# full stack development technical-expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.backend.dotnetcore).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# Full Stack Development | CHORN",
        description: "Expert .NET Core C# full stack development, technical expertise for modern and scalable web applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        // Core .NET Core C# & services Keywords
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