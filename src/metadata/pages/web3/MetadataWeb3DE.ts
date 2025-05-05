import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWeb3DE: Metadata = {
    title: "Web3 Blockchain Smart Contract Entwicklung | CHORN",
    description: "Web3 Blockchain- und Smart Contract-Entwicklung. Wir entwickeln dezentrale Anwendungen (DApps) mit Solidity, Ethereum, Polygon und integrieren Technologien wie Hardhat, Ganache und MetaMask.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.web3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Web3 Blockchain Smart Contract Entwicklungsdienste | CHORN",
        description: "Fachliche Expertise in Web3 Blockchain- und Smart Contract-Entwicklung, einschließlich der Erstellung von DApps mit Solidity, Ethereum, Polygon und Integration von Hardhat, Ganache und MetaMask.",
        images: metadataLink(LanguageCode.de, MetaLinks.web3).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.web3).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 Blockchain Smart Contract Entwicklung | CHORN",
        description: "Technische Expertise in Web3- und Blockchain-Smart-Contract-Entwicklung, mit der Erstellung von dezentralen Anwendungen (DApps) mit Solidity, Ethereum, Polygon und Integration von Hardhat, Ganache und MetaMask.",
        images: metadataLink(LanguageCode.de, MetaLinks.web3).twitter.images,
    },
    keywords: [
        "Web3 Entwicklung", "Blockchain Entwicklung", "Smart Contract Entwicklung", "Solidity Entwicklung",
        "Dezentrale Anwendungen", "DApp Entwicklung", "Ethereum Entwicklung", "Polygon Entwicklung",
        "Hardhat Entwicklung", "Ganache Entwicklung", "MetaMask Integration", "Blockchain Smart Contracts",
        "Custom Blockchain Entwicklung", "Blockchain Lösungen", "Custom Smart Contracts",
        "Solidity Smart Contracts", "Ethereum DApps", "Polygon Blockchain Entwicklung", "Hardhat Blockchain Tools",
        "Ganache Blockchain Tests", "MetaMask Integration", "Custom Ethereum Entwicklung", "Custom Polygon Entwicklung",
        "Blockchain Entwickler Deutschland", "Web3 Entwickler Deutschland", "Smart Contract Entwickler Deutschland",
        "Ethereum Entwickler Deutschland", "Solidity Entwickler Deutschland", "Senior Blockchain Entwickler Deutschland",
        "Principal Web3 Entwickler Deutschland", "DApp Entwickler Deutschland", "Software Ingenieur Deutschland",
        "CHORN", "Digitale Innovation", "Blockchain Technologie", "Skalierbare Blockchain Lösungen"
    ]
};
