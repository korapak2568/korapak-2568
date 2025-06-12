import React from "react";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiFah} from "@/metadata/main/MetadataAiFah";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import AiFahLandingPage from "@/components/AiCompanions/Main/AiFahLandingPage";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAiFah[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <AiCompanionsPage lang={lang}/>
            <AiFahLandingPage lang={lang}/>
            <HomeFeatureMain lang={lang} isHideTopTitle={true}/>
        </>
    );
}