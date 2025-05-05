import {Metadata} from "next";
import {metadataLinkCloudSolution} from "@/metadata/metadataLink/MetadataLinkCloudSolution";
import {LanguageCode} from "@/data/translate/LanguageCode";

export const MetadataCloudSolutionFI: Metadata = {
    title: "Pilviratkaisujen arkkitehtuuri & Järjestelmäanalyysi | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN tarjoaa asiantuntemusta pilviratkaisujen arkkitehtuurissa ja järjestelmäanalyysissä. Optimoimme pilvi-infrastruktuurit AWS:ssä, Azuren, GCP:n ja DigitalOceanin ympäristöissä suorituskyvyn, skaalautuvuuden ja kustannustehokkuuden varmistamiseksi.",
    alternates: metadataLinkCloudSolution(LanguageCode.fi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Pilviratkaisujen arkkitehtuuri & Järjestelmäanalyysi | CHORN",
        description: "Tutustu CHORNin asiantuntemukseen pilviratkaisujen arkkitehtuurissa ja järjestelmäanalyysissä. Suunnittelemme kestäviä, skaalautuvia ja optimoituja pilviratkaisuja AWS:ssä, Azuren, GCP:n ja DigitalOceanin ympäristöissä.",
        images: metadataLinkCloudSolution(LanguageCode.fi).openGraph.images,
        url: metadataLinkCloudSolution(LanguageCode.fi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Pilviratkaisujen arkkitehtuuri & Järjestelmäanalyysi | CHORN",
        description: "Optimoi pilvi-infrastruktuurisi CHORNin asiantuntemuksella pilviratkaisujen arkkitehtuurissa ja järjestelmäanalyysissä AWS:n, Azuren, GCP:n ja DigitalOceanin ympäristöissä.",
        images: metadataLinkCloudSolution(LanguageCode.fi).twitter.images,
    },
    keywords: [
        "pilviratkaisujen arkkitehtuuri", "järjestelmäanalyysi", "AWS-arkkitehtuuri", "Azure-pilviratkaisut",
        "GCP-arkkitehtuuri", "DigitalOcean-infrastruktuuri", "pilvioptimointi", "monipilvistrategiat",
        "pilviskaalautuvuus", "pilvi-infrastruktuurin suunnittelu", "pilviturvallisuusanalyysi",

        "AWS-pilvikonsultointi", "Azure-järjestelmäintegraatio", "GCP-kustannusoptimointi", "DigitalOcean-ratkaisut",
        "pilvimigraatioasiantuntemus", "pilvisuorituskyvyn optimointi", "monipilvi-integraatio", "cloud-native sovellukset",

        "pilviarkkitehti Suomi", "AWS-arkkitehti Suomi", "Azure-arkkitehti Suomi", "GCP-arkkitehti Suomi",
        "DigitalOcean-kehittäjä Suomi", "järjestelmäanalyytikko Suomi", "pilvi-infrastruktuurin asiantuntija Suomi",

        "CHORN", "pilviratkaisut", "digitaalinen innovaatio", "pilvi-infrastruktuurin suunnittelu", "skaalautuvat pilvijärjestelmät"
    ]
}
