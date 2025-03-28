import {Metadata} from "next";
import {MetadataLinkReact} from "@/data/metadata/pages/frontend/react/common/MetadataLinkReact";

export const MetadataReactFI: Metadata = {
    title: "React-kehityspalvelut | CHORN",
    description: "Huipputason React-kehitys teknisellä asiantuntemuksella, rakenna dynaamisia ja responsiivisia käyttöliittymiä Reactilla.",
    alternates: MetadataLinkReact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React-kehitys | CHORN",
        description: "Paranna verkkosovelluksiasi asiantuntevalla React-kehityksellä, tekninen asiantuntemus suorituskykyisiin sovelluksiin.",
        images: MetadataLinkReact.openGraph.images,
        url: MetadataLinkReact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React-kehityspalvelut | CHORN",
        description: "Asiantuntevaa React-kehitystä, teknistä asiantuntemusta houkuttelevien käyttöliittymien luomiseksi Reactilla.",
        images: MetadataLinkReact.twitter.images,
    },
    keywords: [
        "React-kehitys", "React-asiantuntemus", "React-kehittäjä", "Mukautettu React-kehitys", "React.js-sovellukset",
        "Full-stack React-kehitys", "React-yksisivuiset sovellukset", "React-käyttöliittymät", "Mukautetut verkkosovellukset",
        "Mukautettu ohjelmistokehitys",
        "Skaalautuvat verkkosovellukset", "Frontend-kehitys", "Suorituskykyiset verkkosovellukset",
        "Dynaamiset käyttöliittymät", "Yksisivuiset sovellukset", "React.js-kehittäjä",
        "React-kehittäjä Suomi", "React-kehittäjä Helsinki", "React-kehittäjä Tampere", "Frontend-kehittäjä Suomi",
        "Verkkokehittäjä Helsinki", "Ohjelmistoinsinööri", "Ohjelmistokehittäjä Suomi",
        "CHORN", "Digitaalinen innovaatio", "Yritysohjelmointi"
    ]
}
