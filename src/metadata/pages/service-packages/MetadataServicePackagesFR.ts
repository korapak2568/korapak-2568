import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesFR: Metadata = {
    title: "Forfaits de services | Analyse système et développement logiciel Full-Stack",
    description: "Expertise en analyse de systèmes, développement Web2/Web3 et solutions logicielles modernes pour les entreprises.",
    keywords: [
        "CHORN", "CHORN développement logiciel", "externalisation logiciel France", "développeur Web3", "développement NFT", "développement blockchain",
        "développeur full-stack", "développeur frontend", "développeur backend", "solutions numériques innovantes", "Next.js développeur", "développeur React",
        "intégration système", "contrats intelligents", "développement logiciel France"
    ],
    alternates: metadataLink(LanguageCode.en, MetaLinks.servicePackages).alternates,
    authors: [
        {name: "CHORN"}
    ],
    openGraph: {
        title: "Forfaits de développement logiciel Web2 et Web3 modernes",
        description: "Faites évoluer votre entreprise grâce aux services de développement logiciel avancés de CHORN.",
        images: metadataLink(LanguageCode.fr, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Experts en développement logiciel Web2 & Web3",
        description: "Solutions techniques CHORN pour les entreprises cherchant à innover avec Web2/Web3 et blockchain.",
        images: metadataLink(LanguageCode.fr, MetaLinks.servicePackages).twitter.images,
    },
};