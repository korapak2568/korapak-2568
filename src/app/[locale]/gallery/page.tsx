import Navbar from "@/components/Layouts/Navbar";
import GalleryContent from "@/components/Gallery/GalleryContent";
import ImpressivePortfolio from "@/components/Gallery/ImpressivePortfolio";
import Footer from "@/components/Layouts/Footer";
import {Metadata} from "next";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";

export const metadata: Metadata = MetadataChorn.gallery

export default function Page() {
    return (
        <>
            <Navbar/>
            <GalleryContent/>
            <ImpressivePortfolio/>
            <WeWorkForIndustries/>
            <Footer/>
        </>
    );
}
