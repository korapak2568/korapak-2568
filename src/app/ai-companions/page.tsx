import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import AiCompanionsPage from "../../components/AiCompanions/AiCompanionsPage";

const Page = () => {
    return (
        <>
            <Navbar/>
            <PageBanner pageTitle="Thai Ai Chat Companions"/>
            <AiCompanionsPage/>
            <Footer/>
        </>
    );
};

export default Page;
