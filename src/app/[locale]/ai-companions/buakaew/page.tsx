import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiBuakaewLandingPage from "@/components/AiCompanions/landing/AiBuakaewLandingPage";

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.AiCompanions.buakaew.title}/>

            <AiBuakaewLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
