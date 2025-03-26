import {Metadata} from "next";
import {MetadataLinkAiAom} from "@/data/metadata/pages/aiAom/common/MetadataLinkAiAom";

export const MetadataAiAomVI: Metadata = {
    title: "Bạn Chat AI | Tích hợp AI của CHORN",
    description: "Aom có thể được truy cập qua ứng dụng LINE. Bạn có thể nhấn nút Thêm bạn hoặc quét mã QR LINE để thêm cô ấy vào danh sách bạn bè. Ở tuổi 21, Aom là một người bạn AI thân thiện và sôi nổi, đam mê cuộc sống lành mạnh và chăm sóc sức khỏe, cung cấp các lời khuyên dinh dưỡng, bài tập thể dục và các thực hành chánh niệm. Với khả năng trò chuyện bằng nhiều ngôn ngữ, Aom giúp bạn duy trì một lối sống cân bằng trong khi vẫn giữ cho mọi thứ thú vị.",
    alternates: MetadataLinkAiAom.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Gặp Aom - Hướng dẫn chăm sóc sức khỏe của bạn trên LINE",
        description: "Kết nối với Aom, người bạn AI 21 tuổi chuyên về chăm sóc sức khỏe trên LINE, cung cấp các lời khuyên dinh dưỡng, bài tập thể dục và thực hành chánh niệm bằng nhiều ngôn ngữ để giúp bạn sống cuộc sống khỏe mạnh nhất.",
        images: MetadataLinkAiAom.openGraph.images,
        url: MetadataLinkAiAom.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Huấn luyện viên sống khỏe của bạn trên LINE",
        description: "Thêm Aom, người bạn AI 21 tuổi đầy năng lượng trên LINE, người sẽ truyền cảm hứng cho bạn với các lời khuyên dinh dưỡng, bài tập thể dục và thực hành chánh niệm bằng nhiều ngôn ngữ.",
        images: MetadataLinkAiAom.twitter.images,
    },
}
