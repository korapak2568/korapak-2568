import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPhpTH: Metadata = {
    title: "การพัฒนา PHP Full Stack | CHORN",
    description: "การพัฒนา PHP Full Stack, ความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่มีความยืดหยุ่นและสามารถขยายได้.",
    alternates: metadataLink(LanguageCode.th, MetaLinks.backend.php).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา PHP | CHORN",
        description: "ใช้ประโยชน์จากการพัฒนา PHP Full Stack, ความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่สามารถขยายได้และมีความยืดหยุ่น.",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.php).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.backend.php).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การพัฒนา PHP Full Stack | CHORN",
        description: "ความเชี่ยวชาญการพัฒนา PHP Full Stack สำหรับแอปพลิเคชันเว็บที่มีความยืดหยุ่นและสามารถขยายได้.",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.php).twitter.images,
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
