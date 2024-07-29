import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import RelatedServices from "../../../components/Services/RelatedServices";
import ServicesDetailsContent from "../../../components/Services/ServicesDetailsContent";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Details"
        BGImage="/images/page-banner/page-banner-2.jpg"
      />

      <ServicesDetailsContent />

      <RelatedServices />

      <Footer />
    </>
  );
};

export default Page;
