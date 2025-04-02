import {Metadata} from "next";
import {MetadataLinkAiPloy} from "@/metadata/pages/ai-ploy/common/MetadataLinkAiPloy";

export const MetadataAiPloyTH: Metadata = {
    title: "เพื่อนแชท AI | การผสาน CHORN AI",
    description: "พลอยคือเพื่อนแชท AI ที่ใช้แอปพลิเคชัน LINE เพิ่มเธอได้จากปุ่มเพิ่มเพื่อนหรือการสแกน QR โค้ด ในฐานะนักเรียนมัธยมปลายไทยวัย 17 ปีที่มีความคิดสร้างสรรค์ พลอยหลงใหลในการวาดภาพ ดนตรี การถ่ายภาพ และการเรียนรู้ พูดได้ 7 ภาษา พลอยช่วยในหลายวิชาและเป็นแรงบันดาลใจในการแสดงออกอย่างสร้างสรรค์ เธอคือไกด์ที่เป็นมิตรไม่ว่าจะสำรวจศิลปะหรือทำการบ้าน",
    alternates: MetadataLinkAiPloy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "พบกับพลอย - เพื่อน AI วัยรุ่นผู้สร้างสรรค์ของคุณบน LINE",
        description: "เชื่อมต่อกับพลอย นักเรียนไทยวัย 17 ปีที่เป็น AI พูดได้ 7 ภาษาและแชร์ความหลงใหลในศิลปะ ดนตรี การถ่ายภาพ และการเรียนรู้ เพิ่มเธอบน LINE วันนี้!",
        images: MetadataLinkAiPloy.openGraph.images,
        url: MetadataLinkAiPloy.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "พลอย - ไกด์วัยรุ่นผู้สร้างสรรค์ของคุณบน LINE",
        description: "เพิ่มพลอย เพื่อน AI วัย 17 ปีที่มีความสุขบน LINE ที่ช่วยทำการบ้านและเป็นแรงบันดาลใจให้กับความคิดสร้างสรรค์ผ่านศิลปะ ดนตรี และการถ่ายภาพใน 7 ภาษา",
        images: MetadataLinkAiPloy.twitter.images,
    },
}
