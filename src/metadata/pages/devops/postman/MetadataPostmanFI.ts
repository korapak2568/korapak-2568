import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanFI: Metadata = {
    title: "Postman API-testauspalvelut | CHORN",
    description: "Tarjoa teknistä asiantuntemusta API-testeissä käyttäen Postmania varmistaaksesi verkkoteknologiasi luotettavuuden ja suorituskyvyn.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API-testauspalvelut | CHORN",
        description: "Varmista, että API:si toimivat odotetusti Postman-pohjaisen API-testauksen teknisen asiantuntemuksen avulla.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.postman).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API-testauspalvelut | CHORN",
        description: "Postman-pohjainen API-testauksen asiantuntemus, joka validoi verkkoteknologiasi luotettavuuden ja suorituskyvyn.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Postman API-testaus", "Postman tekninen asiantuntemus", "API-testaus", "DevOps", "Automaattinen API-testaus", "CHORN",
        "Verkkoteknologian testaus", "API-suorituskyky", "Mukautettu ohjelmistokehitys", "DevOps Suomi"
    ]
}
