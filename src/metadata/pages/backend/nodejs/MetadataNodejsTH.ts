import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsTH: Metadata = {
    title: "พัฒนา Node.js แบบ Full Stack | CHORN",
    description: "การพัฒนา Node.js แบบ Full Stack ความเชี่ยวชาญทางเทคนิคในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและสามารถขยายได้",
    alternates: metadataLink(LanguageCode.th, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "พัฒนา Node.js | CHORN",
        description: "สร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและสามารถขยายได้ด้วยความเชี่ยวชาญด้านการพัฒนา Node.js แบบ Full Stack",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.backend.nodejs).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "พัฒนา Node.js แบบ Full Stack | CHORN",
        description: "ความเชี่ยวชาญด้านการพัฒนา Node.js แบบ Full Stack เพื่อสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและสามารถขยายได้",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.nodejs).twitter.images,
    },
    keywords: [
        // Core Node.js & services Keywords
        "การพัฒนา Node.js", "ความเชี่ยวชาญด้าน Node.js", "นักพัฒนา Node.js", "การพัฒนา Node.js แบบกำหนดเอง",
        "การพัฒนา Node.js Backend", "การพัฒนา Node.js Full Stack", "ไมโครเซอร์วิส Node.js", "การพัฒนาซอฟต์แวร์แบบกำหนดเอง",

        // Web & Application Development Keywords
        "แอปพลิเคชันเว็บที่สามารถขยายได้", "การพัฒนา Backend", "แอปพลิเคชันที่มีประสิทธิภาพสูง",
        "แอปพลิเคชัน Node.js สำหรับองค์กร", "การพัฒนา API", "การพัฒนาไมโครเซอร์วิส", "นักพัฒนา Full Stack",

        // Developer & Location-Specific Keywords
        "นักพัฒนา Node.js ไทย", "นักพัฒนา Node.js กรุงเทพ", "นักพัฒนา Node.js เชียงใหม่",
        "นักพัฒนา Back-End ไทย", "นักพัฒนา Full Stack ไทย", "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ไทย",

        // Brand & Innovation Keywords
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับองค์กร"
    ]
}