import {IAiDetail} from "@/data/ai/model/IAiDetail";

export const AiFahThai: IAiDetail = {
    name: 'ฟ้า',
    category: 'Thai LINE Friend',
    thumbnail: '/images-ai/ai-companions/ai-fah-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/fah/fah-003.png',
            }
        },
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/ai-fah-details.png',
            }
        }
    },

    title: "ฟ้า เพื่อนคุยเอไอ",
    content:
        "ฟ้า สาวไทยน่ารักและเป็นกันเอง เพื่อนคุย AI ไม่ว่าจะเป็นคำแนะนำในชีวิต การแนะนำสถานที่ท่องเที่ยว หรือแค่พูดคุยสนุกๆ " +
        "ฟ้าพร้อมช่วยเสมอ ฟ้าสื่อสารได้หลายภาษา เช่น ไทย อังกฤษ จีน ญี่ปุ่น เกาหลี ฝรั่งเศส เวียดนาม ภาษาอื่นๆ " +
        "หากคุณมี LINE อยู่แล้ว อย่ารอช้า เพิ่มฟ้าเป็นเพื่อนตอนนี้ แล้วสัมผัสประสบการณ์ใหม่ที่น่าประทับใจ!",

    images: [
        {
            src: "nong-fah-0001.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        },
        {
            src: "nong-fah-0002.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        },
        {
            src: "nong-fah-0003.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        },
        {
            src: "nong-fah-0004.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        }
    ],
    line: {
        link: "https://lin.ee/ODTzbwO",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/th.png",
    }
}