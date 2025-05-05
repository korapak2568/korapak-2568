import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryKO: Metadata = {
    title: "국제 여행 | CHORN 갤러리",
    description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "국제 여행 | CHORN 갤러리",
        description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "국제 여행 | CHORN 갤러리",
        description: "CHORN은 국제 여행에 대한 경험과 준비가 되어 있으며, ASEAN 및 미국에서의 업무를 통해 교육을 받고 배울 준비가 되어 있습니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.gallery).twitter.images,
    },
}