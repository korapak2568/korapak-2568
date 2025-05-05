import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainTH: Metadata = {
    title: "บริการพัฒนาฝั่งหน้าบ้าน | CHORN",
    description: "CHORN ให้บริการพัฒนาฝั่งหน้าบ้าน ด้วยความเชี่ยวชาญทางเทคนิค โดยใช้เฟรมเวิร์คสมัยใหม่ เช่น Next.js, React, Angular, Vue, HTML5 และ CSS3 เพื่อสร้างเว็บไซต์ที่ตอบสนองและขยายขนาดได้ด้วยเทคโนโลยีล้ำสมัย",
    alternates: metadataLink(LanguageCode.th, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "บริการพัฒนาฝั่งหน้าบ้าน | CHORN",
        description: "CHORN ให้บริการพัฒนาฝั่งหน้าบ้าน ด้วยความเชี่ยวชาญทางเทคนิค โดยใช้เทคโนโลยีสมัยใหม่ เช่น Next.js, React, Angular, Vue, HTML5 และ CSS3 เพื่อสร้างเว็บไซต์ที่รวดเร็ว ตอบสนอง และขยายขนาดได้",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.frontend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการพัฒนาฝั่งหน้าบ้าน | CHORN",
        description: "บริการพัฒนาฝั่งหน้าบ้าน โดยผู้เชี่ยวชาญจาก CHORN ใช้เทคโนโลยี เช่น Next.js, React, Angular, Vue, HTML5 และ CSS3 เพื่อสร้างเว็บไซต์ที่ตอบสนองและขยายขนาดได้",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        // คีย์เวิร์ดหลักเกี่ยวกับการพัฒนาฝั่งหน้าบ้าน
        "พัฒนาฝั่งหน้าบ้าน", "ผู้เชี่ยวชาญพัฒนาฝั่งหน้าบ้าน", "นักพัฒนาฝั่งหน้าบ้าน", "พัฒนาฝั่งหน้าบ้าน แบบกำหนดเอง",
        "ส่วนติดต่อผู้ใช้แบบไดนามิก", "เว็บแอปพลิเคชันหน้าเดียว", "ออกแบบเว็บไซต์ให้ตอบสนอง",
        "แอปพลิเคชัน Frontend ที่มีประสิทธิภาพสูง", "พัฒนาซอฟต์แวร์แบบกำหนดเอง",

        // คีย์เวิร์ดสำหรับนักพัฒนาอาวุโส/ระดับหลัก (รวมเฟรมเวิร์คต่างๆ)
        "Senior React Developer", "Principal Angular Developer", "Senior Vue.js Developer",
        "Senior Angular Node.js Developer", "Senior React Spring Boot Developer",
        "Principal .NET Angular Frontend Developer", "Senior React Frontend Developer",

        // คีย์เวิร์ดเกี่ยวกับเฟรมเวิร์คเฉพาะ
        "นักพัฒนา React", "นักพัฒนา Angular", "นักพัฒนา Vue.js", "นักพัฒนาฝั่งหน้าบ้าน ด้วย Next.js",
        "นักพัฒนา React.js", "นักพัฒนา Angular Frontend แบบกำหนดเอง", "นักพัฒนาแอปพลิเคชัน Frontend ด้วย React.js",
        "นักพัฒนา Vue.js",

        // คีย์เวิร์ดสำหรับนักพัฒนาและสถานที่
        "นักพัฒนาฝั่งหน้าบ้าน ประเทศไทย", "นักพัฒนาฝั่งหน้าบ้าน กรุงเทพ", "นักพัฒนาฝั่งหน้าบ้าน เชียงใหม่",
        "Senior Frontend Developer ประเทศไทย", "Principal Frontend Developer ประเทศไทย",
        "นักพัฒนาเว็บไซต์ ประเทศไทย", "นักพัฒนาเว็บไซต์ กรุงเทพ", "วิศวกรซอฟต์แวร์ ประเทศไทย",

        // คีย์เวิร์ดเกี่ยวกับแบรนด์และนวัตกรรม
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์องค์กร", "เว็บแอปพลิเคชันที่ขยายขนาดได้"
    ]
}
