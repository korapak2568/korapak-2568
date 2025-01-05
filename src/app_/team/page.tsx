// src/app/team/page.tsx

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

      <PageBanner pageTitle="Team 1" />

      <TeamMember />

      <SubscribeForm />

      <Footer />
    </>
  );
}
