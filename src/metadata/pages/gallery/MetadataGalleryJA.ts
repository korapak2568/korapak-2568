import {Metadata} from "next";
import {MetadataLinkGallery} from "@/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryJA: Metadata = {
    title: "海外旅行 | CHORNギャラリー",
    description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "海外旅行 | CHORNギャラリー",
        description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "海外旅行 | CHORNギャラリー",
        description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
        images: MetadataLinkGallery.twitter.images,
    },
}