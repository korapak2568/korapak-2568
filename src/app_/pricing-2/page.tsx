import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import PriceTableTwo from "../../components/PricingPlans/PriceTableTwo";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing Two"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <div className="pt-100">
        <PriceTableTwo />
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
}
