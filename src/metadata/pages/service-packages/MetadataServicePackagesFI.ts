import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesFI: Metadata = {
    title: "Palvelupaketit | Järjestelmäanalyysi ja Full-Stack ohjelmistokehitys",
    description: "Asiantuntemusta Web2 ja Web3 ohjelmistokehityksessä, järjestelmäanalyysissä ja moderneissa teknologiaratkaisuissa.",
    keywords: [
        "CHORN", "CHORN ohjelmistokehitys", "ohjelmistojen ulkoistus", "Web3 kehittäjä", "NFT kehitys", "lohkoketjuohjelmistot",
        "Full-Stack kehittäjä", "Frontend kehittäjä", "Backend kehittäjä", "Next.js kehittäjä", "React kehittäjä", "älysopimukset",
        "järjestelmäintegraatio", "modernit ohjelmistoratkaisut", "ohjelmistokehitys Suomi"
    ],
    alternates: metadataLink(LanguageCode.en, MetaLinks.servicePackages).alternates,
    authors: [
        { name: "CHORN" }
    ],
    openGraph: {
        title: "Palvelupaketit nykyaikaiseen Web2 ja Web3 ohjelmistokehitykseen",
        description: "Kasvata liiketoimintaasi CHORNin asiantuntemuksella ja teknisellä tuella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Web2 ja Web3 ohjelmistokehityksen asiantuntijat",
        description: "CHORN tarjoaa huippuluokan ohjelmistokehityspalveluita yrityksille Suomessa ja kansainvälisesti.",
        images: metadataLink(LanguageCode.fi, MetaLinks.servicePackages).twitter.images,
    },
};