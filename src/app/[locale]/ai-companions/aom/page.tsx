import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiAomLandingPage from "@/components/AiCompanions/landing/AiAomLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiAom} from "@/data/metadata/pages/aiAom/common/MetadataAiAom";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataAiAom[locale]
}

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.AiCompanions.aom.title}/>

            <AiAomLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
