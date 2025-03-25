import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryJA: Metadata = {
    title: "海外旅行 | CHORNギャラリー",
    description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "海外旅行 | CHORNギャラリー",
        description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "海外旅行 | CHORNギャラリー",
        description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
        images: MetadataLinkAbout.twitter.images,
    },
}