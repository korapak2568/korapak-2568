import {Metadata} from "next";
import {metadataLinkCloudSolution} from "@/metadata/metadataLink/MetadataLinkCloudSolution";
import {LanguageCode} from "@/data/translate/LanguageCode";

export const MetadataCloudSolutionTH: Metadata = {
    title: "สถาปัตยกรรมโซลูชันคลาวด์และการวิเคราะห์ระบบ | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN นำเสนอบริการด้านสถาปัตยกรรมโซลูชันคลาวด์และการวิเคราะห์ระบบ ด้วยความเชี่ยวชาญเฉพาะทาง เราปรับแต่งโครงสร้างพื้นฐานคลาวด์บน AWS, Azure, GCP และ DigitalOcean เพื่อเพิ่มประสิทธิภาพ ความสามารถในการขยายตัว และความคุ้มค่า.",
    alternates: metadataLinkCloudSolution(LanguageCode.th).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "สถาปัตยกรรมโซลูชันคลาวด์และการวิเคราะห์ระบบ | CHORN",
        description: "สำรวจบริการด้านสถาปัตยกรรมโซลูชันคลาวด์และการวิเคราะห์ระบบจาก CHORN เราออกแบบโซลูชันคลาวด์ที่มีความยืดหยุ่น ขยายตัวได้ และมีประสิทธิภาพบน AWS, Azure, GCP และ DigitalOcean.",
        images: metadataLinkCloudSolution(LanguageCode.th).openGraph.images,
        url: metadataLinkCloudSolution(LanguageCode.th).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "สถาปัตยกรรมโซลูชันคลาวด์และการวิเคราะห์ระบบ | CHORN",
        description: "เพิ่มประสิทธิภาพโครงสร้างพื้นฐานคลาวด์ของคุณด้วยบริการสถาปัตยกรรมโซลูชันคลาวด์และการวิเคราะห์ระบบจาก CHORN ครอบคลุม AWS, Azure, GCP และ DigitalOcean.",
        images: metadataLinkCloudSolution(LanguageCode.th).twitter.images,
    },
    keywords: [
        // คำสำคัญเกี่ยวกับสถาปัตยกรรมคลาวด์
        "สถาปัตยกรรมโซลูชันคลาวด์", "การวิเคราะห์ระบบ", "สถาปัตยกรรม AWS", "โซลูชันคลาวด์ Azure",
        "สถาปัตยกรรม GCP", "โครงสร้างพื้นฐาน DigitalOcean", "การเพิ่มประสิทธิภาพคลาวด์", "กลยุทธ์มัลติคลาวด์",
        "การขยายตัวของคลาวด์", "การออกแบบโครงสร้างพื้นฐานคลาวด์", "การวิเคราะห์ความปลอดภัยของคลาวด์",

        // คำสำคัญเกี่ยวกับบริการเฉพาะทาง
        "ที่ปรึกษาคลาวด์ AWS", "การผสานระบบ Azure", "การเพิ่มประสิทธิภาพต้นทุน GCP", "โซลูชัน DigitalOcean",
        "ความเชี่ยวชาญในการย้ายข้อมูลคลาวด์", "การปรับแต่งประสิทธิภาพคลาวด์", "การผสานมัลติคลาวด์", "แอปพลิเคชันคลาวด์เนทีฟ",

        // คำสำคัญเกี่ยวกับนักพัฒนาและสถานที่
        "สถาปนิกคลาวด์ ประเทศไทย", "สถาปนิก AWS ประเทศไทย", "สถาปนิก Azure ประเทศไทย", "สถาปนิก GCP ประเทศไทย",
        "นักพัฒนา DigitalOcean ประเทศไทย", "นักวิเคราะห์ระบบ ประเทศไทย", "ผู้เชี่ยวชาญโครงสร้างพื้นฐานคลาวด์ ประเทศไทย",

        // คำสำคัญเกี่ยวกับแบรนด์และนวัตกรรม
        "CHORN", "โซลูชันคลาวด์", "นวัตกรรมดิจิทัล", "การออกแบบโครงสร้างพื้นฐานคลาวด์", "ระบบคลาวด์ที่ขยายตัวได้"
    ]
}