import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryVI: Metadata = {
    title: "Du Lịch Quốc Tế | Thư Viện CHORN",
    description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Du Lịch Quốc Tế | Thư Viện CHORN",
        description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Du Lịch Quốc Tế | Thư Viện CHORN",
        description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
        images: MetadataLinkAbout.twitter.images,
    },
}