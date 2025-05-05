import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404EN: Metadata = {
    title: "404 - AiBannerFahMain Not Found",
    description: "Oops! We couldn't find the page you were looking for. Please check the URL or return to our homepage to continue exploring CHORN.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - AiBannerFahMain Not Found",
        description: "Oops! We couldn't find the page you were looking for. Please check the URL or return to our homepage to continue exploring CHORN.",
        images: metadataLink(LanguageCode.en, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - AiBannerFahMain Not Found",
        description: "Oops! We couldn't find the page you were looking for. Please check the URL or return to our homepage to continue exploring CHORN.",
        images: metadataLink(LanguageCode.en, MetaLinks._404).twitter.images,
    },
}