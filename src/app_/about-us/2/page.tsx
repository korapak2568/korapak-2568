import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import TeamMemberStyleTwo from "../../../components/Common/TeamMemberStyleTwo";
import PriceTableTwo from "../../../components/PricingPlans/PriceTableTwo";
import TestimonialStyleThree from "../../../components/Common/TestimonialStyleThree";
import CloudExperience from "../../../components/Common/CloudExperience";
import Partners from "../../../components/Common/Partners";
import SubscribeForm from "../../../components/Common/SubscribeForm";
import AboutContentTwo from "@/components/About/AboutContentTwo";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us 2" />

      <AboutContentTwo />

      <TeamMemberStyleTwo />

      <PriceTableTwo />

      <TestimonialStyleThree />

      <div className="pt-100">
        <CloudExperience />
      </div>

      <SubscribeForm />

      <div className="pt-100">
        <Partners />
      </div>

      <Footer />
    </>
  );
}
