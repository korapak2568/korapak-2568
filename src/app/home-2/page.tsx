import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/IndexTwo/MainBanner";
import Features from "../../components/IndexTwo/Features";
import AboutUsContent from "../../components/IndexTwo/AboutUsContent";
import ServicesStyleOne from "../../components/Common/ServicesStyleOne";
import DigitalExperience from "../../components/Common/DigitalExperience";
import FunFacts from "../../components/Common/FunFacts";
import OurProjects from "../../components/Common/OurProjects";
import Testimonials from "../../components/Common/Testimonials";
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

      <DigitalExperience />

      <FunFacts />

      <OurProjects />

      <Testimonials />

      <LatestBlogPost />

      <Partners />

      <Footer />
    </>
  );
}
