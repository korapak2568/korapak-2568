import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreNL: Metadata = {
    title: ".NET Core C# Full Stack Ontwikkeling | CHORN",
    description: ".NET Core C# full stack ontwikkeling met technische expertise om moderne, schaalbare en veilige webapplicaties te bouwen.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# Ontwikkeling | CHORN",
        description: "Bouw veilige, schaalbare en moderne webapplicaties met technische expertise in .NET Core C# full stack ontwikkeling.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.backend.dotnetcore).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# Full Stack Ontwikkeling | CHORN",
        description: "Technische expertise in .NET Core C# full stack ontwikkeling voor moderne en schaalbare webapplicaties.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        ".NET Core C# ontwikkeling", ".NET Core C# technische expertise", ".NET Core C# ontwikkelaar", "maatwerk .NET Core C# ontwikkeling",
        "enterprise .NET Core C# applicaties", "ASP.NET Core C# ontwikkeling", ".NET Core C# webapplicaties",
        "maatwerk softwareontwikkeling",

        "schaalbare webapplicaties", "backend ontwikkeling", "enterprise softwareoplossingen", "full stack ontwikkeling",
        "hoogpresterende applicaties", "maatwerk webapplicaties", "API ontwikkeling",

        ".NET Core C# ontwikkelaar Thailand", ".NET Core C# ontwikkelaar Bangkok", ".NET Core C# ontwikkelaar Chiang Mai",
        "backend ontwikkelaar Thailand", "software engineer", "software ontwikkelaar Thailand",

        "CHORN", "digitale innovatie", "enterprise software"
    ]
}
