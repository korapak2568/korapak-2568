import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PortfolioTwoColumn from "../../components/Portfolio/PortfolioTwoColumn";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Portfolio Two Column"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Two Column"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <PortfolioTwoColumn />

      <Footer />
    </>
  );
};

export default Page;
