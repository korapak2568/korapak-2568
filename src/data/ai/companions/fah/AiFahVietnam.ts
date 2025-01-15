import {IAiDetail} from "@/data/ai/model/IAiDetail";

export const AiFahVietnam: IAiDetail = {
    name: 'Fah',
    category: "Bạn LINE Thái Lan",
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

    title: "Fah, Người Bạn Trò Chuyện AI LINE!",
    content:
        "Fah, một người bạn trò chuyện AI thân thiện và quyến rũ từ Thái Lan! Cần lời khuyên cuộc sống, mẹo du lịch, hoặc chỉ đơn giản là một cuộc trò chuyện thú vị? Fah luôn sẵn sàng bên bạn. Thành thạo tiếng Thái, tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Hàn, tiếng Pháp và tiếng Việt, Fah luôn sẵn sàng trò chuyện bất cứ lúc nào. Đang sử dụng LINE? Hãy thêm Fah ngay để khám phá một cách kết nối mới đầy thú vị!",

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