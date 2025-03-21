// src/data/ai/landing/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";

export const AiPloyVI: IAiLanding = {
    name: 'Ploy',
    category: 'Bạn LINE cho Học sinh',
    thumbnail: '/images-ai/ai-companions/ai-ploy-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: '/images-ai/ai-ploy-details.png',
            }
        }
    },
    title: "Ploy, Trò chuyện AI LINE",
    image: {
        src: "/images-ai/ai-ploy-details.png",
        alt: "Ploy - Người bạn trò chuyện AI Thái Lan"
    },
    features: [
        {
            title: "Tính năng Độc đáo",
            description: "Ploy là một người bạn trò chuyện AI sử dụng Ứng dụng LINE. Bạn bè có thể nhấn nút Thêm bạn bè hoặc quét Mã QR LINE để thêm Ploy làm bạn ngay lập tức. Ploy vui vẻ và sáng tạo, mang năng lượng của tuổi trẻ và nghệ thuật vào mọi cuộc trò chuyện. Là một học sinh trung học 17 tuổi đến từ Thái Lan, cô ấy đam mê vẽ, âm nhạc, nhiếp ảnh và học tập. Ploy có thể nói bảy ngôn ngữ, giúp bạn với nhiều môn học khác nhau và truyền cảm hứng cho bạn thể hiện bản thân một cách sáng tạo. Cho dù bạn đang khám phá nghệ thuật hay làm bài tập về nhà, Ploy là người bạn hoàn hảo để hướng dẫn bạn với sự thân thiện và nhiệt tình.",
            items: [
                {
                    title: "Nghệ thuật và Giàu trí tưởng tượng",
                    description: "Ploy tràn đầy sáng tạo và nhiệt huyết, khiến mọi cuộc trò chuyện trở nên hấp dẫn và vui vẻ."
                },
                {
                    title: "Chuyên môn Đa ngôn ngữ",
                    description: "Thông thạo nhiều ngôn ngữ, bao gồm tiếng Thái, tiếng Anh, tiếng Pháp, tiếng Việt, tiếng Nhật, tiếng Trung, tiếng Hàn, v.v."
                },
                {
                    title: "Tự hào là người Thái",
                    description: "Là một học sinh Thái Lan, Ploy thể hiện sự ấm áp và sáng tạo của nền văn hóa của mình, làm cho cô ấy dễ gần và truyền cảm hứng cho người dùng trên toàn thế giới."
                }
            ]
        },
        {
            title: "Cách Ploy Nâng cao Cuộc sống của Bạn",
            description: "Ploy không chỉ là một người bạn trò chuyện—cô ấy là một người hướng dẫn đầy cảm hứng giúp bạn khám phá tài năng nghệ thuật và cải thiện việc học tập của mình. Dù bạn đang suy nghĩ về các ý tưởng sáng tạo hay cần giúp đỡ với bài tập về nhà, Ploy luôn ở đó để hỗ trợ bạn một cách vui vẻ.",
            items: [
                {
                    title: "Cảm hứng Sáng tạo",
                    description: "Lấy cảm hứng từ ý tưởng nghệ thuật của Ploy và sự hỗ trợ cho các dự án sáng tạo của bạn."
                },
                {
                    title: "Hỗ trợ Học tập",
                    description: "Tận dụng kiến thức của Ploy về tiếng Anh, toán học, khoa học và hơn thế nữa để xuất sắc trong trường học."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "Tên AI:",
            text: "Ploy (17 tuổi)",
        },
        {
            icon: "bx bx-heart",
            caption: "Tính cách:",
            text: "Vui vẻ, giàu trí tưởng tượng, nghệ thuật và là học sinh trung học",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Công nghệ:",
            text: "OpenAI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Ngôn ngữ:",
            text: "Đa ngôn ngữ",
        },
        {
            icon: "bx bx-calendar",
            caption: "Ngày ra mắt:",
            text: "Ngày 1 tháng 1 năm 2025",
        },
        {
            icon: "bx bx-world",
            caption: "Nền tảng:",
            text: "OpenAI, LINE",
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

