import {Metadata} from "next";
import {MetadataLinkGo} from "@/data/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataGoFI: Metadata = {
    title: "Go Full Stack Kehitys | CHORN",
    description: "Go full stack kehitys, tekninen asiantuntemus tehokkaiden ja skaalautuvien verkkosovellusten rakentamiseen.",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Kehitys | CHORN",
        description: "Rakenna tehokkaita ja skaalautuvia verkkosovelluksia Go full stack kehityksen teknisen asiantuntemuksen avulla.",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Kehitys | CHORN",
        description: "Go full stack kehityksen asiantuntemus tehokkaille ja skaalautuville verkkosovelluksille.",
        images: MetadataLinkGo.twitter.images,
    },
    keywords: [
        "Go-lang kehitys", "Go tekninen asiantuntemus", "Go kehittäjä", "räätälöity Go-lang kehitys", "Go verkkosovellukset",
        "Go backend kehitys", "Go mikropalvelut", "räätälöity ohjelmistokehitys",
        "skaalautuvat verkkosovellukset", "backend kehitys", "suorituskykyiset sovellukset",
        "mikropalvelut kehitys", "cloud-native kehitys", "API kehitys", "enterprise ohjelmisto",
        "Go kehittäjä Thaimaa", "Go kehittäjä Bangkok", "Go kehittäjä Chiang Mai", "backend kehittäjä Thaimaa",
        "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",
        "CHORN", "digitaalinen innovaatio", "enterprise ohjelmisto"
    ]
}
