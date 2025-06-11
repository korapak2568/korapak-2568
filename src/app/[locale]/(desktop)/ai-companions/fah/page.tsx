import React from "react";
import AiFahLandingPage from "@/components/AiCompanions/Main/AiFahLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiFah} from "@/metadata/main/MetadataAiFah";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";

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
            <AiFahLandingPage lang={lang}/>
            <AiSolutionsMain lang={lang}/>
        </>
    );
}