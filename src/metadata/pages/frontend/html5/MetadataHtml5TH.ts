import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5TH: Metadata = {
    title: "บริการพัฒนา HTML5 | CHORN",
    description: "ความเชี่ยวชาญด้านการพัฒนา HTML5 เพื่อสร้างแอปพลิเคชันเว็บที่ตอบสนองและมีส่วนร่วม",
    alternates: metadataLink(LanguageCode.th, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา HTML5 | CHORN",
        description: "สร้างแอปพลิเคชันเว็บที่ทันสมัยและมีปฏิสัมพันธ์ด้วยความเชี่ยวชาญทางเทคนิค",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.frontend.html5).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการพัฒนา HTML5 | CHORN",
        description: "สร้างแอปพลิเคชันเว็บที่มีปฏิสัมพันธ์ด้วยความเชี่ยวชาญด้าน HTML5",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "การพัฒนา HTML5", "ความเชี่ยวชาญ HTML5", "นักพัฒนา HTML5", "การพัฒนา HTML5 แบบกำหนดเอง", "การออกแบบเว็บที่ตอบสนอง HTML5",
        "แอปพลิเคชันเว็บ HTML5", "การพัฒนา HTML5 สำหรับมือถือ", "แอปพลิเคชันเว็บแบบกำหนดเอง", "แอปข้ามแพลตฟอร์ม HTML5",
        "การพัฒนาซอฟต์แวร์แบบกำหนดเอง",
        "แอปพลิเคชันเว็บหน้าเดียว", "การพัฒนา Frontend", "นักพัฒนาเว็บ", "แอปพลิเคชันเว็บที่สามารถขยายได้",
        "การออกแบบเว็บที่มีประสิทธิภาพสูง", "การออกแบบเว็บที่ตอบสนอง", "ส่วนติดต่อผู้ใช้ที่มีพลศาสตร์",
        "นักพัฒนา HTML5 ประเทศไทย", "นักพัฒนา HTML5 กรุงเทพมหานคร", "นักพัฒนา HTML5 เชียงใหม่", "นักพัฒนา Frontend ประเทศไทย",
        "นักพัฒนาเว็บ กรุงเทพมหานคร", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ ประเทศไทย",
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร"
    ]
}
