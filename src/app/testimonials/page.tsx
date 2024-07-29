import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import TestimonialStyleTwo from "../../components/Common/TestimonialStyleTwo";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        BGImage="/images/page-banner/page-banner-4.jpg"
      />

      <div className="ptb-100">
        <TestimonialStyleTwo />
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
}
