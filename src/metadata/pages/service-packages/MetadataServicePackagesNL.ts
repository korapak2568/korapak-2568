import { Metadata } from "next";
import { metadataLink } from "@/metadata/metadataLink/metadataLink";
import { LanguageCode } from "@/data/translate/LanguageCode";
import { MetaLinks } from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesNL: Metadata = {
    title: "Servicepakketten | Systeemanalyse & Full-Stack Softwareontwikkeling",
    description: "CHORN biedt flexibele servicepakketten voor innovatieve softwareontwikkeling, Web3, NFT en blockchain.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.servicePackages).alternates,
    authors: [{ name: "CHORN" }],
    openGraph: {
        title: "Servicepakketten voor Moderne Softwareontwikkeling",
        description: "Van fulltime toegewijde pakketten tot gedeelde ondersteuning voor groeiende projecten, inclusief Web3 en NFT's.",
        images: metadataLink(LanguageCode.nl, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN Servicepakketten voor Web3 & Softwareontwikkeling",
        description: "Flexibele en hoogwaardige software- en blockchainontwikkeling met CHORN.",
        images: metadataLink(LanguageCode.nl, MetaLinks.servicePackages).twitter.images,
    },
    keywords: [
        // Merken en CHORN-gerelateerde zoekwoorden
        "CHORN", "CHORN maatwerk softwareontwikkeling", "CHORN software outsourcing", "Wat is CHORN",
        "CHORN softwareontwikkeling Thailand", "CHORN ontwikkelaar Chiang Mai", "CHORN ontwikkelaar Bangkok",

        // Kernservices
        "maatwerk softwareontwikkeling", "software outsourcing bedrijven", "softwareontwikkeling uitbesteden",
        "webontwikkeling outsourcing", "IT ontwikkelbedrijven Thailand", "software outsourcing Bangkok",

        // Technische rollen
        "software engineer", "frontend developer", "backend developer", "full-stack developer",
        "webdeveloper", "React ontwikkelaar", "Java ontwikkelaar", "Node.js ontwikkelaar", "API ontwikkelaar",
        "blockchain ontwikkelaar", "Web3 ontwikkelaar", "microservices ontwikkelaar", "enterprise software",

        // Technologieën en frameworks
        "Next.js ontwikkelaar", "React.js ontwikkelaar", "Spring Boot", "frontend architectuur", "Web3 ontwikkeling"
    ]
};