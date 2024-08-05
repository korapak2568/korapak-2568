"use client"

import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "../../../components/Services/frontend-development/ServicesCardFrontEnd";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import CloudExperience from "@/components/Common/CloudExperience";

const Page = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Front End Development"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Front End Development"
                BGImage={service.IMAGES.pageBanner.cover1.path}
            />

            <ServicesCardFrontEnd/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>
        </>
    );
};

export default Page;
