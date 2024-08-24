import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";

export default function Page() {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Contact CHORN"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact CHORN"
                BGImage="/images/page-banner/page-banner-4.jpg"
            />

            <ContactInfo/>

            <ContactForm/>

            <SubscribeForm/>

            <Footer/>
        </>
    );
}
