import {Metadata} from "next";
import {MetadataLinkBlockchain} from "@/data/metadata/pages/blochchain/common/MetadataLinkBlockchain";

export const MetadataBlockchainEN: Metadata = {
    title: "Web3 Blockchain Smart Contract Development | CHORN | Custom Blockchain Solutions",
    description: "Discover CHORN’s expertise in Web3 blockchain and smart contract development. We build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask.",
    alternates: MetadataLinkBlockchain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Top Web3 Blockchain Smart Contract Development Services | CHORN",
        description: "CHORN offers specialized Web3 blockchain and smart contract development technical-expertise. CHORN expertise includes building DApps with Solidity, Ethereum, Polygon, and integrating with Hardhat, Ganache, and MetaMask.",
        images: MetadataLinkBlockchain.openGraph.images,
        url: MetadataLinkBlockchain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 Blockchain Smart Contract Development | CHORN",
        description: "Explore CHORN’s Web3 and blockchain smart contract development technical-expertise. CHORN creates decentralized applications (DApps) with Solidity, Ethereum, Polygon, and integrate with Hardhat, Ganache, and MetaMask.",
        images: MetadataLinkBlockchain.twitter.images,
    },
    keywords: [
        // Core Web3 & Blockchain Keywords
        "Web3 development", "blockchain development", "smart contract development", "Solidity development",
        "decentralized applications", "DApp development", "Ethereum development", "Polygon development",
        "Hardhat development", "Ganache development", "MetaMask integration", "blockchain smart contracts",
        "custom blockchain development", "blockchain solutions", "custom smart contracts",

        // Framework-Specific Keywords
        "Solidity smart contracts", "Ethereum DApps", "Polygon blockchain development", "Hardhat blockchain tools",
        "Ganache blockchain testing", "MetaMask integration", "custom Ethereum development", "custom Polygon development",

        // Developer & Location-Specific Keywords
        "blockchain developer Thailand", "Web3 developer Thailand", "smart contract developer Thailand",
        "Ethereum developer Thailand", "Solidity developer Thailand", "Senior blockchain developer Thailand",
        "Principal Web3 developer Thailand", "DApp developer Thailand", "software engineer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "blockchain technology", "scalable blockchain solutions"
    ]
}