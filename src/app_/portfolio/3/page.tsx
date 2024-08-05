import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PortfolioFourColumn from "../../../components/Portfolio/PortfolioFourColumn";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Portfolio Four Column"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Four Column"
        BGImage="/images/page-banner/page-banner-2.jpg"
      />

      <PortfolioFourColumn />

      <Footer />
    </>
  );
};

export default Page;
