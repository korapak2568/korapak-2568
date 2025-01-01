// src/app/team/index.tsx

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import TeamMember from "../../components/Team/TeamMember";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team 1"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team 1"
        BGImage="/images/page-banner/page-banner-1.jpg"
      />

      <TeamMember />

      <SubscribeForm />

      <Footer />
    </>
  );
}
