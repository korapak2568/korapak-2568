import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPhpTH: Metadata = {
    title: "การพัฒนา PHP Full Stack | CHORN",
    description: "การพัฒนา PHP Full Stack, ความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่มีความยืดหยุ่นและสามารถขยายได้.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา PHP | CHORN",
        description: "ใช้ประโยชน์จากการพัฒนา PHP Full Stack, ความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่สามารถขยายได้และมีความยืดหยุ่น.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การพัฒนา PHP Full Stack | CHORN",
        description: "ความเชี่ยวชาญการพัฒนา PHP Full Stack สำหรับแอปพลิเคชันเว็บที่มีความยืดหยุ่นและสามารถขยายได้.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "การพัฒนา PHP", "ความเชี่ยวชาญทางเทคนิค PHP", "นักพัฒนา PHP", "การพัฒนา PHP แบบกำหนดเอง", "แอปพลิเคชันเว็บ PHP",
        "การพัฒนา PHP Full Stack", "แอปพลิเคชัน PHP สำหรับองค์กร", "การพัฒนาซอฟต์แวร์แบบกำหนดเอง",
        "การพัฒนา Symfony", "การพัฒนา Laravel", "การพัฒนา Yii Framework", "การพัฒนา Phalcon",
        "การพัฒนา Symfony แบบกำหนดเอง", "การพัฒนา Laravel แบบกำหนดเอง", "การพัฒนา Yii แบบกำหนดเอง", "การพัฒนา Phalcon แบบกำหนดเอง",
        "แอปพลิเคชันเว็บที่สามารถขยายได้", "การพัฒนา backend", "แอปพลิเคชันเว็บที่มีประสิทธิภาพสูง",
        "แอปพลิเคชันเว็บที่กำหนดเอง", "การพัฒนา API", "ซอฟต์แวร์สำหรับองค์กร", "เฟรมเวิร์ก PHP",
        "นักพัฒนา PHP ประเทศไทย", "นักพัฒนา PHP กรุงเทพ", "นักพัฒนา PHP เชียงใหม่",
        "นักพัฒนา backend ประเทศไทย", "นักพัฒนา full stack ประเทศไทย", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ ประเทศไทย",
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร"
    ]
}
