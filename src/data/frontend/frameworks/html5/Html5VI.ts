import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Html5VI: IFrontEndStack = {
    title: "HTML5",
    description: "Làm chủ các tiêu chuẩn mới nhất trong phát triển web cho nội dung phong phú và tương tác.",
    image: ImageUrl.frontend.frameworks.html5.thumbnail,
    alt: "Logo đại diện cho công nghệ HTML5",
    readMore: "Khám phá thêm các giải pháp phát triển front-end HTML5",
    link: "/technical-expertise/front-end-developer/html5-developer",
    features: [
        {
            title: "Thiết kế Web HTML5",
            description: "HTML5 là phiên bản mới nhất của ngôn ngữ đánh dấu siêu văn bản, giới thiệu các phần tử và API mới cho trải nghiệm web phong phú hơn.",
            list: []
        },
        {
            title: "Điểm mạnh của HTML5",
            description: "HTML5 nâng cao việc phát triển web với các tính năng và khả năng hiện đại.",
            list: [
                "Các phần tử ngữ nghĩa mới",
                "Hỗ trợ âm thanh và video",
                "Phần tử Canvas",
                "Cải thiện điều khiển biểu mẫu",
                "Khả năng làm việc ngoại tuyến",
                "API định vị địa lý",
                "Tăng cường khả năng tiếp cận"
            ]
        },
        {
            title: "Thách thức và Giải pháp",
            description: "HTML5 giải quyết nhu cầu về trải nghiệm web tương tác và phong phú đa phương tiện hơn với các phần tử và API mới.",
            list: []
        }
    ],
    faqs: [
        {
            question: "HTML5 là gì?",
            answer: "HTML5 là phiên bản mới nhất của ngôn ngữ đánh dấu siêu văn bản, giới thiệu các tính năng và phần tử mới."
        },
        {
            question: "Các phần tử ngữ nghĩa mới là gì?",
            answer: "Các phần tử ngữ nghĩa mới bao gồm <article>, <section>, <header>, <footer>, và nhiều hơn nữa để cấu trúc nội dung tốt hơn."
        },
        {
            question: "Phần tử canvas là gì?",
            answer: "Phần tử canvas cung cấp không gian để vẽ đồ họa thông qua JavaScript."
        }
    ]
}