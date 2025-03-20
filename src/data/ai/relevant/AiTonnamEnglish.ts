import {IAiDetail} from "@/data/ai/landing/model/IAiDetail";

export const AiTonnamEnglish: IAiDetail = {
    name: 'Tonnam',
    category: 'Students LINE Friend',
    thumbnail: '/images-ai/ai-companions/ai-tonnam-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'ต้นน้ำ เพื่อนคุยเอไอ',
                path: '/images-ai/fah/fah-003.png',
            }
        },
        landing: {
            link: '/ai-companions/tonnam',
            image: {
                title: 'ต้นน้ำ เพื่อนคุยเอไอ',
                path: '/images-ai/ai-tonnam-details.png',
            }
        }
    },

    title: "Tonnam, AI Chat",
    content:
        "Fah, ai chat friend in 6 languages, a charming and friendly Thai ai chat companion! Need life advice, " +
        "travel tips, or just a fun conversation? Fah is here for you. Fluent in Thai, English, Chinese, Japanese, " +
        "Korean, and French, she’s ready to chat anytime. Using LINE? Add Fah now and discover a delightful " +
        "new way to connect!",

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
        link: "https://lin.ee/Sy2Ispp",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    }
}