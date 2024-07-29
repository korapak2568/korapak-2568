import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import FaqContent from "../../components/Faq/FaqContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <FaqContent />

      <SubscribeForm />

      <Footer />
    </>
  );
}
