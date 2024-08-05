import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BlogTwoColumn from "../../components/Blog/BlogTwoColumn";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Two Column"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Two Column"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <BlogTwoColumn />

      <Footer />
    </>
  );
}
