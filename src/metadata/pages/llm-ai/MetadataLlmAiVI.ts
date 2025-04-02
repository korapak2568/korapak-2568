import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/metadata/pages/llm-ai/common/MetadataLinkLlmAi";

export const MetadataLlmAiVI: Metadata = {
    title: "Tích Hợp LLM/AI | CHORN",
    description: "Dịch vụ phát triển tác nhân LLM/AI, cung cấp các giải pháp thông minh được thiết kế riêng để nâng cao tự động hóa, tích hợp hệ thống cũ và phân tích dự đoán.",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tích Hợp LLM/AI - CHORN",
        description: "Khám phá phát triển tác nhân LLM/AI tiên tiến, giải pháp LLM tùy chỉnh và tự động hóa quy trình làm việc AI để tối ưu hóa hoạt động kinh doanh.",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Tích Hợp LLM/AI - CHORN",
        description: "Giải phóng sức mạnh của AI với phát triển tác nhân LLM/AI, phân tích dự đoán và dịch vụ tự động hóa quy trình làm việc thông minh.",
        images: MetadataLinkLlmAi.twitter.images,
    },
}