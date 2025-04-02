import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AiPloyLandingPage from "@/components/AiCompanions/landing/AiPloyLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiPloy} from "@/metadata/pages/ai-ploy/common/MetadataAiPloy";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiPloy[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].AiCompanions.ploy.title}/>

            <AiPloyLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
