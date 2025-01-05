import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import CareFeaturesTwo from "../../components/Features/CareFeaturesTwo";
import DigitalMarketing from "../../components/Features/DigitalMarketing";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Features Two" />

      <CareFeaturesTwo />

      <DigitalMarketing />

      <SubscribeForm />

      <Footer />
    </>
  );
}
