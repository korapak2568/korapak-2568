import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesDA: Metadata = {
    title: "Servicepakker | Systemanalyse og fuld-stack softwareudvikling",
    description: "Ekspertise inden for systemanalyse, moderne softwareløsninger og komplet udvikling til Web2 og Web3 applikationer.",
    keywords: [
        "CHORN", "CHORN softwareudvikling", "software outsourcing Danmark", "Web3 udvikler Danmark", "NFT udvikling", "blockchain softwareudvikling",
        "fuld-stack udvikler", "frontend udvikler", "backend udvikler", "udvikler team outsourcing", "systemintegration", "moderne softwareløsninger",
        "digital innovation Danmark", "outsourcing softwareudvikling", "Next.js udvikler", "React udvikler", "Ethereum udvikling"
    ],
    alternates: metadataLink(LanguageCode.en, MetaLinks.servicePackages).alternates,
    authors: [
        {name: "CHORN"}
    ],
    openGraph: {
        title: "Servicepakker til moderne Web2 og Web3 softwareudvikling",
        description: "Skaler din virksomhed med teknisk ekspertise, Web3 udvikling og smart systemdesign fra CHORN.",
        images: metadataLink(LanguageCode.da, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Eksperter i Web2 & Web3 softwareudvikling og systemanalyse",
        description: "Opnå forretningssucces med CHORN's moderne softwareudvikling og outsourcing services.",
        images: metadataLink(LanguageCode.da, MetaLinks.servicePackages).twitter.images,
    },
};