import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiTonnamLandingPage from "@/components/AiCompanions/landing/AiTonnamLandingPage";

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.AiCompanions.tonnam.english.title}/>

            <AiTonnamLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
