import React from "react";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import Web3PageMain from "@/components/Services/web3-blockchain-development/Web3PageMain";
import CloudExperience from "@/components/Common/CloudExperience";
import {headers} from "next/headers";
import {MetadataWeb3} from "@/metadata/main/MetadataWeb3";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataWeb3[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Web3PageMain lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Web3 Blockchain Smart Contract Development | CHORN | Custom Blockchain Solutions"
                description="Discover CHORN’s expertise in Web3 blockchain and smart contract development. CHORN build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask."
                url="https://chorn.in.th/technical-expertise/web3-blockchain-smart-contract-development/"
            />
        </>
    );
}