import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AboutContent from "@/components/About/AboutContent";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAbout} from "@/metadata/pages/about/common/MetadataAbout";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAbout[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].About.title}/>

            <AboutContent/>
            <div className="pb-100">
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
