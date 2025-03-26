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
    const locale = headers().get('x-locale') || 'en';
    return MetadataAiFah[locale]
}

const Page = () => {
    const locale = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <PageBanner pageTitle={InfoTranslation[locale].Service.demo.title}/>
            <AiCompanionsPage/>
            <Footer/>
        </>
    );
};

export default Page;
