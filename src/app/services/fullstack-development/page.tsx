"use client"

import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import ServicesCardFullStack from "@/components/Services/fullstack-development/ServicesCardFullStack";

const Page = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Full Stack Development"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Full Stack Development"
                BGImage={service.IMAGES.pageBanner.cover1.path}
            />

            <ServicesCardFullStack/>
            <WeWorkForIndustries/>
            <Footer/>
        </>
    );
};

export default Page;
