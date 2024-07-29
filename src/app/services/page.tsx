import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import WeWorkForIndustries from "../../components/Common/WeWorkForIndustries";
import ServicesCard from "../../components/Services/ServicesCard";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services One"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <ServicesCard />

      <WeWorkForIndustries />

      <Footer />
    </>
  );
};

export default Page;
