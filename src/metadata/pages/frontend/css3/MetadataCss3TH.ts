import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3TH: Metadata = {
    title: "บริการพัฒนา CSS3 | CHORN",
    description: "เสริมแอปพลิเคชันเว็บของคุณด้วยการพัฒนา CSS3 พร้อมด้วยความเชี่ยวชาญทางเทคนิคเพื่อการออกแบบที่ทันสมัยและน่าสนใจ.",
    alternates: metadataLink(LanguageCode.th, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา CSS3 | CHORN",
        description: "การพัฒนา CSS3 ด้วยความเชี่ยวชาญทางเทคนิคเพื่อสร้างการออกแบบเว็บที่สวยงามและตอบสนองได้ดี.",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการพัฒนา CSS3 | CHORN",
        description: "สร้างการออกแบบเว็บที่น่าทึ่งด้วย CSS3 พร้อมกับการให้บริการ CSS3 ด้วยความเชี่ยวชาญทางเทคนิค.",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "การพัฒนา CSS3", "ความเชี่ยวชาญด้าน CSS3", "นักพัฒนา CSS3", "การพัฒนา CSS3 แบบกำหนดเอง", "การออกแบบที่ตอบสนองด้วย CSS3",
        "แอปพลิเคชันเว็บ CSS3", "การพัฒนาเว็บ CSS3", "การออกแบบเว็บที่มีสไตล์", "การพัฒนาเว็บแบบกำหนดเอง",
        "การพัฒนาซอฟต์แวร์แบบกำหนดเอง",
        "การพัฒนาเว็บ", "การออกแบบเว็บที่มีประสิทธิภาพสูง", "อินเทอร์เฟซผู้ใช้ที่ตอบสนองได้",
        "นักพัฒนา CSS3 ไทย", "นักพัฒนา CSS3 กรุงเทพ", "นักพัฒนา CSS3 เชียงใหม่", "นักพัฒนาเว็บ ไทย",
        "นักพัฒนาเว็บ กรุงเทพ", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ ไทย",
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร"
    ]
}