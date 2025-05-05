import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreFI: Metadata = {
    title: ".NET Core C# Full Stack Kehitys | CHORN",
    description: ".NET Core C# full stack kehitys teknisellä asiantuntemuksella nykyaikaisten, skaalautuvien ja turvallisten web-sovellusten luomiseen.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# Kehitys | CHORN",
        description: "Rakenna turvallisia, skaalautuvia ja moderneja web-sovelluksia .NET Core C# full stack kehityksellä teknisellä asiantuntemuksella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.backend.dotnetcore).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# Full Stack Kehitys | CHORN",
        description: "Asiantunteva .NET Core C# full stack kehitys nykyaikaisille ja skaalautuville web-sovelluksille.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        ".NET Core C# kehitys", ".NET Core C# tekninen asiantuntemus", ".NET Core C# kehittäjä", "räätälöity .NET Core C# kehitys",
        "yrityksen .NET Core C# sovellukset", "ASP.NET Core C# kehitys", ".NET Core C# web-sovellukset",
        "räätälöity ohjelmistokehitys",

        "skaalautuvat web-sovellukset", "backend kehitys", "yritysohjelmistoratkaisut", "full stack kehitys",
        "korkean suorituskyvyn sovellukset", "räätälöidyt web-sovellukset", "API-kehitys",

        ".NET Core C# kehittäjä Thaimaa", ".NET Core C# kehittäjä Bangkok", ".NET Core C# kehittäjä Chiang Mai",
        "backend kehittäjä Thaimaa", "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",

        "CHORN", "digitaalinen innovaatio", "yritysohjelmistot"
    ]
}
