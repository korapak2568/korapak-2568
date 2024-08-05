"use client";

import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import RelatedServices from "../../../../components/Services/RelatedServices";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import CloudExperience from "@/components/Common/CloudExperience";

const Page = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[0].title}
                BGImage={service.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsJava/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
