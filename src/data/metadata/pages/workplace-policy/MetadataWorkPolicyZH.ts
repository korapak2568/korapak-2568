import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyZH: Metadata = {
    title: "工作政策 | CHORN",
    description: "CHORN 适应各种工作模式，包括远程办公、办公室办公和混合办公，并根据每个项目的具体需求进行调整。这种方法确保了顺畅的沟通和高效的工作。",
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
        title: "工作政策 | CHORN",
        description: "CHORN 适应各种工作模式，包括远程办公、办公室办公和混合办公，并根据每个项目的具体需求进行调整。这种方法确保了顺畅的沟通和高效的工作。",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "工作政策 | CHORN",
        description: "CHORN 适应各种工作模式，包括远程办公、办公室办公和混合办公，并根据每个项目的具体需求进行调整。这种方法确保了顺畅的沟通和高效的工作。",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}