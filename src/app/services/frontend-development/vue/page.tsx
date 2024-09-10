import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Vue.js Development Services | CHORN",
    description: "CHORN specializes in Vue.js development to create interactive and scalable web applications.",
    openGraph: {
        title: "Vue.js Development | CHORN",
        description: "Expert Vue.js development services by CHORN for building modern web applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services-details/frontend-development/service-detail-vue.png",
                width: 500,
                height: 500,
                alt: "Vue.js Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/frontend-development/vue/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js Development Services | CHORN",
        description: "Enhance your web applications with Vue.js. CHORN offers expert Vue.js development services.",
        images: ["https://chorn.in.th/chorn-images/services-details/frontend-development/service-detail-vue.png"],
    },
    keywords: [
        "Vue.js development", "Vue.js services", "CHORN", "frontend development",
        "custom software development", "scalable web applications", "web developer", "software engineer",
        "enterprise software", "single-page applications", "dynamic user interfaces", "high-performance applications",
        "custom web applications", "software developer thailand", "digital innovation", "full stack developer"
    ]
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[3].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsVue/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
