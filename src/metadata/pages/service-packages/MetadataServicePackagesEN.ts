import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesEN: Metadata = {
    title: "Service Packages | Full-Time, Web3, NFT & Urgent Software Support",
    description: "Explore flexible service packages including full-time, shared-time, Web3, NFT development, and urgent bug fixing — tailored to your business goals.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.servicePackages).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Flexible Service Packages | Full-Time, Web3, NFT & Urgent Software Solutions",
        description: "Choose from Platinum, Gold, Premium, and Super Urgent service packages to match your software needs — from MVPs to blockchain innovation.",
        images: metadataLink(LanguageCode.en, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Explore Service Packages | Full-Stack, Web3, NFT & Urgent Fixes",
        description: "Offers software development packages designed for startups and enterprises — including urgent fixes and long-term solutions.",
        images: metadataLink(LanguageCode.en, MetaLinks.servicePackages).twitter.images,
    },
};