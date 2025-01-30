import Navbar from "../../components/Layouts/Navbar";
import GalleryContent from "../../components/Gallery/GalleryContent";
import ImpressivePortfolio from "../../components/Gallery/ImpressivePortfolio";
import Footer from "../../components/Layouts/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Global Business Trip | CHORN Gallery",
    description: "Explore highlights from CHORN's international business trips, including experiences in Los Angeles, California, and premium travel with Singapore Airlines.",
    alternates: {
        canonical: "https://chorn.in.th/gallery/",
    },
    openGraph: {
        title: "Global Business Trip - CHORN Gallery",
        description: "Discover CHORN's global expertise through international business trips, premium travel experiences, and advanced training capabilities.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/gallery/global/chorn-global-001.jpg",
                width: 1200,
                height: 630,
                alt: "Global Business Trip Highlights",
            },
        ],
        url: "https://chorn.in.th/gallery/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Global Business Trip - CHORN Gallery",
        description: "Experience CHORN’s international business journey, premium travel, and global training expertise.",
        images: [
            "https://chorn.in.th/chorn-images/gallery/global/chorn-global-001.jpg"
        ],
    },
};

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
