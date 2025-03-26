import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/data/metadata/pages/aiCompanion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionVI: Metadata = {
    title: "Trò chuyện LINE với Tích hợp LLM/AI",
    description: "Kiểm tra trò chuyện LINE, kết nối với LLM/AI hỗ trợ nhiều ngôn ngữ.",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Trò chuyện LINE với Tích hợp LLM/AI",
        description: "Kiểm tra trò chuyện LINE, kết nối với LLM/AI hỗ trợ nhiều ngôn ngữ.",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Trò chuyện LINE với Tích hợp LLM/AI",
        description: "Kiểm tra trò chuyện LINE, kết nối với LLM/AI hỗ trợ nhiều ngôn ngữ.",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}