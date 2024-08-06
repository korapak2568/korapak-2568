"use client";

import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import RelatedServices from "../../../../components/Services/RelatedServices";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import CloudExperience from "@/components/Common/CloudExperience";

const Page = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={service.FRONT_END_EXPERIENCE_INFO.additions[3].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={service.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={service.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsVue/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
