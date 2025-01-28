import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PortfolioThreeColumn from "../../../components/Portfolio/PortfolioThreeColumn";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Portfolio Three Column" />

      <PortfolioThreeColumn />

      <Footer />
    </>
  );
};

export default Page;
