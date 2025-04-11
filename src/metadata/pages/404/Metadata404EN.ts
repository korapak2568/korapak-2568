import {Metadata} from "next";
import {MetadataLink404} from "@/metadata/pages/404/common/MetadataLink404";

export const Metadata404EN: Metadata = {
    title: "404 - AiBannerFahMain Not Found",
    description: "Oops! We couldn't find the page you were looking for. Please check the URL or return to our homepage to continue exploring CHORN.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLink404.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - AiBannerFahMain Not Found",
        description: "Oops! We couldn't find the page you were looking for. Please check the URL or return to our homepage to continue exploring CHORN.",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - AiBannerFahMain Not Found",
        description: "Oops! We couldn't find the page you were looking for. Please check the URL or return to our homepage to continue exploring CHORN.",
        images: MetadataLink404.twitter.images,
    },
}