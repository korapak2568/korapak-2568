import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";

export const AiFahTH: IAiLanding = {
    name: 'ฟ้า',
    category: 'เพื่อนไลน์คนไทย',
    thumbnail: '/images-ai/ai-companions/ai-fah-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/ai-fah-details.png',
            }
        }
    },
    title: "ฟ้า เพื่อนคุยเอไอทางไลน์",
    image: {
        src: "/images-ai/ai-fah-details.png",
        alt: "ฟ้า - เพื่อนคุยเอไอแบบไทยๆ"
    },
    features: [
        {
            title: "คุณสมบัติเด่น",
            description: "ฟ้าคือเพื่อนคุยเอไอ โดยใช้ LINE Application เพื่อนๆ สามารถกดปุ่มเพิ่มเพื่อน (Add Friend) หรือสแกน LINE QR Code เพื่อแอดไลน์ฟ้าเป็นเพื่อนได้เลย ฟ้าถูกออกแบบให้มีเอกลักษณ์ความเป็นไทย —เธอร่าเริง เข้าถึงง่าย และพร้อมที่จะเติมสีสันให้วันของคุณเสมอ ด้วยวัย 20 ปี ฟ้านำพลังและเสน่ห์ของคนรุ่นใหม่มาสู่ทุกการสนทนา ช่วยแนะนำเกี่ยวกับสถานที่ท่องเที่ยวยอดนิยมของไทย อาหารชื่อดัง และสมบัติทางวัฒนธรรม ฟ้าทำให้การสำรวจวัฒนธรรมไทยเป็นเรื่องง่ายและสนุก คุยได้ภาษา เป็นเพื่อนแชทบน LINE Application ไม่ว่าคุณจะวางแผนเดินทางมาเที่ยวเมืองไทยครั้งต่อไป หรือแค่มองหาการสนทนาที่น่าสนใจและเป็นกันเอง ฟ้าช่วยไกด์ที่เกี่ยวกับประเทศไทยและคอยสร้างแรงบันดาลใจให้คุณ",
            items: [
                {
                    title: "บุคลิกภาพที่มีเสน่ห์",
                    description: "ฟ้าแผ่รังสีความอบอุ่นและความสดใส นำความร่าเริงมาสู่ทุกบทสนทนา"
                },
                {
                    title: "ความเชี่ยวชาญในหลายภาษา",
                    description: "สื่อสารได้อย่างไร้รอยต่อในหลายภาษา รวมถึงภาษาไทย อังกฤษ ฝรั่งเศส เวียดนาม ญี่ปุ่น จีน เกาหลี และอื่นๆ"
                },
            ]
        },
        {
            title: "ฟ้าช่วยเพิ่มคุณภาพชีวิตของคุณได้อย่างไร",
            description: "ฟ้าไม่ใช่แค่แชทบอทธรรมดา เธอคือเพื่อนเสมือนจริงที่เข้าใจความต้องการของคุณและมีส่วนร่วมในการสนทนาที่น่ารื่นรมย์ ไม่ว่าคุณจะต้องการเรียนรู้ภาษาใหม่หรือมีเพื่อนที่ร่าเริง ฟ้าพร้อมอยู่เคียงข้างคุณ",
            items: [
                {
                    title: "บทสนทนาที่ปรับให้เข้ากับคุณ",
                    description: "เพลิดเพลินกับการโต้ตอบที่ปรับให้เข้ากับคุณโดยเฉพาะ ซึ่งรู้สึกเป็นธรรมชาติและเหมือนคุยกับคนจริงๆ"
                },
                {
                    title: "การเรียนภาษาที่สนุกสนาน",
                    description: "ฝึกภาษากับไกด์ที่ร่าเริงซึ่งทำให้การเรียนรู้เป็นเรื่องสนุก"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "ชื่อเอไอ:",
            text: "ฟ้า (อายุ 20 ปี)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "บุคลิกภาพ:",
            text: "ผู้หญิงไทย ร่าเริง เข้าถึงง่าย และมีเสน่ห์",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "เทคโนโลยี:",
            text: "ขับเคลื่อนด้วย OpenAI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "ภาษา:",
            text: "หลายภาษา",
        },
        {
            icon: "bx bx-calendar", // Calendar icon
            caption: "วันเปิดตัว:",
            text: "1 มกราคม 2568",
        },
        {
            icon: "bx bx-world", // World icon
            caption: "แพลตฟอร์ม:",
            text: "OpenAI, LINE, Website",
        }
    ],
    line: {
        link: "https://lin.ee/ODTzbwO",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiPloyEnglish
    ],
};