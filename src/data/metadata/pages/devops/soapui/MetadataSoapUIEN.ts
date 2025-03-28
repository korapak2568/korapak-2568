import {Metadata} from "next";
import {MetadataLinkSoapUI} from "./common/MetadataLinkSoapUI";

export const MetadataSoapUIEN: Metadata = {
    title: "SoapUI Testing Services | CHORN",
    description: "SoapUI testing technical expertise to ensure your web technical expertise and APIs are thoroughly tested and reliable.",
    alternates: MetadataLinkSoapUI.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Testing | CHORN",
        description: "Ensure the reliability of your APIs and web technical expertise with testing technical expertise.",
        images: MetadataLinkSoapUI.openGraph.images,
        url: MetadataLinkSoapUI.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testing Services | CHORN",
        description: "Optimize your API testing with SoapUI technical expertise for comprehensive and reliable web service testing.",
        images: MetadataLinkSoapUI.twitter.images,
    },
    keywords: [
        "SoapUI testing", "API testing", "CHORN", "Cloud DevOps",
        "web service testing", "reliable testing", "test automation",
        "quality assurance", "software testing", "API reliability",
        "testing technical expertise Thailand", "SoapUI technical expertise", "web application testing"
    ]
}