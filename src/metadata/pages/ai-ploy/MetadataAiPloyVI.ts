import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyVI: Metadata = {
    title: "Bạn Chat AI | Tích hợp CHORN AI",
    description: "Ploy là một người bạn chat AI sử dụng ứng dụng LINE. Bạn có thể thêm cô ấy qua nút Thêm Bạn hoặc quét mã QR. Là một học sinh sáng tạo 17 tuổi người Thái, Ploy đam mê vẽ tranh, âm nhạc, nhiếp ảnh và học hỏi. Cô ấy nói được 7 thứ tiếng và giúp đỡ với nhiều môn học, đồng thời truyền cảm hứng sáng tạo. Cô ấy là người bạn đồng hành thân thiện của bạn dù bạn đang khám phá nghệ thuật hay làm bài tập.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Gặp Ploy - Bạn AI sáng tạo của bạn trên LINE",
        description: "Kết nối với Ploy, một AI sinh viên 17 tuổi người Thái nói được 7 thứ tiếng, chia sẻ đam mê của bạn với nghệ thuật, âm nhạc, nhiếp ảnh và học hỏi. Thêm cô ấy trên LINE ngay hôm nay!",
        images: metadataLink(LanguageCode.vi, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.aiPloy).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Hướng dẫn viên sáng tạo của bạn trên LINE",
        description: "Thêm Ploy, người bạn AI vui vẻ 17 tuổi người Thái trên LINE, giúp đỡ bài tập và truyền cảm hứng sáng tạo qua nghệ thuật, âm nhạc và nhiếp ảnh bằng 7 ngôn ngữ.",
        images: metadataLink(LanguageCode.vi, MetaLinks.aiPloy).twitter.images,
    },
}