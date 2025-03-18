import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiAomLandingPage from "@/components/AiCompanions/landing/AiAomLandingPage";

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.AiCompanions.aom.english.title}/>

            <AiAomLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
