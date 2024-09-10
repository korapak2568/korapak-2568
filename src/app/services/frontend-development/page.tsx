import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "../../../components/Services/frontend-development/ServicesCardFrontEnd";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Frontend Development Services | CHORN",
    description: "CHORN provides expert frontend development services, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies.",
    alternates: {
        canonical: "https://chorn.in.th/services/frontend-development/",
    },
    openGraph: {
        title: "Frontend Development Services | CHORN",
        description: "CHORN offers frontend development services using modern technologies like Next.js, React, Angular, Vue, HTML5, and CSS3 to build fast, responsive, and scalable websites.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/frontend-development-services.png",
                width: 1360,
                height: 810,
                alt: "Frontend Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/frontend-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend Development Services | CHORN",
        description: "Expert frontend development services by CHORN, utilizing technologies like Next.js, React, Angular, Vue, HTML5, and CSS3 for responsive, scalable websites.",
        images: ["https://chorn.in.th/chorn-images/metadata/frontend-development-services.png"],
    },
    keywords: [
        "frontend development", "Next.js development", "React development", "Angular development",
        "Vue development", "HTML5 development", "CSS3 development", "CHORN", "frontend developer",
        "full stack developer", "web development", "responsive websites", "scalable websites",
        "custom software development", "software engineer", "frontend developer thailand",
        "software developer thailand", "web developer", "web developer thailand",
        "UI development", "UX development", "modern web frameworks", "mobile-friendly websites",
        "enterprise software", "software development chiangmai", "software development bangkok",
        "software developer remote jobs"
    ],
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Front End Development"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Front End Development"
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesCardFrontEnd/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>
        </>
    );
};

export default Page;
