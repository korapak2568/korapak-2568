import {Metadata} from "next";
import {MetadataLinkContact} from "@/data/metadata/pages/contact/common/MetadataLinkContact";

export const MetadataWebDevelopmentFI: Metadata = {
    title: "Verkkokehityspalvelut | Räätälöidyt ohjelmisto- ja teknologiakokonaisuudet",
    description: "Tutustu CHORNin verkkokehityksen tekniseen asiantuntemukseen, mukaan lukien Next.js, React, Angular, Vue ja monia muita. CHORN tarjoaa räätälöityjä ratkaisuja yrityksille eri aloilla, kuten digitaalinen markkinointi, lohkoketjuteknologia, sähköinen kaupankäynti ja paljon muuta.",
    alternates: MetadataLinkContact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Parhaat verkkokehityspalvelut | CHORN",
        description: "CHORN tarjoaa verkkokehityksen asiantuntemusta suosituilla kehyksillä, kuten Next.js, React, Angular ja monia muita. CHORN täyttää monenlaiset liiketoimintatarpeet, kuten digitaalinen markkinointi, sähköinen kaupankäynti, lohkoketjuteknologia ja paljon muuta.",
        images: MetadataLinkContact.openGraph.images,
        url: MetadataLinkContact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Verkkokehityspalvelut | CHORN",
        description: "Tutustu CHORNin verkkokehityksen asiantuntemukseen. Next.js:stä Angulariin ja moniin muihin, CHORN tarjoaa ratkaisuja kaikkiin liiketoimintatarpeisiin, kuten digitaalinen markkinointi, lohkoketjuteknologia, sähköinen kaupankäynti ja paljon muuta.",
        images: MetadataLinkContact.twitter.images
    },
    keywords: [
        "verkkokehitys", "verkkokehityksen asiantuntemus", "verkkokehittäjä", "räätälöity verkkokehitys",
        "responsiivinen verkkokehitys", "dynaamiset verkkosivut", "yritystason verkkokehitys",
        "skaalautuvat verkkosovellukset", "räätälöidyt verkkosovellukset", "räätälöity ohjelmistokehitys",
        "senior full stack verkkokehittäjä", "principal verkkokehittäjä", "senior .NET Core Angular verkkokehittäjä",
        "senior React Node.js verkkokehittäjä", "principal React Java kehittäjä", "senior Angular Spring Boot kehittäjä",
        "principal PHP Laravel verkkokehittäjä", "senior verkkokehittäjä", ".NET Core verkkokehitys", "React verkkokehitys",
        "Angular verkkokehitys", "Vue.js verkkokehitys", "Node.js verkkokehitys", "Java Spring Boot verkkokehitys",
        "PHP Laravel verkkokehitys", "räätälöity React verkkokehitys", "yritystason Angular verkkokehitys",
        "verkkokehittäjä Thaimaa", "verkkokehittäjä Bangkok", "verkkokehittäjä Chiang Mai",
        "senior verkkokehittäjä Thaimaa", "principal verkkokehittäjä Thaimaa", "backend kehittäjä Thaimaa",
        "frontend kehittäjä Thaimaa", "ohjelmistoinsinööri Thaimaa", "CHORN", "digitaalinen innovaatio", "yritysohjelmisto", "skaalautuvat verkkosovellukset"
    ]
}