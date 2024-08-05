import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import RegisterForm from "../../components/Auth/RegisterForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Register"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Register"
        BGImage="/images/page-banner/page-banner-4.jpg"
      />

      <RegisterForm />

      <SubscribeForm />

      <Footer />
    </>
  );
}
