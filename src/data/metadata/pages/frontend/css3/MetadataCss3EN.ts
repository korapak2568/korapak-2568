import {Metadata} from "next";
import {MetadataLinkCss3} from "@/data/metadata/pages/frontend/css3/common/MetadataLinkCss3";

export const MetadataCss3EN: Metadata = {
    title: "CSS3 Development Services | CHORN",
    description: "Enhance your web applications with CHORN’s CSS3 development technical-expertise for modern and visually appealing designs.",
    alternates: MetadataLinkCss3.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3 Development | CHORN",
        description: "CHORN offers CSS3 development technical-expertise to create stylish and responsive web designs.",
        images: MetadataLinkCss3.openGraph.images,
        url: MetadataLinkCss3.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 Development Services | CHORN",
        description: "Create visually stunning web designs with CSS3. CHORN provides expert CSS3 development technical-expertise.",
        images: MetadataLinkCss3.twitter.images,
    },
}