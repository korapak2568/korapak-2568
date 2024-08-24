"use client";

import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDotNetCore
    from "@/components/Services/fullstack-development/dotnetcore/ServicesDetailsDotNetCore";
import {INDEX} from "@/data/home/INDEX";

const Page = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={service.FULL_STACK_FRAMEWORK_INFO.additions[1].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={service.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={service.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsDotNetCore/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
