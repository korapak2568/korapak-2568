import {IAiDetail} from "@/data/ai/model/IAiDetail";

export const AiFahChinese: IAiDetail = {
    name: 'Fah',
    category: 'Thai LINE Friend',
    thumbnail: '/images-ai/ai-solutions/ai-fah-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/fah/fah-003.png',
            }
        },
        landing: {
            link: '/ai-solutions/fah',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/ai-fah-details.png',
            }
        }
    },

    title: "法，泰国人工智能聊天伙伴！",
    content:
        "法，一位迷人又友好的泰国AI！无论是生活建议、旅行贴士，还是轻松有趣的聊天，法都随时为您服务。她精通泰语、英语、中文、日语、韩语、法语和越南语。如果您在使用LINE，赶快加法为好友，体验全新的有趣沟通方式吧！",

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
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    }
}