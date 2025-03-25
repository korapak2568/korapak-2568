import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryZH: Metadata = {
    title: "国际旅行 | CHORN 画廊",
    description: "CHORN 具备国际旅行的经验和准备，以接受培训并从东盟和美国的工作中学习。",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "国际旅行 | CHORN 画廊",
        description: "CHORN 具备国际旅行的经验和准备，以接受培训并从东盟和美国的工作中学习。",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "国际旅行 | CHORN 画廊",
        description: "CHORN 具备国际旅行的经验和准备，以接受培训并从东盟和美国的工作中学习。",
        images: MetadataLinkAbout.twitter.images,
    },
}