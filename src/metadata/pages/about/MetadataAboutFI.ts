import {Metadata} from "next";
import {MetadataLinkAbout} from "@/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataAboutFI: Metadata = {
    title: "Tietoa CHORNista | Järjestelmäanalyysi & Full-Stack ohjelmistokehitystekniikka",
    description: "Tutustu CHORNin asiantuntemukseen järjestelmäanalyysissä, full-stack kehityksessä ja moderneissa ohjelmistoratkaisuissa, jotka edistävät liiketoiminnan menestystä.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Asiantuntijat järjestelmäanalyysissä & Full-Stack ohjelmistokehitystekniikassa",
        description: "Tutustu CHORNin sitoutumiseen tarjota huippuluokan järjestelmämodernisointia, full-stack kehitystä ja teknistä tukea yrityksille.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Johtava järjestelmäanalyysin & Full-Stack ohjelmistokehitystekniikan asiantuntija",
        description: "Vapauta liiketoimintapotentiaali CHORNin edistyksellisellä järjestelmäanalyysillä, full-stack kehityksellä ja moderneilla ohjelmistoratkaisuilla.",
        images: MetadataLinkAbout.twitter.images,
    },
}