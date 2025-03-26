import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AiFahLandingPage from "@/components/AiCompanions/landing/AiFahLandingPage";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiFah} from "@/data/metadata/pages/aiFah/common/MetadataAiFah";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataAiFah[locale]
}

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.AiCompanions.fah.title}/>

            <AiFahLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
