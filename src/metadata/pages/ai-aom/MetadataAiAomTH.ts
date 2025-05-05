import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomTH: Metadata = {
    title: "เพื่อนสนทนา AI | การเชื่อมต่อ AI ของ CHORN",
    description: "ออมสามารถเข้าถึงได้ผ่านแอปพลิเคชัน LINE คุณสามารถกดปุ่มเพิ่มเพื่อนหรือสแกน QR โค้ดของ LINE เพื่อเพิ่มเธอเป็นเพื่อน ด้วยอายุ 21 ปี เธอเป็นเพื่อนสนทนา AI ที่มีความกระตือรือร้นและมีชีวิตชีวา โดยมีความหลงใหลในชีวิตที่มีสุขภาพดีและความเป็นอยู่ที่ดี ซึ่งให้คำแนะนำเกี่ยวกับโภชนาการ, ตารางการออกกำลังกาย, และการฝึกสติ ด้วยความสามารถในการสนทนาหลายภาษา ออมช่วยให้คุณรักษาสมดุลในชีวิตประจำวันในขณะที่ทำให้ทุกอย่างสนุกสนาน",
    alternates: metadataLink(LanguageCode.th, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "พบกับออม - ไกด์ดูแลสุขภาพของคุณบน LINE",
        description: "เชื่อมต่อกับออม, เพื่อนสนทนา AI ที่มีอายุ 21 ปีที่เน้นเรื่องสุขภาพบน LINE ซึ่งให้คำแนะนำเกี่ยวกับโภชนาการ, ตารางการออกกำลังกาย, และการฝึกสติในหลายภาษา เพื่อช่วยให้คุณมีชีวิตที่มีสุขภาพดีที่สุด",
        images: metadataLink(LanguageCode.th, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.aiAom).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "ออม - โค้ชการใช้ชีวิตอย่างมีสุขภาพบน LINE",
        description: "เพิ่มออม, เพื่อนสนทนา AI ที่มีอายุ 21 ปีที่กระปรี้กระเปร่าใน LINE ซึ่งจะกระตุ้นคุณด้วยคำแนะนำด้านโภชนาการ, ตารางการออกกำลังกาย, และการฝึกสติในหลายภาษา",
        images: metadataLink(LanguageCode.th, MetaLinks.aiAom).twitter.images,
    },
}
