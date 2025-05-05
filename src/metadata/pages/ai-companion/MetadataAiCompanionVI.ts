import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionVI: Metadata = {
    title: "Trò chuyện LINE với Tích hợp LLM/AI",
    description: "Kiểm tra trò chuyện LINE, kết nối với LLM/AI hỗ trợ nhiều ngôn ngữ.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Trò chuyện LINE với Tích hợp LLM/AI",
        description: "Kiểm tra trò chuyện LINE, kết nối với LLM/AI hỗ trợ nhiều ngôn ngữ.",
        images: metadataLink(LanguageCode.vi, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Trò chuyện LINE với Tích hợp LLM/AI",
        description: "Kiểm tra trò chuyện LINE, kết nối với LLM/AI hỗ trợ nhiều ngôn ngữ.",
        images: metadataLink(LanguageCode.vi, MetaLinks.aiCompanion).twitter.images,
    },
}