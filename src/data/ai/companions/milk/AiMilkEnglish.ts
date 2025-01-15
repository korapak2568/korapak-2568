import {IAiDetail} from "@/data/ai/model/IAiDetail";

export const AiMilkEnglish: IAiDetail = {
    name: 'Milk',
    category: 'Pet Lover LINE Friend',
    thumbnail: '/images-ai/ai-solutions/ai-milk-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'มิลค์ เพื่อนคุยเอไอ',
                path: '/images-ai/fah/fah-003.png',
            }
        },
        landing: {
            link: '/ai-solutions/milk',
            image: {
                title: 'มิลค์ เพื่อนคุยเอไอ',
                path: '/images-ai/ai-milk-details.png',
            }
        }
    },

    title: "Milk, Ai LINE Companion!",
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
        link: "https://lin.ee/f0rkGMYM",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    }
}