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
      <Navbar />

      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
        BGImage="/images/page-banner/page-banner-4.jpg"
      />

      <ContactInfo />

      <ContactForm />

      <SubscribeForm />

      <Footer />
    </>
  );
}
