import {Metadata} from "next";
import {MetadataLinkWeb3} from "@/metadata/pages/web3/common/MetadataLinkWeb3";

export const MetadataWeb3FR: Metadata = {
    title: "Développement de Smart Contracts Web3 Blockchain | CHORN",
    description: "Développement Web3 blockchain et smart contract. Nous construisons des applications décentralisées (DApps) en utilisant Solidity, Ethereum, Polygon et intégrons des technologies telles que Hardhat, Ganache et MetaMask.",
    alternates: MetadataLinkWeb3.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services de développement de Smart Contracts Web3 Blockchain | CHORN",
        description: "Expertise technique spécialisée en développement Web3 blockchain et smart contract, y compris la création de DApps avec Solidity, Ethereum, Polygon, et l'intégration avec Hardhat, Ganache et MetaMask.",
        images: MetadataLinkWeb3.openGraph.images,
        url: MetadataLinkWeb3.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement de Smart Contracts Web3 Blockchain | CHORN",
        description: "Expertise technique en développement Web3 et smart contract blockchain, avec la création d'applications décentralisées (DApps) utilisant Solidity, Ethereum, Polygon et intégration avec Hardhat, Ganache et MetaMask.",
        images: MetadataLinkWeb3.twitter.images,
    },
    keywords: [
        "Développement Web3", "Développement blockchain", "Développement smart contract", "Développement Solidity",
        "Applications décentralisées", "Développement DApp", "Développement Ethereum", "Développement Polygon",
        "Développement Hardhat", "Développement Ganache", "Intégration MetaMask", "Smart contracts blockchain",
        "Développement blockchain personnalisé", "Solutions blockchain", "Smart contracts personnalisés",
        "Smart contracts Solidity", "DApps Ethereum", "Développement blockchain Polygon", "Outils blockchain Hardhat",
        "Tests blockchain Ganache", "Intégration MetaMask", "Développement personnalisé Ethereum", "Développement personnalisé Polygon",
        "Développeur blockchain France", "Développeur Web3 France", "Développeur smart contract France",
        "Développeur Ethereum France", "Développeur Solidity France", "Développeur blockchain senior France",
        "Développeur principal Web3 France", "Développeur DApp France", "Ingénieur logiciel France",
        "CHORN", "Innovation numérique", "Technologie blockchain", "Solutions blockchain évolutives"
    ]
};
