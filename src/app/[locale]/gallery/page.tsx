import Navbar from "@/components/Layouts/Navbar";
import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import Footer from "@/components/Layouts/Footer";
import {Metadata} from "next";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import {headers} from "next/headers";
import {MetadataGallery} from "@/metadata/pages/gallery/common/MetadataGallery";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataGallery[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <GalleryPageMain lang={lang}/>
            <GalleryModuleBottom/>
            <WeWorkForIndustries lang={lang}/>
            <Footer/>
        </>
    );
}
