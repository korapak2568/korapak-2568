import React from "react";
import AiPloyLandingPage from "@/components/AiCompanions/Main/AiPloyLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiPloy} from "@/metadata/main/MetadataAiPloy";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAiPloy[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <AiPloyLandingPage lang={lang}/>
            <AiSolutionsMain lang={lang}/>
        </>
    )
}