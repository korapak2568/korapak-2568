import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import AiSolutionsPage from "@/components/AiSolutions/AiSolutionsPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataLlmAi} from "@/metadata/pages/llm-ai/common/MetadataLlmAi";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataLlmAi[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <AiSolutionsPage lang={lang}/>
            <AiCompanionsPage/>
        </>
    );
};

export default Page;
