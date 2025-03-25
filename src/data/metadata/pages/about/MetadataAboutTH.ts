import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataAboutTH: Metadata = {
    title: "เกี่ยวกับ CHORN | การวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์ครบวงจร",
    description: "ค้นพบความเชี่ยวชาญของ CHORN ในการวิเคราะห์ระบบ การพัฒนาซอฟต์แวร์ครบวงจร และโซลูชันซอฟต์แวร์สมัยใหม่ที่ขับเคลื่อนความสำเร็จทางธุรกิจ",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - ผู้เชี่ยวชาญด้านการวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์ครบวงจร",
        description: "สำรวจความมุ่งมั่นของ CHORN ในการส่งมอบการปรับปรุงระบบล้ำสมัย การพัฒนาซอฟต์แวร์ครบวงจร และการสนับสนุนทางเทคนิคสำหรับธุรกิจ",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - ผู้นำด้านการวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์ครบวงจร",
        description: "ปลดล็อกศักยภาพทางธุรกิจด้วยการวิเคราะห์ระบบขั้นสูง การพัฒนาซอฟต์แวร์ครบวงจร และโซลูชันซอฟต์แวร์สมัยใหม่",
        images: MetadataLinkAbout.twitter.images,
    },
}