import {Metadata} from "next";
import {MetadataLinkAiFah} from "@/metadata/pages/ai-fah/common/MetadataLinkAiFah";

export const MetadataAiFahTH: Metadata = {
    title: "เพื่อนแชทเอไอทางไลน์ | การผสาน CHORN AI",
    description: "ฟ้าเป็นเพื่อนแชทเอไอ ของคุณบนแอปพลิเคชันไลน์ เธอเป็นสาวไทยวัย 20 ปี ที่สดใสและเป็นกันเอง เพิ่มเธอด้วยการคลิกเพียงครั้งเดียวหรือสแกนคิวอาร์โค๊ด เพื่อค้นพบสถานที่ท่องเที่ยว อาหาร และวัฒนธรรมที่โดดเด่นของไทย พูดคุยได้หลายภาษาขณะเธอพาคุณสำรวจวัฒนธรรมไทยด้วยพลังแห่งความเยาว์วัย",
    alternates: MetadataLinkAiFah.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "ฟ้า - เพื่อนแชทเอไอสไตล์ไทยบนไลน์",
        description: "พบกับฟ้า เพื่อนแชทเอไอ สาวไทยวัย 20 ปีบนไลน์ ที่แนะนำสถานที่ท่องเที่ยว อาหาร และประสบการณ์ทางวัฒนธรรมที่ดีที่สุดของไทยในหลายภาษา เพิ่มเธอได้เลยวันนี้!",
        images: MetadataLinkAiFah.openGraph.images,
        url: MetadataLinkAiFah.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "ฟ้า - ไกด์วัฒนธรรมไทยของคุณบนไลน์",
        description: "เพิ่มฟ้า เพื่อนแชทเอไอ สาวไทยวัย 20 ปีที่สดใสบนไลน์ ที่ช่วยคุณสำรวจสถานที่ อาหาร และวัฒนธรรมไทยในหลายภาษา",
        images: MetadataLinkAiFah.twitter.images,
    },
}
