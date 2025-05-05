import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreDA: Metadata = {
    title: ".NET Core C# Full Stack Udvikling | CHORN",
    description: ".NET Core C# full stack udvikling med teknisk ekspertise til at bygge moderne, skalerbare og sikre webapplikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# Udvikling | CHORN",
        description: "Byg sikre, skalerbare og moderne webapplikationer med teknisk ekspertise i .NET Core C# full stack udvikling.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.backend.dotnetcore).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# Full Stack Udvikling | CHORN",
        description: "Teknisk ekspertise i .NET Core C# full stack udvikling til moderne og skalerbare webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        ".NET Core C# udvikling", ".NET Core C# teknisk ekspertise", ".NET Core C# udvikler", "tilpasset .NET Core C# udvikling",
        "enterprise .NET Core C# applikationer", "ASP.NET Core C# udvikling", ".NET Core C# webapplikationer",
        "tilpasset softwareudvikling",

        "skalerbare webapplikationer", "backend udvikling", "enterprise softwareløsninger", "full stack udvikling",
        "højtydende applikationer", "tilpassede webapplikationer", "API udvikling",

        ".NET Core C# udvikler Thailand", ".NET Core C# udvikler Bangkok", ".NET Core C# udvikler Chiang Mai",
        "backend udvikler Thailand", "softwareingeniør", "softwareudvikler Thailand",

        "CHORN", "digital innovation", "enterprise software"
    ]
}
