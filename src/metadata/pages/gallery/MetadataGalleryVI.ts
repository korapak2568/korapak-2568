import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryVI: Metadata = {
    title: "Du Lịch Quốc Tế | Thư Viện CHORN",
    description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Du Lịch Quốc Tế | Thư Viện CHORN",
        description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
        images: metadataLink(LanguageCode.vi, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Du Lịch Quốc Tế | Thư Viện CHORN",
        description: "CHORN có kinh nghiệm và sẵn sàng cho các chuyến đi quốc tế để nhận đào tạo và học hỏi từ công việc tại ASEAN và Hoa Kỳ.",
        images: metadataLink(LanguageCode.vi, MetaLinks.gallery).twitter.images,
    },
}