import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/IndexFour/MainBanner";
import Features from "../../components/IndexFour/Features";
import ServicesStyleThree from "../../components/Common/ServicesStyleThree";
import AboutContent from "../../components/IndexFour/AboutContent";
import ImpressivePortfolio from "../../components/IndexFour/ImpressivePortfolio";
import PriceTable from "../../components/PricingPlans/PriceTable";
import TeamMember from "../../components/Common/TeamMember";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import WeWorkForIndustries from "../../components/Common/WeWorkForIndustries";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import SubscribeForm from "../../components/Common/SubscribeForm";
import Partners from "../../components/Common/Partners";
import Footer from "../../components/Layouts/Footer";
import TestimonialStyleThree from "../../components/Common/TestimonialStyleThree";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <ServicesStyleThree />

      <AboutContent />

      <ImpressivePortfolio />

      <PriceTable />

      <TeamMember />

      <FunFactsTwo />

      <WeWorkForIndustries />

      <TestimonialStyleThree />

      <LatestBlogPost />

      <SubscribeForm />

      <div className="pt-100">
        <Partners />
      </div>

      <Footer />
    </>
  );
}
