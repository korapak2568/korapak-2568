import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PortfolioThreeColumn from "../../../components/Portfolio/PortfolioThreeColumn";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Portfolio Three Column"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Three Column"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <PortfolioThreeColumn />

      <Footer />
    </>
  );
};

export default Page;
