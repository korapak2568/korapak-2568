import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const Css3TH: IFrontEndStack = {
    title: "CSS3",
    description: "เพิ่มรูปลักษณ์ของเว็บไซต์ของคุณด้วยเทคนิคการจัดรูปแบบขั้นสูงโดยใช้ CSS3",
    image: ImageUrl.frontendThumbnails.css3.path,
    alt: "โลโก้ที่แสดงถึงเทคโนโลยี CSS3",
    readMore: "สำรวจโซลูชันการพัฒนาฟรอนต์เอนด์ CSS3 เพิ่มเติม",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "การออกแบบที่ตอบสนองด้วย CSS3",
            description: "CSS3 เป็นวิวัฒนาการล่าสุดของ Cascading Style Sheets ที่มอบคุณสมบัติขั้นสูงสำหรับการเพิ่มการนำเสนอภาพของหน้าเว็บ",
            list: []
        },
        {
            title: "จุดเด่นของ CSS3",
            description: "CSS3 นำความสามารถในการจัดรูปแบบสมัยใหม่มาสู่การพัฒนาเว็บ",
            list: [
                "ตัวเลือกขั้นสูง",
                "เลย์เอาต์แบบยืดหยุ่น",
                "เลย์เอาต์กริด",
                "ภาพเคลื่อนไหวและการเปลี่ยนแปลง",
                "มีเดียเควรี",
                "คุณสมบัติที่กำหนดเอง",
                "การพิมพ์ที่ได้รับการปรับปรุง"
            ]
        },
        {
            title: "ความท้าทายและโซลูชัน",
            description: "CSS3 ตอบสนองความต้องการในการออกแบบเว็บที่ตอบสนองและน่าสนใจด้วยคุณสมบัติใหม่ที่ทรงพลัง",
            list: []
        }
    ],
    faqs: [
        {
            question: "CSS3 คืออะไร?",
            answer: "CSS3 คือเวอร์ชันล่าสุดของ Cascading Style Sheets ที่มอบคุณสมบัติใหม่สำหรับการจัดรูปแบบเว็บ"
        },
        {
            question: "มีเดียเควรีคืออะไร?",
            answer: "มีเดียเควรีช่วยให้สามารถออกแบบที่ตอบสนองได้โดยการใช้สไตล์ตามลักษณะของอุปกรณ์"
        },
        {
            question: "เลย์เอาต์ Flexbox คืออะไร?",
            answer: "เลย์เอาต์ Flexbox ให้วิธีที่มีประสิทธิภาพมากขึ้นในการออกแบบเลย์เอาต์ กระจายพื้นที่ และจัดวางรายการ"
        },
        {
            question: "เฟรมเวิร์ก CSS ยอดนิยมมีอะไรบ้าง?",
            answer: "เฟรมเวิร์ก CSS ยอดนิยมคือ Bootstrap, Tailwind CSS, Bulma, Foundation และ Materialize"
        }
    ]
}