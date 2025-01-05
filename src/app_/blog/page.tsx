import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BlogTwoColumn from "../../components/Blog/BlogTwoColumn";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Two Column" />

      <BlogTwoColumn />

      <Footer />
    </>
  );
}
