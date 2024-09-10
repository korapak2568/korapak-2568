import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsTypeScript
    from "@/components/Services/fullstack-development/typescript/ServicesDetailsTypeScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[1].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsTypeScript/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
