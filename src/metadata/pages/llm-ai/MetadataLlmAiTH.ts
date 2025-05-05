import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiTH: Metadata = {
    title: "การผสานรวม LLM/AI | CHORN",
    description: "การพัฒนาเอเจนต์ LLM/AI การนำเสนอโซลูชันอัจฉริยะเพื่อเพิ่มประสิทธิภาพระบบอัตโนมัติ การรวมระบบเดิม และการวิเคราะห์เชิงคาดการณ์",
    alternates: metadataLink(LanguageCode.th, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การผสานรวม LLM/AI - CHORN",
        description: "สำรวจการพัฒนาเอเจนต์ LLM/AI ที่ล้ำสมัย โซลูชัน LLM แบบกำหนดเอง และระบบอัตโนมัติของกระบวนการ AI เพื่อเพิ่มประสิทธิภาพการดำเนินธุรกิจ",
        images: metadataLink(LanguageCode.th, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.llmAi).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การผสานรวม LLM/AI - CHORN",
        description: "ปลดล็อกศักยภาพของ AI ด้วยบริการพัฒนาเอเจนต์ LLM/AI การวิเคราะห์เชิงคาดการณ์ และระบบอัตโนมัติของกระบวนการอัจฉริยะ",
        images: metadataLink(LanguageCode.th, MetaLinks.llmAi).twitter.images,
    },
}