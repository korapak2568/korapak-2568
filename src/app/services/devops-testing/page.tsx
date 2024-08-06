import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardDevOpsTesting from "@/components/Services/devops-testing/ServicesCardDevOpsTesting";

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="DevOps and Testing"
                homePageUrl="/"
                homePageText="Home"
                activePageText="DevOps and Testing"
                BGImage="/images/page-banner/page-banner-1.jpg"
            />

            <ServicesCardDevOpsTesting/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>
        </>
    );
};

export default Page;
