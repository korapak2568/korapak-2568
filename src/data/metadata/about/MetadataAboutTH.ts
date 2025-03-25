import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/about/common/MetadataLinkAbout";

export const MetadataAboutTH: Metadata = {
    title: "เกี่ยวกับ CHORN | การวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์แบบ Full-Stack",
    description: "ค้นพบความเชี่ยวชาญของ CHORN ในการวิเคราะห์ระบบ การพัฒนาแบบ full-stack และโซลูชันซอฟต์แวร์สมัยใหม่ที่ขับเคลื่อนความสำเร็จทางธุรกิจ",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - ผู้เชี่ยวชาญด้านการวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์แบบ Full-Stack",
        description: "สำรวจความมุ่งมั่นของ CHORN ในการส่งมอบการปรับปรุงระบบล้ำสมัย การพัฒนาแบบ full-stack และการสนับสนุนทางเทคนิคสำหรับธุรกิจ",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - ผู้นำด้านการวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์แบบ Full-Stack",
        description: "ปลดล็อกศักยภาพทางธุรกิจด้วยการวิเคราะห์ระบบขั้นสูง การพัฒนาแบบ full-stack และโซลูชันซอฟต์แวร์สมัยใหม่ของ CHORN",
        images: MetadataLinkAbout.twitter.images,
    },
}