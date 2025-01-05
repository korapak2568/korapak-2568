import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import PriceTable from "../../components/PricingPlans/PriceTable";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner  pageTitle="Pricing One" />

      <div className="pt-100">
        <PriceTable />
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
}
