import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "@/components/Common/PageBanner";

export default function Page() {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="404 Page Not Found"/>

            <Footer/>
        </>
    );
}
