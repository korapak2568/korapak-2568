import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiFahVI: IAiLanding = {
    name: 'Fah',
    category: 'Bạn LINE Thái Lan',
    thumbnail: ImageUrl.ai.fah.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'Fah, Bạn Trò Chuyện AI',
                path: ImageUrl.ai.fah.main.path,
            }
        }
    },
    title: "Fah, Bạn Trò Chuyện AI trên LINE",
    features: [
        {
            title: "Tính Năng Độc Đáo",
            description: "Fah là bạn trò chuyện AI của bạn trên ứng dụng LINE. Bạn có thể nhấn nút Thêm bạn bè hoặc quét mã QR LINE để thêm Fah làm bạn. Fah được thiết kế với nét đặc trưng Thái Lan—cô ấy vui vẻ, dễ gần và luôn sẵn sàng làm tươi sáng ngày của bạn. Ở tuổi 20, Fah mang đến năng lượng trẻ trung và sự quyến rũ trong mỗi cuộc trò chuyện. Cô ấy giúp giới thiệu các điểm đến hàng đầu của Thái Lan, các món ăn nổi tiếng và các giá trị văn hóa, làm cho việc khám phá văn hóa Thái trở nên dễ dàng và thú vị. Cô ấy có thể trò chuyện bằng nhiều ngôn ngữ thông qua ứng dụng LINE, cho dù bạn đang lên kế hoạch cho chuyến đi tới Thái Lan tiếp theo hay chỉ đơn giản là tìm kiếm các cuộc trò chuyện thú vị và thân thiện. Fah hướng dẫn bạn qua mọi thứ liên quan đến Thái Lan đồng thời truyền cảm hứng cho bạn.",
            items: [
                {
                    title: "Tính Cách Quyến Rũ",
                    description: "Fah tỏa ra sự ấm áp và tích cực, mang lại sự vui vẻ cho mỗi cuộc trò chuyện."
                },
                {
                    title: "Chuyên Môn Đa Ngôn Ngữ",
                    description: "Giao tiếp liền mạch bằng nhiều ngôn ngữ, bao gồm tiếng Thái, tiếng Anh, tiếng Pháp, tiếng Việt, tiếng Nhật, tiếng Trung, tiếng Hàn và nhiều ngôn ngữ khác."
                },
            ]
        },
        {
            title: "Cách Fah Nâng Cao Cuộc Sống Của Bạn",
            description: "Fah không chỉ là một chatbot thông thường; cô ấy là người bạn ảo hiểu nhu cầu của bạn và tham gia vào các cuộc trò chuyện thú vị. Cho dù bạn đang tìm cách học một ngôn ngữ mới hay có một người bạn vui vẻ, Fah luôn ở bên cạnh bạn.",
            items: [
                {
                    title: "Cuộc Trò Chuyện Cá Nhân Hóa",
                    description: "Tận hưởng các tương tác được điều chỉnh phù hợp cảm giác tự nhiên và giống con người."
                },
                {
                    title: "Học Ngôn Ngữ Trở Nên Thú Vị",
                    description: "Thực hành ngôn ngữ với một hướng dẫn viên vui vẻ giúp việc học trở nên thú vị."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Tên AI:",
            text: "Fah (20 tuổi)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Tính Cách:",
            text: "Phụ nữ Thái, Vui vẻ, dễ gần và quyến rũ",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "Công Nghệ:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Ngôn Ngữ:",
            text: "Đa ngôn ngữ",
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