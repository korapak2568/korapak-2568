import Navbar from "../../components/Layouts/Navbar";
import GalleryContent from "../../components/Gallery/GalleryContent";
import ImpressivePortfolio from "../../components/Gallery/ImpressivePortfolio";
import Footer from "../../components/Layouts/Footer";
import {Metadata} from "next";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = {
    title: "Global Business Trip | CHORN Gallery",
    description: "Explore highlights from CHORN's international business trips, including experiences in Los Angeles, California, and premium travel with Singapore Airlines.",
    alternates: {
        canonical: "https://chorn.in.th/gallery/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Global Business Trip - CHORN Gallery",
        description: "Discover CHORN's global expertise through international business trips, premium travel experiences, and advanced training capabilities.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/gallery/gallery-og-image.jpg" + ChornMetadata.ogImage,
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
            "https://chorn.in.th/chorn-images/gallery/gallery-og-image.jpg" + ChornMetadata.ogImage
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
