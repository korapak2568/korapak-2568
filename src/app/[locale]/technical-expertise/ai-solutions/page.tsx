import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import {Info} from "@/data/info/Info";
import AiSolutionsPage from "@/components/AiSolutions/AiSolutionsPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataLlmAi} from "@/data/metadata/pages/llmAi/common/MetadataLlmAi";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataLlmAi[locale]
}

const Page = () => {
    return (
        <>
            <Navbar/>
            <PageBanner pageTitle={Info.Service.title}/>
            <AiSolutionsPage/>
            <AiCompanionsPage/>
            <Footer/>
        </>
    );
};

export default Page;
