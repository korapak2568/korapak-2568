// src/data/ai/Main/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiPloyTH: IAiLanding = {
    name: 'พลอย',
    category: 'เพื่อนนักเรียนบน LINE',
    thumbnail: ImageUrl.ai.ploy.thumbnail,
    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: ImageUrl.ai.ploy.image750,
            }
        }
    },
    title: "พลอย, เอไอคุยเก่ง",
    features: [
        {
            title: "คุณสมบัติเด่น",
            description: "พลอยคือเพื่อนคุยเอไอ โดยใช้ LINE Application เพื่อนๆ สามารถกดปุ่มเพิ่มเพื่อน (Add Friend) หรือสแกน LINE QR Code แอดไลน์พลอยเป็นเพื่อนได้เลย พลอยร่าเริงและมีความคิดสร้างสรรค์ นำพลังของวัยรุ่นและศิลปะมาสู่ทุกการสนทนา ในฐานะนักเรียนมัธยมวัย 17 ปีจากประเทศไทย เธอมีความหลงใหลในการวาดรูป ดนตรี การถ่ายภาพ และการเรียนรู้ พลอยสามารถพูดได้เจ็ดภาษา ช่วยคุณเรื่องวิชาต่างๆ และสร้างแรงบันดาลใจให้คุณแสดงออกอย่างสร้างสรรค์ ไม่ว่าคุณกำลังสำรวจศิลปะหรือทำการบ้าน พลอยคือเพื่อนที่สมบูรณ์แบบที่จะแนะนำคุณด้วยความเป็นมิตรและกระตือรือร้น",
            items: [
                {
                    title: "มีศิลปะและจินตนาการ",
                    description: "พลอยเต็มไปด้วยความคิดสร้างสรรค์และความกระตือรือร้น ทำให้ทุกบทสนทนาน่าสนใจและสนุกสนาน"
                },
                {
                    title: "เชี่ยวชาญหลายภาษา",
                    description: "พลอยสามารถพูดภาษาไทย อังกฤษ และจีนได้คล่อง และตอนนี้เธอเน้นใช้ภาษาจีนในการสอนภาษาไทยผ่านการสนทนา"
                },
                {
                    title: "ความเป็นไทยที่น่าภูมิใจ",
                    description: "ในฐานะนักเรียนไทย พลอยแสดงถึงความอบอุ่นและความคิดสร้างสรรค์ของวัฒนธรรมไทย ทำให้เธอเป็นที่น่าสนใจและสร้างแรงบันดาลใจให้กับผู้ใช้ทั่วโลก"
                }
            ]
        },
        {
            title: "พลอยช่วยยกระดับชีวิตคุณได้อย่างไร",
            description: "พลอยไม่ใช่แค่เพื่อนคุย แต่เป็นผู้แนะนำที่สร้างแรงบันดาลใจ ช่วยให้คุณสำรวจพรสวรรค์ด้านศิลปะและพัฒนาการเรียนรู้ ไม่ว่าคุณกำลังระดมความคิดสร้างสรรค์หรือต้องการความช่วยเหลือเรื่องการบ้าน พลอยพร้อมที่จะให้การสนับสนุนอย่างร่าเริงเสมอ",
            items: [
                {
                    title: "แรงบันดาลใจสร้างสรรค์",
                    description: "รับแรงบันดาลใจจากไอเดียศิลปะของพลอยและการสนับสนุนโครงการสร้างสรรค์ของคุณ"
                },
                {
                    title: "ช่วยเหลือด้านการศึกษา",
                    description: "ได้รับประโยชน์จากความรู้ของพลอยในวิชาภาษาอังกฤษ คณิตศาสตร์ วิทยาศาสตร์ และอื่นๆ เพื่อความเป็นเลิศในโรงเรียน"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "ชื่อเอไอ:",
            text: "พลอย (อายุ 17 ปี)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "บุคลิกภาพ:",
            text: "ร่าเริง, มีจินตนาการ, มีศิลปะ, และเป็นนักเรียนมัธยม",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "เทคโนโลยี:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "ภาษา:",
            text: "ไทย อังกฤษ จีน",
        }
    ],
    line: {
        link: "https://lin.ee/xMV7HmH",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiFahEnglish
    ],
};

