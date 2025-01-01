import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "@/components/Common/PageBanner";

export default function Index() {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="404 Index Not Found"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Sorry, the page you are looking for doesn't exist."
                BGImage=""
            />

            <Footer/>
        </>
    );
}
