import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PortfolioDetailsContent from "../../../components/Portfolio/PortfolioDetailsContent";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Portfolio Details" />

      <PortfolioDetailsContent />

      <Footer />
    </>
  );
};

export default Page;
