import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaTH: Metadata = {
    title: "การพัฒนา Full Stack ด้วย Java Spring Boot | CHORN",
    description: "การพัฒนา Full Stack ด้วย Java Spring Boot, ความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันที่มีความแข็งแกร่งและสามารถขยายได้สำหรับองค์กร.",
    alternates: metadataLink(LanguageCode.th, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา Java Spring Boot | CHORN",
        description: "ใช้ประโยชน์จากการพัฒนา Full Stack ด้วย Java Spring Boot พร้อมความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันที่สามารถขยายได้, ปลอดภัย และมีประสิทธิภาพสูง.",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.backend.java).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การพัฒนา Full Stack ด้วย Java Spring Boot | CHORN",
        description: "ความเชี่ยวชาญในการพัฒนา Full Stack ด้วย Java Spring Boot เพื่อสร้างแอปพลิเคชันที่ปลอดภัยและสามารถขยายได้.",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        "การพัฒนา Spring Boot", "ความเชี่ยวชาญทางเทคนิค Java Spring Boot", "นักพัฒนา Spring Boot", "การพัฒนา Java แบบกำหนดเอง",
        "แอปพลิเคชัน Java Spring Boot", "การพัฒนา Java สำหรับองค์กร", "Microservices ด้วย Spring Boot",
        "การพัฒนาโปรแกรมซอฟต์แวร์แบบกำหนดเอง", "แอปพลิเคชันเว็บที่สามารถขยายได้", "การพัฒนาแบ็คเอนด์", "โซลูชันซอฟต์แวร์สำหรับองค์กร",
        "แอปพลิเคชันที่มีประสิทธิภาพสูง", "แอปพลิเคชันเว็บ Java", "การพัฒนา Microservices", "การพัฒนา API",
        "นักพัฒนา Spring Boot ประเทศไทย", "นักพัฒนา Java ประเทศไทย", "นักพัฒนา Java กรุงเทพฯ",
        "นักพัฒนา Java เชียงใหม่", "นักพัฒนาแบ็คเอนด์ ประเทศไทย", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ ประเทศไทย",
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร"
    ]
}
