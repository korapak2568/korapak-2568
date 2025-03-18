import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import AboutContent from "@/components/About/AboutContent";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";
import {InfoEN} from "@/data/info/InfoEN";

export const metadata: Metadata = ChornMetadata.about

export default function Page() {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoEN.About.title}/>

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
