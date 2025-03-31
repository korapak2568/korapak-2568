import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyTH: Metadata = {
    title: "นโยบายการทำงาน | CHORN",
    description: "CHORN ปรับตัวเพื่อรองรับการทำงานหลายรูปแบบเช่น ทำงานระยะไกล ในสำนักงาน และแบบผสมผสาน โดยปรับให้เข้ากับความต้องการเฉพาะของแต่ละโครงการ แนวทางนี้ช่วยให้มั่นใจได้ถึงการสื่อสารที่ราบรื่น ประสิทธิภาพ",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "นโยบายการทำงาน | CHORN",
        description: "CHORN ปรับตัวเพื่อรองรับการทำงานหลายรูปแบบเช่น ทำงานระยะไกล ในสำนักงาน และแบบผสมผสาน โดยปรับให้เข้ากับความต้องการเฉพาะของแต่ละโครงการ แนวทางนี้ช่วยให้มั่นใจได้ถึงการสื่อสารที่ราบรื่น ประสิทธิภาพ",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "นโยบายการทำงาน | CHORN",
        description: "CHORN ปรับตัวเพื่อรองรับการทำงานหลายรูปแบบเช่น ทำงานระยะไกล ในสำนักงาน และแบบผสมผสาน โดยปรับให้เข้ากับความต้องการเฉพาะของแต่ละโครงการ แนวทางนี้ช่วยให้มั่นใจได้ถึงการสื่อสารที่ราบรื่น ประสิทธิภาพ",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}