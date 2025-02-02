import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServicesCardWeb3Blockchain from "@/components/Services/web3-blockchain-development/ServicesCardWeb3Blockchain";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.blockchain

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.Web3.title}/>

            <ServicesCardWeb3Blockchain/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Web3 Blockchain Smart Contract Development | CHORN | Custom Blockchain Solutions"
                description="Discover CHORN’s expertise in Web3 blockchain and smart contract development. CHORN build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask."
                url="https://chorn.in.th/services/web3-blockchain-smart-contract-development/"
            />
        </>
    );
};

export default Page;
