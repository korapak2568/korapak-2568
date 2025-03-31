import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AiAomLandingPage from "@/components/AiCompanions/landing/AiAomLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiAom} from "@/data/metadata/pages/aiAom/common/MetadataAiAom";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiAom[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].AiCompanions.aom.title}/>

            <AiAomLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
