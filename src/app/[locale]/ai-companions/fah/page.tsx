import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AiFahLandingPage from "@/components/AiCompanions/landing/AiFahLandingPage";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.aiFah

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
