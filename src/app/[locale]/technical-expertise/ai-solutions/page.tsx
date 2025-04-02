import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import AiSolutionsPage from "@/components/AiSolutions/AiSolutionsPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataLlmAi} from "@/metadata/pages/llm-ai/common/MetadataLlmAi";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataLlmAi[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <PageBanner pageTitle={InfoTranslation[lang].Service.title}/>
            <AiSolutionsPage/>
            <AiCompanionsPage/>
            <Footer/>
        </>
    );
};

export default Page;
