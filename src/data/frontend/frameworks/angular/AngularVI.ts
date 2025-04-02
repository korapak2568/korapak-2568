import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AngularVI: IFrontEndStack = {
    title: "Angular",
    description: "Phát triển các ứng dụng web mạnh mẽ, cấp doanh nghiệp với framework toàn diện và linh hoạt của Angular.",
    image: ImageUrl.frontend.angular.path,
    alt: "Logo đại diện cho framework Angular",
    readMore: "Khám phá thêm các giải pháp phát triển front-end Angular",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Phát triển Angular",
            description: "Angular là một framework ứng dụng web mạnh mẽ được phát triển bởi Google. Nó tạo điều kiện cho việc tạo ra các ứng dụng đơn trang động với bộ công cụ toàn diện và kiến trúc MVC.",
            list: []
        },
        {
            title: "Điểm mạnh của Angular",
            description: "Angular nổi bật với kiến trúc mạnh mẽ và tính năng phong phú.",
            list: [
                "Liên kết dữ liệu hai chiều",
                "Tiêm phụ thuộc",
                "Cấu trúc dựa trên component",
                "Tích hợp TypeScript",
                "Công cụ kiểm thử toàn diện",
                "CLI phong phú",
                "Tài liệu hướng dẫn rộng rãi"
            ]
        },
        {
            title: "Thách thức và Giải pháp",
            description: "Angular giải quyết sự phức tạp trong các ứng dụng quy mô lớn với kiến trúc mạnh mẽ, liên kết dữ liệu hiệu quả và tiêm phụ thuộc.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Angular là gì?",
            answer: "Angular là một framework ứng dụng web được phát triển bởi Google để tạo ra các ứng dụng web động."
        },
        {
            question: "Liên kết dữ liệu hai chiều là gì?",
            answer: "Liên kết dữ liệu hai chiều đồng bộ hóa mô hình và giao diện, đảm bảo thay đổi ở một bên sẽ phản ánh ở bên kia."
        },
        {
            question: "Tại sao sử dụng TypeScript với Angular?",
            answer: "TypeScript nâng cao việc phát triển Angular với kiểu dữ liệu mạnh, tính năng hiện đại và công cụ được cải thiện."
        }
    ]
}