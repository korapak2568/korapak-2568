import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import FullStackExperience from "../../components/Common/FullStackExperience";
import WeWorkForIndustries from "../../components/Common/WeWorkForIndustries";
import CareFeatures from "../../components/Features/CareFeatures";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Features One" />

      <CareFeatures />

      <WeWorkForIndustries />

      <FullStackExperience />

      <SubscribeForm />

      <Footer />
    </>
  );
}
