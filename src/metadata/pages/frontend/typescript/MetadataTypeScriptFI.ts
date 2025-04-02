import {Metadata} from "next";
import {MetadataLinkTypeScript} from "@/metadata/pages/frontend/typescript/common/MetadataLinkTypeScript";

export const MetadataTypeScriptFI: Metadata = {
    title: "TypeScript | CHORN - Räätälöidyn ohjelmistokehityksen asiantuntijat",
    description: "Hyödynnä TypeScriptiä rakentaaksesi skaalautuvia, vankkoja ja tehokkaita räätälöityjä ohjelmistoratkaisuja eri alojen yrityksille.",
    alternates: MetadataLinkTypeScript.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Räätälöity ohjelmistokehitys TypeScriptillä",
        description: "TypeScript-asiantuntemus, tehokas työkalu skaalautuvien ja suorituskykyisten sovellusten rakentamiseen. Opi miksi valitsemme TypeScriptin räätälöityihin ohjelmistoratkaisuihin.",
        images: MetadataLinkTypeScript.openGraph.images,
        url: MetadataLinkTypeScript.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript-kehitys räätälöityihin ohjelmistoratkaisuihin",
        description: "Hyödynnä TypeScriptiä tarjotaksesi skaalautuvia ja korkealaatuisia ohjelmistoratkaisuja, jotka on räätälöity yritysten tarpeiden mukaan.",
        images: MetadataLinkTypeScript.twitter.images,
    },
    keywords: [
        "TypeScript-kehitys", "TypeScript-asiantuntemus", "TypeScript-kehittäjä", "Räätälöity TypeScript-kehitys",
        "TypeScript-websovellukset", "TypeScript Full Stack -kehitys", "TypeScript Frontend-kehitys",
        "Räätälöity ohjelmistokehitys",
        "Skaalautuvat websovellukset", "Frontend-kehitys", "Backend-kehitys",
        "Korkean suorituskyvyn sovellukset", "Yritysohjelmistoratkaisut", "Räätälöidyt websovellukset", "API-kehitys",
        "TypeScript-kehittäjä Thaimaa", "TypeScript-kehittäjä Bangkok", "TypeScript-kehittäjä Chiang Mai",
        "Frontend-kehittäjä Thaimaa", "Backend-kehittäjä Thaimaa", "Full Stack -kehittäjä Thaimaa",
        "Ohjelmistoinsinööri", "Ohjelmistokehittäjä Thaimaa",
        "CHORN", "Digitaalinen innovaatio", "Yritysohjelmisto"
    ]
}
