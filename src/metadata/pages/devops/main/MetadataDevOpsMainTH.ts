import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainTH: Metadata = {
    title: "โซลูชัน DevOps และ Cloud สำหรับองค์กร | CHORN",
    description: "เร่งการเปลี่ยนแปลงดิจิทัลของคุณด้วยความเชี่ยวชาญด้าน DevOps และ Cloud เรานำเสนอโซลูชัน CI/CD ที่มีประสิทธิภาพ การทำงานอัตโนมัติของโครงสร้างพื้นฐาน และโซลูชัน Cloud-native ที่ช่วยเพิ่มความน่าเชื่อถือและลดเวลาในการออกสู่ตลาด",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "โซลูชัน DevOps และ Cloud สำหรับองค์กร | CHORN",
        description: "เร่งการเปลี่ยนแปลงดิจิทัลของคุณด้วยความเชี่ยวชาญด้าน DevOps และ Cloud เรานำเสนอโซลูชัน CI/CD ที่มีประสิทธิภาพ การทำงานอัตโนมัติของโครงสร้างพื้นฐาน และโซลูชัน Cloud-native ที่ช่วยเพิ่มความน่าเชื่อถือและลดเวลาในการออกสู่ตลาด",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "โซลูชัน DevOps และ Cloud สำหรับองค์กร | CHORN",
        description: "เร่งการเปลี่ยนแปลงดิจิทัลของคุณด้วยความเชี่ยวชาญด้าน DevOps และ Cloud เรานำเสนอโซลูชัน CI/CD ที่มีประสิทธิภาพ การทำงานอัตโนมัติของโครงสร้างพื้นฐาน และโซลูชัน Cloud-native ที่ช่วยเพิ่มความน่าเชื่อถือและลดเวลาในการออกสู่ตลาด",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "ความเชี่ยวชาญด้าน DevOps", "การทดสอบซอฟต์แวร์", "การรวมระบบต่อเนื่อง", "CI/CD pipeline", "การทดสอบอัตโนมัติ",
        "โซลูชันบน Cloud", "การพัฒนาซอฟต์แวร์แบบกำหนดเอง", "ที่ปรึกษาด้าน DevOps", "การประกันคุณภาพซอฟต์แวร์",
        "การทดสอบประสิทธิภาพ", "การทดสอบโหลด", "การทดสอบความปลอดภัย", "การทดสอบอัตโนมัติ", "DevOps ประเทศไทย",
        "วิศวกร DevOps", "ความเชี่ยวชาญด้านการทดสอบประเทศไทย", "การจัดการโครงสร้างพื้นฐาน IT", "วงจรชีวิตการพัฒนาซอฟต์แวร์",
        "นักพัฒนาซอฟต์แวร์ประเทศไทย", "เครื่องมือ DevOps", "แอปพลิเคชันที่สามารถขยายได้", "โซลูชันการทดสอบซอฟต์แวร์",
        "นักพัฒนาฟูลสแต็ก", "โครงสร้างพื้นฐาน Cloud"
    ],
}