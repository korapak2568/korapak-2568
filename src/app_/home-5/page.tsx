import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/IndexFive/MainBanner";
import Features from "../../components/IndexFive/Features";
import AboutContent from "../../components/IndexFive/AboutContent";
import Services from "../../components/IndexFive/Services";
import QuoteForm from "../../components/Index/QuoteForm";
import WeWorkForIndustries from "../../components/Common/WeWorkForIndustries";
import PortfolioShowcase from "../../components/IndexFive/PortfolioShowcase";
import TestimonialStyleThree from "../../components/Common/TestimonialStyleThree";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import SubscribeForm from "../../components/Common/SubscribeForm";
import Partners from "../../components/Common/Partners";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <AboutContent />

      <Services />

      <QuoteForm />

      <WeWorkForIndustries />

      <PortfolioShowcase />

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
