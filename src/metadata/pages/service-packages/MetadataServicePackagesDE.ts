import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesDE: Metadata = {
    title: "Servicepakete | Systemanalyse & Full-Stack Softwareentwicklung",
    description: "Experten für Systemanalyse, Web2 & Web3 Entwicklung und technische Lösungen für Ihr Unternehmen.",
    keywords: [
        "CHORN", "CHORN Softwareentwicklung", "Software Outsourcing Deutschland", "Web3 Entwickler", "NFT Entwicklung", "Blockchain Entwicklung",
        "Full-Stack Entwickler", "Frontend Entwickler", "Backend Entwickler", "Softwarefirma Deutschland", "Systemintegration", "digitale Innovation",
        "Ethereum Entwicklung", "Next.js Entwickler", "Smart Contracts"
    ],
    alternates: metadataLink(LanguageCode.en, MetaLinks.servicePackages).alternates,
    authors: [
        {name: "CHORN"}
    ],
    openGraph: {
        title: "Servicepakete für moderne Web2 & Web3 Softwareentwicklung",
        description: "Stärken Sie Ihr Unternehmen mit skalierbaren Softwarelösungen von CHORN.",
        images: metadataLink(LanguageCode.de, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Führende Web2 & Web3 Entwicklerlösungen",
        description: "CHORN bietet technische Exzellenz für skalierbare, moderne Softwareentwicklung.",
        images: metadataLink(LanguageCode.de, MetaLinks.servicePackages).twitter.images,
    },
};