import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "../../../components/Services/frontend-development/ServicesCardFrontEnd";
import CloudExperience from "@/components/Common/CloudExperience";

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Web Development Service"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Web Development"
                BGImage="/images/page-banner/page-banner-1.jpg"
            />

            <ServicesCardFrontEnd/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>
        </>
    );
};

export default Page;
