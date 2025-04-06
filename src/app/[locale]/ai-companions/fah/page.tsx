import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import AiFahLandingPage from "@/components/AiCompanions/landing/AiFahLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiFah} from "@/metadata/pages/ai-fah/common/MetadataAiFah";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAiFah[lang]
}

const Page = () => {

    return (
        <>
            <Navbar/>
            <AiFahLandingPage/>
            <Footer/>
        </>
    );
};

export default Page;
