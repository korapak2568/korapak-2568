import {Metadata} from "next";
import {MetadataLinkAngular} from "@/data/metadata/pages/frontend/angular/common/MetadataLinkAngular";

export const MetadataAngularTH: Metadata = {
    title: "บริการพัฒนา Angular | CHORN",
    description: "บริการพัฒนา Angular สร้างเว็บแอปพลิเคชันที่มีความไดนามิก ขยายขนาดได้ และมีประสิทธิภาพสูงโดยใช้ Angular",
    alternates: MetadataLinkAngular.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา Angular | CHORN",
        description: "บริการพัฒนา Angular โดยผู้เชี่ยวชาญ เพื่อสร้างเว็บแอปพลิเคชันที่รวดเร็ว ขยายขนาดได้ และมีความไดนามิก",
        images: MetadataLinkAngular.openGraph.images,
        url: MetadataLinkAngular.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการพัฒนา Angular | CHORN",
        description: "เพิ่มศักยภาพให้กับเว็บแอปพลิเคชันของคุณด้วยบริการพัฒนา Angular โดยผู้เชี่ยวชาญ",
        images: MetadataLinkAngular.twitter.images,
    },
    keywords: [
        // คีย์เวิร์ดหลักของ Angular และบริการ
        "การพัฒนา Angular", "ผู้เชี่ยวชาญ Angular", "นักพัฒนา Angular", "การพัฒนา Angular ในประเทศไทย",
        "การพัฒนา Angular ในกรุงเทพ", "การพัฒนา Angular ในเชียงใหม่", "บริษัทพัฒนา Angular",
        "การพัฒนา Angular แบบกำหนดเอง", "การพัฒนาซอฟต์แวร์แบบกำหนดเอง", "แอปพลิเคชัน Angular สำหรับองค์กร",

        // คีย์เวิร์ดเกี่ยวกับการพัฒนาเว็บและแอปพลิเคชัน
        "การพัฒนา Frontend", "แอปพลิเคชันหน้าเดียว", "ส่วนติดต่อผู้ใช้แบบไดนามิก",
        "แอปพลิเคชันที่มีประสิทธิภาพสูง", "แอปพลิเคชันเว็บที่ขยายขนาดได้", "แอปพลิเคชันเว็บแบบกำหนดเอง",

        // คีย์เวิร์ดเกี่ยวกับนักพัฒนาและสถานที่
        "นักพัฒนาเว็บ", "นักพัฒนาซอฟต์แวร์ครบวงจร", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ในประเทศไทย",
        "นักพัฒนา Angular ในประเทศไทย", "นักพัฒนา Frontend ในประเทศไทย", "นักพัฒนาเว็บในกรุงเทพ", "นักพัฒนา Angular ในเชียงใหม่",
        "นักพัฒนา Angular ในกรุงเทพ", "บริษัทพัฒนา Angular",

        // คีย์เวิร์ดเกี่ยวกับแบรนด์และนวัตกรรม
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร",

        // คีย์เวิร์ดเกี่ยวกับ Google
        "การออกแบบเว็บแบบตอบสนองใน Angular", "การออกแบบเว็บแบบตอบสนอง Angular", "Angular การออกแบบเว็บแบบตอบสนอง"
    ]
}
