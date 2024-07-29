import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogFourColumn from "../../../components/Blog/BlogFourColumn";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Four Column"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Four Column"
        BGImage="/images/page-banner/page-banner-2.jpg"
      />

      <BlogFourColumn />

      <Footer />
    </>
  );
}
