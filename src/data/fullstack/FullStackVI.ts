import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {DotnetVI} from "@/data/fullstack/frameworks/dotnet/DotnetVI";
import {GoVI} from "@/data/fullstack/frameworks/go/GoVI";
import {JavaVI} from "@/data/fullstack/frameworks/java/JavaVI";
import {NodejsVI} from "@/data/fullstack/frameworks/nodejs/NodejsVI";
import {PhpVI} from "@/data/fullstack/frameworks/php/PhpVI";
import {PythonVI} from "@/data/fullstack/frameworks/python/PythonVI";

export const FullStackVI: IFullStack = {
    title: "Kinh nghiệm Back-End & API",
    span: "Kinh nghiệm phát triển Back-End & API",
    subTitle: "",

    dotnetcore: DotnetVI,
    go: GoVI,
    java: JavaVI,
    nodejs: NodejsVI,
    php: PhpVI,
    python: PythonVI,

    stacks: [],

    services: {
        title: "Phát Triển Back-End & API",
        descriptions: [
            "Xây dựng các ứng dụng web mạnh mẽ, an toàn và có khả năng mở rộng với dịch vụ phát triển full-stack chuyên nghiệp của chúng tôi. Các nhà phát triển của chúng tôi xuất sắc trong cả công nghệ front-end và back-end, tạo ra các giải pháp toàn diện được điều chỉnh theo yêu cầu kinh doanh cụ thể của bạn. Chuyên môn kỹ thuật của CHORN bao gồm nhiều công nghệ khác nhau như Node.js, .NET Core C#, Java Spring Boot, Python, Go và PHP, cho phép chúng tôi xử lý các dự án với mọi độ phức tạp. Cho dù bạn đang ra mắt Proof of Concept (PoC) ban đầu hay đang phát triển Minimum Viable Product (MVP) sẵn sàng cho thị trường, đội ngũ chuyên nghiệp của chúng tôi đảm bảo sự tích hợp liền mạch giữa giao diện người dùng và chức năng phía máy chủ để tạo trải nghiệm người dùng vượt trội."
        ],
        items: [
            {
                title: "Tích Hợp Front-End & Back-End Liền Mạch",
                description: "Phát triển các ứng dụng web đồng bộ với các thành phần máy khách và máy chủ được đồng bộ hóa hoàn hảo, mang lại tốc độ, bảo mật và khả năng mở rộng."
            },
            {
                title: "Tối Ưu Hóa SEO & Hiệu Suất Toàn Diện",
                description: "Cải thiện khả năng hiển thị của trang web trên công cụ tìm kiếm và trải nghiệm người dùng thông qua cấu trúc mã được tối ưu hóa, thời gian tải nhanh hơn và quản lý tài nguyên hiệu quả."
            },
            {
                title: "Kiểm Tra Tự Động Mạnh Mẽ",
                description: "Đảm bảo độ tin cậy và ổn định của ứng dụng với các khung kiểm tra toàn diện được tích hợp xuyên suốt vòng đời phát triển."
            },
            {
                title: "Quản Lý Cơ Sở Dữ Liệu Nâng Cao",
                description: "Cấu trúc và quản lý dữ liệu hiệu quả với các giải pháp cơ sở dữ liệu tối ưu bao gồm MySQL, MongoDB, PostgreSQL và các công nghệ hàng đầu khác."
            },
            {
                title: "Dịch Vụ Đám Mây Cấp Doanh Nghiệp",
                description: "Triển khai và mở rộng ứng dụng hiệu quả bằng AWS, Azure, Google Cloud hoặc các nền tảng đám mây khác với cấu hình cơ sở hạ tầng được tối ưu hóa."
            }
        ]
    }
}

FullStackVI.stacks = [
    FullStackVI.nodejs,
    FullStackVI.go,
    FullStackVI.java,
    FullStackVI.python,
    FullStackVI.php,
    FullStackVI.dotnetcore
]