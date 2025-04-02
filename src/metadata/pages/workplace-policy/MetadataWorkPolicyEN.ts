import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyEN: Metadata = {
    title: "Work Policy | CHORN",
    description: "CHORN adapts to various work models, including remote, in-office, and hybrid setups, tailoring them to the specific needs of each project. This approach ensures seamless communication and efficiency.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Work Policy | CHORN",
        description: "CHORN adapts to various work models, including remote, in-office, and hybrid setups, tailoring them to the specific needs of each project. This approach ensures seamless communication and efficiency.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Work Policy | CHORN",
        description: "CHORN adapts to various work models, including remote, in-office, and hybrid setups, tailoring them to the specific needs of each project. This approach ensures seamless communication and efficiency.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}