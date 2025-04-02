import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceEN: Metadata = {
    title: "Term of Service | CHORN",
    description: "CHORN provide the Terms of Service govern the use of this website. By accessing or using the Website, you agree to comply with these Terms.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkTermOfService.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Term of Service | CHORN",
        description: "CHORN provide the Terms of Service govern the use of this website. By accessing or using the Website, you agree to comply with these Terms.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Term of Service | CHORN",
        description: "CHORN provide the Terms of Service govern the use of this website. By accessing or using the Website, you agree to comply with these Terms.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}