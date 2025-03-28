import {Metadata} from "next";
import {MetadataLinkNextjs} from "@/data/metadata/pages/frontend/nextjs/common/MetadataLinkNextjs";

export const MetadataNextjsFI: Metadata = {
    title: "Next.js Kehityspalvelut | CHORN",
    description: "Next.js kehityspalvelut, paranna verkkosovelluksiasi skaalautuvilla ja suorituskykyisillä ratkaisuilla käyttäen Next.js:ää.",
    alternates: MetadataLinkNextjs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js Kehitys | CHORN",
        description: "Erikoistunut Next.js kehitys, tekninen asiantuntemus nopeiden ja skaalautuvien verkkosovellusten luomiseen.",
        images: MetadataLinkNextjs.openGraph.images,
        url: MetadataLinkNextjs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Kehityspalvelut | CHORN",
        description: "Paranna verkkosovelluksiasi Next.js kehityksen asiantuntemuksella.",
        images: MetadataLinkNextjs.twitter.images,
    },
    keywords: [
        "Next.js kehitys", "Next.js tekninen asiantuntemus", "Next.js kehittäjä", "räätälöity Next.js kehitys", "server-side rendering",
        "Next.js full stack kehitys", "Next.js SEO optimointi", "Next.js sovellukset", "räätälöidyt verkkosovellukset",
        "skaalautuvat verkkosovellukset", "frontend kehitys", "suorituskykyiset verkkosovellukset",
        "single-page sovellukset", "dynaamiset käyttöliittymät", "full stack kehittäjä", "räätälöity ohjelmistokehitys",
        "Next.js kehittäjä Suomi", "Next.js kehittäjä Helsinki", "Next.js kehittäjä Tampere", "frontend kehittäjä Suomi",
        "webkehittäjä Helsinki", "ohjelmistosuunnittelija", "ohjelmistokehittäjä Suomi",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmistot"
    ]
}
