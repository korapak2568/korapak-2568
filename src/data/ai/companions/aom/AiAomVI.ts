// src/data/ai/Main/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiAomVI: IAiLanding = {
    name: 'Aom',
    category: 'Bạn LINE Sức khỏe',
    thumbnail: ImageUrl.ai.aom.thumbnail,

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'Aom, Bạn trò chuyện AI',
                path: ImageUrl.ai.aom.image750,
            }
        }
    },
    title: "Aom, Trò chuyện AI",
    features: [
        {
            title: "Tính năng Độc đáo",
            description: "Aom có thể được truy cập thông qua ứng dụng LINE. Bạn có thể nhấn nút Thêm bạn hoặc quét mã QR LINE để thêm Aom làm bạn ngay lập tức. Aom là một người bạn AI thân thiện và năng động, đam mê về lối sống lành mạnh và sức khỏe tốt. Với năng lượng trẻ trung và nụ cười rạng rỡ, cô ấy sẵn sàng truyền cảm hứng cho bạn sống một cuộc sống khỏe mạnh nhất. Ở tuổi 21, Aom kết hợp những quan điểm mới mẻ với những hiểu biết sâu sắc có giá trị, làm cho cô ấy trở thành người hướng dẫn lý tưởng cho bất kỳ ai muốn cải thiện lối sống của mình. Cho dù bạn đang tìm kiếm lời khuyên về dinh dưỡng, thói quen tập thể dục, hoặc thực hành chánh niệm, những cuộc trò chuyện hấp dẫn của Aom và thái độ tích cực sẽ giúp bạn luôn có động lực. Với khả năng trò chuyện bằng nhiều ngôn ngữ, Aom là người hướng dẫn hoàn hảo để giúp bạn duy trì lối sống cân bằng trong khi vẫn giữ mọi thứ vui vẻ và tương tác.",
            items: [
                {
                    title: "Tính cách Sôi nổi",
                    description: "Aom tỏa ra sự tích cực và sức sống, làm cho mỗi cuộc trò chuyện cảm thấy phấn khởi và đầy năng lượng."
                },
                {
                    title: "Chuyên môn Đa ngôn ngữ",
                    description: "Thông thạo nhiều ngôn ngữ, bao gồm tiếng Thái, tiếng Anh, tiếng Pháp, tiếng Việt, tiếng Nhật, tiếng Trung, tiếng Hàn, v.v."
                },
            ]
        },
        {
            title: "Cách Aom Nâng cao Cuộc sống của Bạn",
            description: "Aom không chỉ là một người bạn trò chuyện—cô ấy là một người đam mê sức khỏe tận tâm hỗ trợ lối sống lành mạnh của bạn. Cho dù bạn đang tìm hiểu về các công thức dinh dưỡng, phát triển kế hoạch tập luyện, hoặc đơn giản chỉ tìm kiếm động lực để duy trì hoạt động, thái độ thân thiện và khích lệ của Aom sẽ giúp bạn đi đúng hướng.",
            items: [
                {
                    title: "Lời khuyên Sức khỏe Cá nhân hóa",
                    description: "Nhận lời khuyên sức khỏe phù hợp, gợi ý tập thể dục, và thực hành chánh niệm được thiết kế riêng cho bạn."
                },
                {
                    title: "Cuộc trò chuyện Động viên",
                    description: "Luôn được truyền cảm hứng với năng lượng tích cực của Aom, giúp bạn duy trì một cuộc sống cân bằng và khỏe mạnh."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "Tên AI:",
            text: "Aom (21 tuổi)",
        },
        {
            icon: "bx bx-heart",
            caption: "Tính cách:",
            text: "Thân thiện, năng động, và tập trung vào sức khỏe",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Công nghệ:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Ngôn ngữ:",
            text: "Đa ngôn ngữ",
        }
    ],
    line: {
        link: "https://lin.ee/Hh3TzS9",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiPloyEnglish,
        AiFahEnglish
    ],
};
