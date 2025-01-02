import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "@/components/AI/MainBannerAiFah/page";
import Features from "../../components/IndexTwo/Features";
import AboutUsContent from "../../components/IndexTwo/AboutUsContent";
import ServicesStyleOne from "../../components/Common/ServicesStyleOne";
import FullStackExperience from "../../components/Common/FullStackExperience";
import FunFacts from "../../components/Common/FunFacts";
import OurProjects from "../../components/Common/OurProjects";
import Recommendations from "../../components/Common/Recommendations";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import Partners from "../../components/Common/Partners";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <AboutUsContent />

      <ServicesStyleOne />

      <FullStackExperience />

      <FunFacts />

      <OurProjects />

      <Recommendations />

      <LatestBlogPost />

      <Partners />

      <Footer />
    </>
  );
}
