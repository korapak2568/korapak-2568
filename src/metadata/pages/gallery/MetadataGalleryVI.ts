import {Metadata} from "next";
import {MetadataLinkGallery} from "@/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryVI: Metadata = {
    title: "Du Lịch Quốc Tế | Thư Viện CHORN",
    description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Du Lịch Quốc Tế | Thư Viện CHORN",
        description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Du Lịch Quốc Tế | Thư Viện CHORN",
        description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
        images: MetadataLinkGallery.twitter.images,
    },
}