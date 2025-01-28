import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PortfolioTwoColumn from "../../components/Portfolio/PortfolioTwoColumn";

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Portfolio Two Column"/>

            <PortfolioTwoColumn/>

            <Footer/>
        </>
    );
};

export default Page;
