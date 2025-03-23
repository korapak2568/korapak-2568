import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiAomLandingPage from "@/components/AiCompanions/landing/AiAomLandingPage";
import {Metadata} from "next";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.aiAom

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
