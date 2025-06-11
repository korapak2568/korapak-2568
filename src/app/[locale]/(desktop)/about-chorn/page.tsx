import AboutContent from "@/components/About/AboutContent";
import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAbout} from "@/metadata/main/MetadataAbout";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import CloudExperience from "@/components/Common/CloudExperience";
import React from "react";
import HomeBackEndContainer from "@/components/Common/HomeBackEnd/HomeBackEndContainer";
import Web3PageMain from "@/components/Services/web3-blockchain-development/Web3PageMain";
import HomeFrontEndContainer from "@/components/Common/HomeFrontEnd/HomeFrontEndContainer";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAbout[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <AboutContent lang={lang}/>
            <AiSolutionsMain lang={lang}/>
            <CloudExperience lang={lang}/>
            <Web3PageMain lang={lang}/>
            <HomeBackEndContainer lang={lang} isRemoveTopSpace={true}/>
            <HomeFrontEndContainer lang={lang}/>
            <SchemaMarkupServicePage
                name="About Us | CHORN - Custom Software Development Experts"
                description="Discover CHORN's innovative custom software development solutions and how we empower industries with cutting-edge technology."
                url="https://chorn.in.th/about-chorn/"
            />
        </>
    );
}
