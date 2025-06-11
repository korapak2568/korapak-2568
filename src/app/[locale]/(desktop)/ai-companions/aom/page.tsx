import React from "react";
import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiAom} from "@/metadata/main/MetadataAiAom";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAiAom[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <AiAomLandingPage lang={lang}/>
            <AiSolutionsMain lang={lang}/>
        </>
    )
}