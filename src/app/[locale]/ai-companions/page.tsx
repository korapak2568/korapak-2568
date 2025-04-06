import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
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
            <AiCompanionsPage/>
            <Footer/>
        </>
    );
}

export default Page;
