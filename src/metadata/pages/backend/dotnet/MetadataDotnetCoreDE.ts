import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreDE: Metadata = {
    title: ".NET Core C# Full Stack Entwicklung | CHORN",
    description: ".NET Core C# Full Stack Entwicklung mit technischer Expertise zum Erstellen moderner, skalierbarer und sicherer Webanwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# Entwicklung | CHORN",
        description: "Erstellen Sie sichere, skalierbare und moderne Webanwendungen mit technischer Expertise in der .NET Core C# Full Stack Entwicklung.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.backend.dotnetcore).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# Full Stack Entwicklung | CHORN",
        description: "Technische Expertise in der .NET Core C# Full Stack Entwicklung für moderne und skalierbare Webanwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        ".NET Core C# Entwicklung", ".NET Core C# technische Expertise", ".NET Core C# Entwickler", "maßgeschneiderte .NET Core C# Entwicklung",
        "Unternehmens- .NET Core C# Anwendungen", "ASP.NET Core C# Entwicklung", ".NET Core C# Webanwendungen",
        "maßgeschneiderte Softwareentwicklung",

        "skalierbare Webanwendungen", "Backend-Entwicklung", "Unternehmenssoftwarelösungen", "Full Stack Entwicklung",
        "leistungsstarke Anwendungen", "maßgeschneiderte Webanwendungen", "API-Entwicklung",

        ".NET Core C# Entwickler Thailand", ".NET Core C# Entwickler Bangkok", ".NET Core C# Entwickler Chiang Mai",
        "Backend-Entwickler Thailand", "Softwareingenieur", "Softwareentwickler Thailand",

        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
