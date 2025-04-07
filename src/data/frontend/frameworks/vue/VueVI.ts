import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/image/ImageUrl";

export const VueVI: IFrontEndStack = {
    title: "Vue",
    description: "Tạo giao diện web hiện đại, phản ứng nhanh chóng với thiết kế trực quan và linh hoạt của Vue.",
    image: ImageUrl.frontendThumbnails.vue.path,
    alt: "Logo đại diện cho framework Vue.js",
    readMore: "Khám phá thêm các giải pháp phát triển front-end VueJS",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Phát triển Vue",
            description: "Vue.js là một framework JavaScript tiến bộ để xây dựng giao diện người dùng. Nó được thiết kế để có thể áp dụng từng bước, với thư viện cốt lõi tập trung vào lớp hiển thị.",
            list: []
        },
        {
            title: "Điểm mạnh của Vue",
            description: "Vue.js cung cấp một framework linh hoạt và hiệu quả với những thế mạnh chính.",
            list: [
                "Liên kết dữ liệu phản ứng",
                "Cấu trúc dựa trên component",
                "DOM ảo",
                "Tích hợp dễ dàng",
                "Tài liệu toàn diện",
                "Vue CLI",
                "Cộng đồng năng động"
            ]
        },
        {
            title: "Thách thức và Giải pháp",
            description: "Vue.js đơn giản hóa việc phát triển web với API trực quan, liên kết dữ liệu phản ứng và dễ dàng tích hợp.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Vue.js là gì?",
            answer: "Vue.js là một framework JavaScript tiến bộ để xây dựng giao diện người dùng."
        },
        {
            question: "DOM ảo là gì?",
            answer: "DOM ảo là một bản sao nhẹ của DOM thực tế, tối ưu hóa các cập nhật và hiệu suất."
        },
        {
            question: "Vue.js khác với React như thế nào?",
            answer: "Vue.js cung cấp tích hợp linh hoạt và đơn giản hơn so với cài đặt phức tạp hơn của React."
        }
    ]
}