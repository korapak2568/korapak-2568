import {Metadata} from "next";
import {MetadataLinkAiFah} from "@/metadata/pages/ai-fah/common/MetadataLinkAiFah";

export const MetadataAiFahVI: Metadata = {
    title: "Bạn Đồng Hành Trò Chuyện AI | Tích Hợp CHORN AI",
    description: "Fah là người bạn trò chuyện AI của bạn trên ứng dụng LINE. Cô ấy là một người bạn đồng hành lấy cảm hứng từ Thái Lan, 20 tuổi, vui vẻ và dễ gần. Thêm cô ấy bằng một cú nhấp chuột hoặc quét mã QR để khám phá các điểm đến, món ăn và văn hóa nổi bật của Thái Lan. Trò chuyện bằng nhiều ngôn ngữ khi cô ấy hướng dẫn bạn qua nền văn hóa Thái Lan với năng lượng trẻ trung.",
    alternates: MetadataLinkAiFah.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Gặp Gỡ Fah - Người Bạn AI Thái Lan Trên LINE",
        description: "Gặp gỡ Fah, người bạn AI Thái Lan 20 tuổi của bạn trên LINE, người sẽ giới thiệu các điểm đến, món ăn và trải nghiệm văn hóa hàng đầu của Thái Lan bằng nhiều ngôn ngữ. Thêm cô ấy ngay hôm nay!",
        images: MetadataLinkAiFah.openGraph.images,
        url: MetadataLinkAiFah.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - Hướng Dẫn Văn Hóa Thái Lan Của Bạn Trên LINE",
        description: "Thêm Fah, người bạn AI Thái Lan 20 tuổi vui vẻ trên LINE, người sẽ giúp bạn khám phá các điểm đến, ẩm thực và văn hóa Thái Lan bằng nhiều ngôn ngữ.",
        images: MetadataLinkAiFah.twitter.images,
    },
}