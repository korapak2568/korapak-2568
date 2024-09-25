import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import AboutContent from "../../components/AboutUs/AboutContent";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import Recommendations from "@/components/Common/Recommendations";

export const metadata: Metadata = {
    title: "About Us | CHORN - Custom Software Development Experts",
    description: "Discover CHORN's innovative custom software development solutions and how we empower industries with cutting-edge technology.",
    alternates: {
        canonical: "https://chorn.in.th/about-chorn/",
    },
    openGraph: {
        title: "CHORN - Leaders in Custom Software Development",
        description: "Explore CHORN's mission and expertise in delivering innovative software solutions across industries. Learn more about our journey.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/about-chorn.png",
                width: 1200,
                height: 630,
                alt: "CHORN About Banner Image",
            },
        ],
        url: "https://chorn.in.th/about-chorn/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Custom Software Solutions for Every Industry",
        description: "Learn about CHORN's innovative software services and our impact across industries. Partner with us for cutting-edge solutions.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/about-chorn.png"
        ],
    },
};

export default function Page() {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="About CHORN"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About CHORN"
                BGImage="/images/page-banner/page-banner-2.jpg"
            />

            <AboutContent/>

            <div className="pb-100">
                <Recommendations/>
            </div>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="About Us | CHORN - Custom Software Development Experts"
                description="Discover CHORN's innovative custom software development solutions and how we empower industries with cutting-edge technology."
                url="https://chorn.in.th/about-chorn/"
            />
        </>
    );
}
