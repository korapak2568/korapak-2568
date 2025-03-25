import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryKO: Metadata = {
    title: "국제 여행 | CHORN 갤러리",
    description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "국제 여행 | CHORN 갤러리",
        description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "국제 여행 | CHORN 갤러리",
        description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
        images: MetadataLinkAbout.twitter.images,
    },
}