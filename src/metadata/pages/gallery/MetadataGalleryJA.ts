import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryJA: Metadata = {
    title: "海外旅行 | CHORNギャラリー",
    description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "海外旅行 | CHORNギャラリー",
        description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
        images: metadataLink(LanguageCode.ja, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.gallery).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "海外旅行 | CHORNギャラリー",
        description: "CHORNはASEANおよびアメリカでの業務から学び、研修を受けるための国際旅行の経験と準備が整っています。",
        images: metadataLink(LanguageCode.ja, MetaLinks.gallery).twitter.images,
    },
}