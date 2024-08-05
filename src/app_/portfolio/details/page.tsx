import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PortfolioDetailsContent from "../../../components/Portfolio/PortfolioDetailsContent";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Portfolio Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Details"
        BGImage="/images/page-banner/page-banner-4.jpg"
      />

      <PortfolioDetailsContent />

      <Footer />
    </>
  );
};

export default Page;
