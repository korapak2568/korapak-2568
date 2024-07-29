import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import TeamMember from "../../components/Common/TeamMember";
import PriceTable from "../../components/PricingPlans/PriceTable";
import TestimonialStyleTwo from "../../components/Common/TestimonialStyleTwo";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import WhatWeDoingBest from "../../components/Index/WhatWeDoingBest";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import Partners from "../../components/Common/Partners";
import AboutContent from "../../components/AboutUs/AboutContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        BGImage="/images/page-banner/page-banner-2.jpg"
      />

      <AboutContent />

      <TeamMember />

      <PriceTable />

      <div className="pb-100">
        <TestimonialStyleTwo />
      </div>

      <FunFactsTwo />

      <WhatWeDoingBest />

      <LatestBlogPost />

      <SubscribeForm />

      <div className="pt-100">
        <Partners />
      </div>

      <Footer />
    </>
  );
}
