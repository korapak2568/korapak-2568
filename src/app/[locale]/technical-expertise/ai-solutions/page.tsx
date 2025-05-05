import React from "react";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataLlmAi} from "@/metadata/main/MetadataLlmAi";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataLlmAi[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <AiSolutionsMain lang={lang}/>
            <AiCompanionsPage lang={lang}/>
        </>
    )
}