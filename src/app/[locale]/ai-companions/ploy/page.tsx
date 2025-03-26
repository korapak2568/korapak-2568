import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiPloyLandingPage from "@/components/AiCompanions/landing/AiPloyLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiPloy} from "@/data/metadata/pages/aiPloy/common/MetadataAiPloy";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataAiPloy[locale]
}

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.AiCompanions.ploy.title}/>

            <AiPloyLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
