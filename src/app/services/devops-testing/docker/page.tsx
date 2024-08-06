"use client";

import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDocker from "@/components/Services/devops-testing/docker/ServicesDetailsDocker";

const Page = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={service.DEVOPS_TESTING_INFO.additions[0].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={service.DEVOPS_TESTING_INFO.title}
                BGImage={service.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsDocker/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
