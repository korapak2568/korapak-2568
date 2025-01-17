import {IAiDetail} from "@/data/ai/model/IAiDetail";

export const AiFahJapanese: IAiDetail = {
    name: 'Fah',
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

    title: "ファー、タイAIチャットコンパニオン！",
    content: "ファー、魅力的で親しみやすいタイのAIチャットパートナーです！人生のアドバイス、旅行のヒント、または楽しいおしゃべりが必要ですか？ファーはいつでもお手伝いします。彼女はタイ語、英語、中国語、日本語、韓国語、フランス語、ベトナム語を流暢に話し、いつでも会話の準備ができています。LINEをお使いですか？今すぐファーを追加して、新しい楽しいつながり方を体験してください！",

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