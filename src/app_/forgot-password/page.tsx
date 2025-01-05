import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import ForgotPasswordForm from "../../components/Auth/ForgotPasswordForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Forgot Password" />

      <ForgotPasswordForm />

      <SubscribeForm />

      <Footer />
    </>
  );
}
