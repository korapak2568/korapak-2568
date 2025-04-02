import {Metadata} from "next";
import {MetadataLinkPostman} from "@/metadata/pages/devops/postman/common/MetadataLinkPostman";

export const MetadataPostmanEN: Metadata = {
    title: "Postman API Testing Services | CHORN",
    description: "Provide API testing technical expertise using Postman to ensure the reliability and performance of your web technical expertise.",
    alternates: MetadataLinkPostman.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API Testing Services | CHORN",
        description: "Ensure your APIs function as expected with Postman-based API testing technical expertise.",
        images: MetadataLinkPostman.openGraph.images,
        url: MetadataLinkPostman.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API Testing Services | CHORN",
        description: "Postman-based API testing technical expertise to validate your web technical expertise’ reliability and performance.",
        images: MetadataLinkPostman.twitter.images,
    },
    keywords: [
        "Postman API testing", "Postman technical expertise", "API testing", "DevOps", "automated API testing", "CHORN",
        "web technical expertise testing", "API performance", "custom software development", "DevOps thailand"
    ]
}