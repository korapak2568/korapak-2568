import {Metadata} from "next";
import {MetadataLinkWeb3} from "@/metadata/pages/web3/common/MetadataLinkWeb3";

export const MetadataWeb3EN: Metadata = {
    title: "Web3 Blockchain Smart Contract Development | CHORN",
    description: "Web3 blockchain and smart contract development. We build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask.",
    alternates: MetadataLinkWeb3.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Web3 Blockchain Smart Contract Development Services | CHORN",
        description: "Specialized Web3 blockchain and smart contract development technical expertise, including building DApps with Solidity, Ethereum, Polygon, and integrating with Hardhat, Ganache, and MetaMask.",
        images: MetadataLinkWeb3.openGraph.images,
        url: MetadataLinkWeb3.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 Blockchain Smart Contract Development | CHORN",
        description: "Web3 and blockchain smart contract development technical expertise, with creating decentralized applications (DApps) with Solidity, Ethereum, Polygon, and integrate with Hardhat, Ganache, and MetaMask.",
        images: MetadataLinkWeb3.twitter.images,
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