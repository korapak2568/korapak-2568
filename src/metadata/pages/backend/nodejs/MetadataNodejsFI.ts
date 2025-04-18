import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsFI: Metadata = {
    title: "Node.js Full Stack Kehitys | CHORN",
    description: "Node.js full stack -kehitys, tekninen asiantuntemus tehokkaiden ja skaalautuvien verkkosovellusten rakentamiseen.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js Kehitys | CHORN",
        description: "Rakenna tehokkaita ja skaalautuvia verkkosovelluksia Node.js full stack -kehityksen asiantuntemuksella.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full Stack Kehitys | CHORN",
        description: "Node.js full stack -kehitysosaamista tehokkaille ja skaalautuville web-sovelluksille.",
        images: MetadataLinkNodejs.twitter.images
    },
    keywords: [
        "Node.js kehitys", "Node.js tekninen asiantuntemus", "Node.js kehittäjä", "räätälöity Node.js kehitys",
        "Node.js back-end kehitys", "Node.js full-stack kehitys", "Node.js mikropalvelut", "räätälöity ohjelmistokehitys",
        "skaalautuvat web-sovellukset", "back-end kehitys", "suorituskykyiset sovellukset",
        "yrityksen Node.js sovellukset", "API kehitys", "mikropalveluiden kehitys", "full-stack kehittäjä",
        "Node.js kehittäjä Thaimaa", "Node.js kehittäjä Bangkok", "Node.js kehittäjä Chiang Mai",
        "back-end kehittäjä Thaimaa", "full-stack kehittäjä Thaimaa", "ohjelmisto-insinööri", "ohjelmistokehittäjä Thaimaa",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmisto"
    ]
}
