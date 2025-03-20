import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import {Info} from "@/data/info/Info";
import AiMilkLandingPage from "@/components/AiCompanions/landing/AiMilkLandingPage";

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.AiCompanions.milk.title}/>

            <AiMilkLandingPage/>

            <Footer/>
        </>
    );
};

export default Page;
