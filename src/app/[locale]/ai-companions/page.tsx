import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {MetadataAiFah} from "@/data/metadata/pages/aiFah/common/MetadataAiFah";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiFah[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <PageBanner pageTitle={InfoTranslation[lang].Service.demo.title}/>
            <AiCompanionsPage/>
            <Footer/>
        </>
    );
};

export default Page;
