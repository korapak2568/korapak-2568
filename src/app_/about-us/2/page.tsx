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
import AboutContentTwo from "../../../components/AboutUs/AboutContentTwo";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us 2"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us 2"
        BGImage="/images/page-banner/page-banner-4.jpg"
      />

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
