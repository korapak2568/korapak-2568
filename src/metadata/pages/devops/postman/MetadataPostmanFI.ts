import {Metadata} from "next";
import {MetadataLinkPostman} from "@/metadata/pages/devops/postman/common/MetadataLinkPostman";

export const MetadataPostmanFI: Metadata = {
    title: "Postman API-testauspalvelut | CHORN",
    description: "Tarjoa teknistä asiantuntemusta API-testeissä käyttäen Postmania varmistaaksesi verkkoteknologiasi luotettavuuden ja suorituskyvyn.",
    alternates: MetadataLinkPostman.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API-testauspalvelut | CHORN",
        description: "Varmista, että API:si toimivat odotetusti Postman-pohjaisen API-testauksen teknisen asiantuntemuksen avulla.",
        images: MetadataLinkPostman.openGraph.images,
        url: MetadataLinkPostman.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API-testauspalvelut | CHORN",
        description: "Postman-pohjainen API-testauksen asiantuntemus, joka validoi verkkoteknologiasi luotettavuuden ja suorituskyvyn.",
        images: MetadataLinkPostman.twitter.images,
    },
    keywords: [
        "Postman API-testaus", "Postman tekninen asiantuntemus", "API-testaus", "DevOps", "Automaattinen API-testaus", "CHORN",
        "Verkkoteknologian testaus", "API-suorituskyky", "Mukautettu ohjelmistokehitys", "DevOps Suomi"
    ]
}
