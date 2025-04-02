import {Metadata} from "next";
import {MetadataLinkNextjs} from "@/metadata/pages/frontend/nextjs/common/MetadataLinkNextjs";

export const MetadataNextjsTH: Metadata = {
    title: "บริการพัฒนา Next.js | CHORN",
    description: "ผู้เชี่ยวชาญด้านการพัฒนา Next.js เพิ่มศักยภาพให้เว็บแอปพลิเคชันของคุณด้วยโซลูชันที่ขยายขนาดได้และมีประสิทธิภาพสูงโดยใช้ Next.js",
    alternates: MetadataLinkNextjs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา Next.js | CHORN",
        description: "บริการพัฒนา Next.js โดยผู้เชี่ยวชาญ สร้างเว็บแอปพลิเคชันที่รวดเร็วและขยายขนาดได้",
        images: MetadataLinkNextjs.openGraph.images,
        url: MetadataLinkNextjs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการพัฒนา Next.js | CHORN",
        description: "ยกระดับเว็บแอปพลิเคชันของคุณด้วยบริการพัฒนา Next.js โดยผู้เชี่ยวชาญ",
        images: MetadataLinkNextjs.twitter.images,
    },
    keywords: [
        // คีย์เวิร์ดหลักเกี่ยวกับ Next.js และบริการ
        "การพัฒนา Next.js", "ความเชี่ยวชาญด้าน Next.js", "นักพัฒนา Next.js", "การพัฒนา Next.js แบบกำหนดเอง", "การเรนเดอร์ฝั่งเซิร์ฟเวอร์",
        "การพัฒนา Next.js แบบ Full Stack", "การเพิ่มประสิทธิภาพ SEO ด้วย Next.js", "แอปพลิเคชัน Next.js", "การพัฒนาเว็บแอปพลิเคชันแบบกำหนดเอง",

        // คีย์เวิร์ดเกี่ยวกับการพัฒนาเว็บและแอปพลิเคชัน
        "เว็บแอปพลิเคชันที่ขยายขนาดได้", "การพัฒนา Frontend", "เว็บแอปพลิเคชันที่มีประสิทธิภาพสูง",
        "แอปพลิเคชันหน้าเดียว", "อินเทอร์เฟซผู้ใช้แบบไดนามิก", "นักพัฒนา Full Stack", "การพัฒนาซอฟต์แวร์แบบกำหนดเอง",

        // คีย์เวิร์ดเกี่ยวกับนักพัฒนาและสถานที่
        "นักพัฒนา Next.js ไทย", "นักพัฒนา Next.js กรุงเทพ", "นักพัฒนา Next.js เชียงใหม่", "นักพัฒนา Frontend ไทย",
        "นักพัฒนาเว็บ กรุงเทพ", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ ไทย",

        // คีย์เวิร์ดเกี่ยวกับแบรนด์และนวัตกรรม
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร"
    ]
}