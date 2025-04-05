import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {DotnetVI} from "@/data/fullstack/frameworks/dotnet/DotnetVI";
import {GoVI} from "@/data/fullstack/frameworks/go/GoVI";
import {JavaVI} from "@/data/fullstack/frameworks/java/JavaVI";
import {NodejsVI} from "@/data/fullstack/frameworks/nodejs/NodejsVI";
import {PhpVI} from "@/data/fullstack/frameworks/php/PhpVI";
import {PythonVI} from "@/data/fullstack/frameworks/python/PythonVI";

export const FullStackVI: IFullStack = {
    title: "Phát triển Back-End",
    span: "Kinh nghiệm Phát triển Back-End",
    subTitle: "",

    dotnetcore: DotnetVI,
    go: GoVI,
    java: JavaVI,
    nodejs: NodejsVI,
    php: PhpVI,
    python: PythonVI,

    stacks: [],

    services: {
        title: "Phát triển Back-End",
        descriptions: [
            "Phát triển back-end là nền tảng thiết yếu cho các ứng dụng web mạnh mẽ, an toàn và có khả năng mở rộng. Hệ thống hậu trường này cần thiết cho việc xử lý dữ liệu, quản lý cơ sở dữ liệu và bảo mật, cho phép doanh nghiệp đáp ứng nhiều người dùng cùng lúc, tạo trải nghiệm liền mạch và bảo vệ thông tin quan trọng. Các công nghệ bao gồm Node.js, Java Spring Boot, Python, Go, PHP và .NET Core, có khả năng đáp ứng nhu cầu của các dự án ở mọi mức độ phức tạp, từ Proof of Concept (PoC) đến Minimum Viable Product (MVP) sẵn sàng cho thị trường. Sự tích hợp trơn tru giữa giao diện người dùng và chức năng phía máy chủ mang đến cho người dùng trải nghiệm vượt trội và giúp doanh nghiệp đạt được mục tiêu một cách hiệu quả."
        ],
        items: [
            {
                title: "Tích hợp Front-End & Back-End liền mạch",
                description: "Ứng dụng web mạch lạc với các thành phần máy khách và máy chủ được đồng bộ hóa hoàn hảo, mang lại tốc độ, bảo mật và khả năng mở rộng."
            },
            {
                title: "Tối ưu hóa SEO & Hiệu suất Toàn diện",
                description: "Tăng cường khả năng hiển thị trên công cụ tìm kiếm và trải nghiệm người dùng thông qua cấu trúc mã được tối ưu hóa, thời gian tải nhanh hơn và quản lý tài nguyên hiệu quả."
            },
            {
                title: "Kiểm thử Tự động Mạnh mẽ",
                description: "Ứng dụng đáng tin cậy và ổn định với các khung kiểm thử toàn diện được tích hợp trong suốt vòng đời phát triển."
            },
            {
                title: "Quản lý Cơ sở dữ liệu Nâng cao",
                description: "Dữ liệu được cấu trúc và quản lý hiệu quả với các giải pháp cơ sở dữ liệu được tối ưu hóa bao gồm MySQL, MongoDB, PostgreSQL và các công nghệ hàng đầu khác."
            },
            {
                title: "Dịch vụ Đám mây Cấp Doanh nghiệp",
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