import {Metadata} from "next";
import {MetadataLinkPhp} from "@/data/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonTH: Metadata = {
    title: "การพัฒนา Python Full Stack | CHORN",
    description: "การพัฒนา Python Full Stack, ความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่มีความยืดหยุ่นและสามารถขยายได้",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การพัฒนา Python | CHORN",
        description: "สร้างแอปพลิเคชันเว็บที่มีความยืดหยุ่นและสามารถขยายได้ด้วยความเชี่ยวชาญในการพัฒนา Python Full Stack",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การพัฒนา Python Full Stack | CHORN",
        description: "ความเชี่ยวชาญในการพัฒนา Python Full Stack สำหรับแอปพลิเคชันเว็บที่มีความยืดหยุ่นและสามารถขยายได้",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "การพัฒนา Python", "ความเชี่ยวชาญ Python", "นักพัฒนา Python", "การพัฒนา Python ที่ปรับแต่ง", "แอปพลิเคชันเว็บ Python",
        "การพัฒนา Python backend", "การพัฒนา Python Full Stack", "การพัฒนา software ที่ปรับแต่ง",
        "แอปพลิเคชันเว็บที่สามารถขยายได้", "การพัฒนา backend", "แอปพลิเคชัน Python สำหรับธุรกิจ",
        "แอปพลิเคชันที่มีประสิทธิภาพสูง", "แอปพลิเคชันเว็บที่ปรับแต่ง", "การพัฒนา API", "การพัฒนา machine learning",
        "นักพัฒนา Python ประเทศไทย", "นักพัฒนา Python กรุงเทพมหานคร", "นักพัฒนา Python เชียงใหม่",
        "นักพัฒนา backend ประเทศไทย", "วิศวกรซอฟต์แวร์", "นักพัฒนา software ประเทศไทย",
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์สำหรับธุรกิจ"
    ]
}