import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import AiPloyLandingPage from "@/components/AiCompanions/Main/AiPloyLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiPloy} from "@/metadata/pages/ai-ploy/common/MetadataAiPloy";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiPloy[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <AiPloyLandingPage lang={lang}/>
            <Footer/>
        </>
    );
};

export default Page;
