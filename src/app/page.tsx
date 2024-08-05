// src/app/page.tsx
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Index/MainBanner";
import Features from "../components/Index/Features";
import AboutContent from "../components/Index/AboutContent";
import FrontEndExperience from "../components/Common/FrontEndExperience";
import FullStackExperience from "../components/Common/FullStackExperience";
import CloudExperience from "../components/Common/CloudExperience";
import Recommendations from "../components/Common/Recommendations";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layouts/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>

            <MainBanner/>

            <Features/>

            <AboutContent/>

            <FrontEndExperience/>

            <FullStackExperience/>

            <CloudExperience/>

            <Recommendations/>

            <SubscribeForm/>

            <Footer/>
        </>
    );
}
