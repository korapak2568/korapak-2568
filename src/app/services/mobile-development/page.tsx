import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "../../../components/Services/frontend-development/ServicesCardFrontEnd";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Mobile App Development"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Mobile App Development"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      {/*<ServicesCardFrontEnd />*/}

      <WeWorkForIndustries />

      <Footer />
    </>
  );
};

export default Page;
