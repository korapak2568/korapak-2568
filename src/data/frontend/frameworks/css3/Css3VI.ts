import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const Css3VI: IFrontEndStack = {
    title: "CSS3",
    description: "Nâng cao giao diện trang web của bạn với các kỹ thuật tạo kiểu nâng cao sử dụng CSS3.",
    image:  ImageUrl.frontendThumbnails.css3.path,
    alt: "Logo đại diện cho công nghệ CSS3",
    readMore: "Khám phá thêm các giải pháp phát triển front-end CSS3",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "Thiết kế Responsive CSS3",
            description: "CSS3 là sự phát triển mới nhất của Cascading Style Sheets, cung cấp các tính năng nâng cao để cải thiện trình bày trực quan của trang web.",
            list: []
        },
        {
            title: "Điểm mạnh của CSS3",
            description: "CSS3 mang đến khả năng tạo kiểu hiện đại cho phát triển web.",
            list: [
                "Bộ chọn nâng cao",
                "Bố cục hộp linh hoạt",
                "Bố cục lưới",
                "Hoạt ảnh và chuyển tiếp",
                "Media queries",
                "Thuộc tính tùy chỉnh",
                "Cải thiện kiểu chữ"
            ]
        },
        {
            title: "Thách thức và Giải pháp",
            description: "CSS3 đáp ứng nhu cầu về thiết kế web responsive, hấp dẫn trực quan với các tính năng mới mạnh mẽ.",
            list: []
        }
    ],
    faqs: [
        {
            question: "CSS3 là gì?",
            answer: "CSS3 là phiên bản mới nhất của Cascading Style Sheets, cung cấp các tính năng mới cho việc tạo kiểu web."
        },
        {
            question: "Media queries là gì?",
            answer: "Media queries cho phép thiết kế responsive bằng cách áp dụng các kiểu dựa trên đặc điểm của thiết bị."
        },
        {
            question: "Bố cục Flexbox là gì?",
            answer: "Bố cục Flexbox cung cấp cách hiệu quả hơn để thiết kế layout, phân phối không gian và căn chỉnh các mục."
        },
        {
            question: "Các framework CSS phổ biến là gì?",
            answer: "Các framework CSS phổ biến là Bootstrap, Tailwind CSS, Bulma, Foundation và Materialize."
        }
    ]
}