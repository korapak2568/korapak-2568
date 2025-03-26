import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/data/metadata/pages/llmAi/common/MetadataLinkLlmAi";

export const MetadataLlmAiTH: Metadata = {
    title: "การผสานรวม LLM/AI | CHORN",
    description: "การพัฒนาเอเจนต์ LLM/AI การนำเสนอโซลูชันอัจฉริยะเพื่อเพิ่มประสิทธิภาพระบบอัตโนมัติ การรวมระบบเดิม และการวิเคราะห์เชิงคาดการณ์",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การผสานรวม LLM/AI - CHORN",
        description: "สำรวจการพัฒนาเอเจนต์ LLM/AI ที่ล้ำสมัย โซลูชัน LLM แบบกำหนดเอง และระบบอัตโนมัติของกระบวนการ AI เพื่อเพิ่มประสิทธิภาพการดำเนินธุรกิจ",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การผสานรวม LLM/AI - CHORN",
        description: "ปลดล็อกศักยภาพของ AI ด้วยบริการพัฒนาเอเจนต์ LLM/AI การวิเคราะห์เชิงคาดการณ์ และระบบอัตโนมัติของกระบวนการอัจฉริยะ",
        images: MetadataLinkLlmAi.twitter.images,
    },
}