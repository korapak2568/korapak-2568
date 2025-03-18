import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";

const Page = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Mobile App Development" />

      <WeWorkForIndustries />

      <Footer />
    </>
  );
};

export default Page;
