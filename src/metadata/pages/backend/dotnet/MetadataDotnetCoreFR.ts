import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreFR: Metadata = {
    title: "Développement Full Stack .NET Core C# | CHORN",
    description: "Développement Full Stack .NET Core C# avec une expertise technique pour créer des applications web modernes, évolutives et sécurisées.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement .NET Core C# | CHORN",
        description: "Construisez des applications web sécurisées, évolutives et modernes grâce à l'expertise technique du développement Full Stack .NET Core C#.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.backend.dotnetcore).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement Full Stack .NET Core C# | CHORN",
        description: "Expertise technique du développement Full Stack .NET Core C# pour des applications web modernes et évolutives.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        ".NET Core C# développement", ".NET Core C# expertise technique", ".NET Core C# développeur", "développement .NET Core C# personnalisé",
        "applications .NET Core C# pour entreprises", "développement ASP.NET Core C#", ".NET Core C# applications web",
        "développement de logiciels personnalisés",

        "applications web évolutives", "développement backend", "solutions logicielles pour entreprises", "développement Full Stack",
        "applications haute performance", "applications web personnalisées", "développement d'API",

        ".NET Core C# développeur Thaïlande", ".NET Core C# développeur Bangkok", ".NET Core C# développeur Chiang Mai",
        "développeur backend Thaïlande", "ingénieur logiciel", "développeur logiciel Thaïlande",

        "CHORN", "innovation numérique", "logiciels pour entreprises"
    ]
}
