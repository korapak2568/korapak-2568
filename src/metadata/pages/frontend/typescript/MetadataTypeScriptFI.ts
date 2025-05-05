import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTypeScriptFI: Metadata = {
    title: "TypeScript | CHORN - Räätälöidyn ohjelmistokehityksen asiantuntijat",
    description: "Hyödynnä TypeScriptiä rakentaaksesi skaalautuvia, vankkoja ja tehokkaita räätälöityjä ohjelmistoratkaisuja eri alojen yrityksille.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.typescript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Räätälöity ohjelmistokehitys TypeScriptillä",
        description: "TypeScript-asiantuntemus, tehokas työkalu skaalautuvien ja suorituskykyisten sovellusten rakentamiseen. Opi miksi valitsemme TypeScriptin räätälöityihin ohjelmistoratkaisuihin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.typescript).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.typescript).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript-kehitys räätälöityihin ohjelmistoratkaisuihin",
        description: "Hyödynnä TypeScriptiä tarjotaksesi skaalautuvia ja korkealaatuisia ohjelmistoratkaisuja, jotka on räätälöity yritysten tarpeiden mukaan.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.typescript).twitter.images,
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
