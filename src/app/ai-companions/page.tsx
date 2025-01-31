import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import AiCompanionsPage from "../../components/AiCompanions/AiCompanionsPage";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {Version} from "@/data/Version";

export const metadata: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Welcome to the AI Chat Companion, a demo of AI-powered integration. Explore AI companions with unique personalities, designed for seamless interaction via the LINE app, supporting multiple languages.",
    alternates: {
        canonical: "https://chorn.in.th/ai-companions",
    },
    openGraph: {
        title: "AI Chat Companion - AI-Powered Integration",
        description: "Discover AI companions with unique personalities, interacting seamlessly via the LINE app in Thai, English, Chinese, Japanese, Korean, French, and Vietnamese.",
        images: [
            {
                url: "https://chorn.in.th/images-ai/ai-companions/ai-companions-og-image.jpg" + Version.ogImage,
                width: 1200,
                height: 630,
                alt: "AI Chat Companion Demo",
            },
        ],
        url: "https://chorn.in.th/ai-companions",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Chat Companion - Explore AI-Powered Interactions",
        description: "Engage with AI companions that communicate in multiple languages via the LINE app. Discover seamless AI integration today!",
        images: [
            "https://chorn.in.th/images-ai/ai-companions/ai-companions-og-image.jpg" + Version.ogImage
        ],
    },
};

const Page = () => {
    return (
        <>
            <Navbar/>
            <PageBanner pageTitle={Info.Service.demo.title}/>
            <AiCompanionsPage/>
            <Footer/>
        </>
    );
};

export default Page;
