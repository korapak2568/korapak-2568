import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {GoogleSchemaProductSnippet} from "@/components/GoogleSchemaMarkup/ProductSnippet/GoogleSchemaProductSnippet";

export const metadata: Metadata = {
    title: "Web3 Blockchain Smart Contract Development | CHORN | Custom Blockchain Solutions",
    description: "Discover CHORN’s expertise in Web3 blockchain and smart contract development. We build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask.",
    openGraph: {
        title: "Top Web3 Blockchain Smart Contract Development Services | CHORN",
        description: "CHORN offers specialized Web3 blockchain and smart contract development services. Our expertise includes building DApps with Solidity, Ethereum, Polygon, and integrating with Hardhat, Ganache, and MetaMask.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/web3-blockchain-development.png",
                width: 1200,
                height: 630,
                alt: "Web3 Blockchain Smart Contract Development Services Banner",
            },
        ],
        url: "https://chorn.in.th/services/web3-blockchain-smart-contract-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 Blockchain Smart Contract Development | CHORN",
        description: "Explore CHORN’s Web3 and blockchain smart contract development services. We create decentralized applications (DApps) with Solidity, Ethereum, Polygon, and integrate with Hardhat, Ganache, and MetaMask.",
        images: ["https://chorn.in.th/chorn-images/metadata/web3-blockchain-development.png"],
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
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Web3 Blockchain Smart Contract"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Web3 Blockchain Smart Contract"
                BGImage="/images/page-banner/page-banner-1.jpg"
            />

            {/*<ServicesCardFrontEnd />*/}

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Web3 Blockchain Smart Contract Development | CHORN | Custom Blockchain Solutions"
                description="Discover CHORN’s expertise in Web3 blockchain and smart contract development. We build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask."
                url="https://chorn.in.th/services/web3-blockchain-smart-contract-development/"
            />
        </>
    );
};

export default Page;
