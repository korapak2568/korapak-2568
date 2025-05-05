import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutFI: Metadata = {
    title: "Tietoa CHORNista | Järjestelmäanalyysi & Full-Stack ohjelmistokehitystekniikka",
    description: "Tutustu CHORNin asiantuntemukseen järjestelmäanalyysissä, full-stack kehityksessä ja moderneissa ohjelmistoratkaisuissa, jotka edistävät liiketoiminnan menestystä.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.about).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Asiantuntijat järjestelmäanalyysissä & Full-Stack ohjelmistokehitystekniikassa",
        description: "Tutustu CHORNin sitoutumiseen tarjota huippuluokan järjestelmämodernisointia, full-stack kehitystä ja teknistä tukea yrityksille.",
        images: metadataLink(LanguageCode.fi, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Johtava järjestelmäanalyysin & Full-Stack ohjelmistokehitystekniikan asiantuntija",
        description: "Vapauta liiketoimintapotentiaali CHORNin edistyksellisellä järjestelmäanalyysillä, full-stack kehityksellä ja moderneilla ohjelmistoratkaisuilla.",
        images: metadataLink(LanguageCode.fi, MetaLinks.about).twitter.images,
    },
}