import {IAiDetail} from "@/data/ai/model/IAiDetail";

export const AiFahKorean: IAiDetail = {
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

    title: "파, 태국 ai 채팅 동반자!",
    content:
        "파, 6개 언어를 구사하는 ai 채팅 동반자, 매력적이고 친근한 태국 ai 친구입니다! 생활 조언, 여행 팁, 또는 재미있는 대화를 원하신다면 파가 언제든지 도와드릴게요. 태국어, 영어, 중국어, 일본어, 한국어, 그리고 프랑스어를 유창하게 구사합니다. LINE을 사용 중이신가요? 지금 바로 파를 추가하고 새로운 소통의 즐거움을 경험하세요!",

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