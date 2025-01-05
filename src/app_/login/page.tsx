import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import LoginForm from "../../components/Auth/LoginForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Login" />

      <LoginForm />

      <SubscribeForm />

      <Footer />
    </>
  );
}
