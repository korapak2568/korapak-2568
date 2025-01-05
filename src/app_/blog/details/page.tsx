import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Details" />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
