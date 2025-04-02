import {Metadata} from "next";
import {MetadataLinkGallery} from "@/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryKO: Metadata = {
    title: "국제 여행 | CHORN 갤러리",
    description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "국제 여행 | CHORN 갤러리",
        description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "국제 여행 | CHORN 갤러리",
        description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
        images: MetadataLinkGallery.twitter.images,
    },
}