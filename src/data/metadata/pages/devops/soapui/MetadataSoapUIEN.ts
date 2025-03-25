import {Metadata} from "next";
import {MetadataLinkContact} from "@/data/metadata/pages/contact/common/MetadataLinkContact";

export const MetadataSoapUIEN: Metadata = {
    title: "SoapUI Testing Services | CHORN",
    description: "CHORN provides expert SoapUI testing technical-expertise to ensure your web technical-expertise and APIs are thoroughly tested and reliable.",
    alternates: MetadataLinkContact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Testing | CHORN",
        description: "Ensure the reliability of your APIs and web technical-expertise with CHORN’s SoapUI testing technical-expertise.",
        images: MetadataLinkContact.openGraph.images,
        url: MetadataLinkContact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testing Services | CHORN",
        description: "Optimize your API testing with CHORN’s SoapUI technical-expertise for comprehensive and reliable web service testing.",
        images: MetadataLinkContact.twitter.images,
    },
    keywords: [
        "SoapUI testing", "API testing", "CHORN", "Cloud DevOps",
        "web service testing", "reliable testing", "test automation",
        "quality assurance", "software testing", "API reliability",
        "testing technical-expertise Thailand", "SoapUI technical-expertise", "web application testing"
    ]
}