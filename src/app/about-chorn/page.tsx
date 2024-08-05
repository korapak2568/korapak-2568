"use client"

import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import AboutContent from "../../components/AboutUs/AboutContent";
import Recommendations from "@/components/Common/Recommendations";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";

export default function Page() {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="About CHORN"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About CHORN"
                BGImage="/images/page-banner/page-banner-2.jpg"
            />

            <AboutContent/>

            {/*<div className="pb-100">*/}
            {/*    <Recommendations/>*/}
            {/*</div>*/}

            <WeWorkForIndustries/>

            <Footer/>
        </>
    );
}
