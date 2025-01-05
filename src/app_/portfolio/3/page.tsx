import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PortfolioFourColumn from "../../../components/Portfolio/PortfolioFourColumn";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Portfolio Four Column" />

      <PortfolioFourColumn />

      <Footer />
    </>
  );
};

export default Page;
