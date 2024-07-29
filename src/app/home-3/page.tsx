import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/IndexThree/MainBanner";
import AboutContent from "../../components/IndexThree/AboutContent";
import Features from "../../components/IndexThree/Features";
import ServicesStyleTwo from "../../components/Common/ServicesStyleTwo";
import OurProjectStyleTwo from "../../components/Common/OurProjectStyleTwo";
import TeamMember from "../../components/Common/TeamMember";
import PriceTable from "../../components/PricingPlans/PriceTable";
import TestimonialStyleTwo from "../../components/Common/TestimonialStyleTwo";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import Partners from "../../components/Common/Partners";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutContent />

      <Features />

      <ServicesStyleTwo />

      <OurProjectStyleTwo />

      <TeamMember />

      <PriceTable />

      <TestimonialStyleTwo />

      <LatestBlogPost />

      <Partners />

      <Footer />
    </>
  );
}
