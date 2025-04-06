import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import AiAomLandingPage from "@/components/AiCompanions/landing/AiAomLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiAom} from "@/metadata/pages/ai-aom/common/MetadataAiAom";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiAom[lang]
}

const Page = () => {
    return (
        <>
            <Navbar/>
            <AiAomLandingPage/>
            <Footer/>
        </>
    );
};

export default Page;
