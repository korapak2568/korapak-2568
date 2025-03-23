import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiPloyLandingPage from "@/components/AiCompanions/landing/AiPloyLandingPage";
import {Metadata} from "next";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.aiPloy

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
