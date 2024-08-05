import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import TeamMemberStyle2 from "../../components/Team/TeamMemberStyle2";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team 2"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team 2"
        BGImage="/images/page-banner/page-banner-2.jpg"
      />

      <TeamMemberStyle2 />

      <SubscribeForm />

      <Footer />
    </>
  );
}
