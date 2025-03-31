import Navbar from "@/components/Layouts/Navbar";
import GalleryContent from "@/components/Gallery/GalleryContent";
import ImpressivePortfolio from "@/components/Gallery/ImpressivePortfolio";
import Footer from "@/components/Layouts/Footer";
import {Metadata} from "next";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import {headers} from "next/headers";
import {MetadataGallery} from "@/data/metadata/pages/gallery/common/MetadataGallery";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataGallery[lang]
}

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
