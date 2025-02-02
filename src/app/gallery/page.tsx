import Navbar from "../../components/Layouts/Navbar";
import GalleryContent from "../../components/Gallery/GalleryContent";
import ImpressivePortfolio from "../../components/Gallery/ImpressivePortfolio";
import Footer from "../../components/Layouts/Footer";
import {Metadata} from "next";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.gallery

export default function Page() {
    return (
        <>
            <Navbar/>

            <GalleryContent/>

            <ImpressivePortfolio/>

            <Footer/>
        </>
    );
}
