import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWeb3DA: Metadata = {
    title: "Web3 Blockchain Smart Contract Udvikling | CHORN",
    description: "Web3 blockchain og smart contract udvikling. Vi bygger decentrale applikationer (DApps) ved hjælp af Solidity, Ethereum, Polygon og integrerer med teknologier som Hardhat, Ganache og MetaMask.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.web3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Web3 Blockchain Smart Contract Udviklingstjenester | CHORN",
        description: "Specialiseret teknisk ekspertise inden for Web3 blockchain og smart contract udvikling, herunder opbygning af DApps med Solidity, Ethereum, Polygon og integration med Hardhat, Ganache og MetaMask.",
        images: metadataLink(LanguageCode.da, MetaLinks.web3).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.web3).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 Blockchain Smart Contract Udvikling | CHORN",
        description: "Teknisk ekspertise inden for Web3 og blockchain smart contract udvikling, med oprettelse af decentrale applikationer (DApps) ved hjælp af Solidity, Ethereum, Polygon og integration med Hardhat, Ganache og MetaMask.",
        images: metadataLink(LanguageCode.da, MetaLinks.web3).twitter.images,
    },
    keywords: [
        "Web3 udvikling", "blockchain udvikling", "smart contract udvikling", "Solidity udvikling",
        "Decentrale applikationer", "DApp udvikling", "Ethereum udvikling", "Polygon udvikling",
        "Hardhat udvikling", "Ganache udvikling", "MetaMask integration", "blockchain smart contracts",
        "Tilpasset blockchain udvikling", "Blockchain løsninger", "Tilpasset smart contracts",
        "Solidity smart contracts", "Ethereum DApps", "Polygon blockchain udvikling", "Hardhat blockchain værktøjer",
        "Ganache blockchain test", "MetaMask integration", "Tilpasset Ethereum udvikling", "Tilpasset Polygon udvikling",
        "blockchain udvikler Danmark", "Web3 udvikler Danmark", "smart contract udvikler Danmark",
        "Ethereum udvikler Danmark", "Solidity udvikler Danmark", "Senior blockchain udvikler Danmark",
        "Principal Web3 udvikler Danmark", "DApp udvikler Danmark", "software engineer Danmark",
        "CHORN", "Digital innovation", "Blockchain teknologi", "Skalerbare blockchain løsninger"
    ]
};
