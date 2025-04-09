import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle="Mobile App Development" />
      <Footer />
    </>
  );
};

export default Page;
