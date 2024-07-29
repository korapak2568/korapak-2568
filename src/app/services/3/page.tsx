import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCard3 from "../../../components/Services/ServicesCard3";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Three"
        BGImage="/images/page-banner/page-banner-2.jpg"
      />

      <ServicesCard3 />

      <WeWorkForIndustries />

      <Footer />
    </>
  );
};

export default Page;
