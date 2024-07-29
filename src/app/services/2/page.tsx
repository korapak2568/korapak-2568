import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCard2 from "../../../components/Services/ServicesCard2";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Two"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <ServicesCard2 />

      <WeWorkForIndustries />

      <Footer />
    </>
  );
};

export default Page;
