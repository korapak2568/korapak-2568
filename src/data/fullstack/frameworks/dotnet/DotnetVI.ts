import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const DotnetVI: IFullStackStack = {
    title: ".NET Core",
    description: ".NET Core là một framework đa năng, mã nguồn mở và đa nền tảng được phát triển bởi Microsoft. Nó cho phép các nhà phát triển xây dựng các ứng dụng hiện đại, hiệu suất cao và có thể mở rộng trên nhiều nền tảng khác nhau, bao gồm Windows, macOS và Linux. Với sự hỗ trợ để xây dựng các ứng dụng web, API và microservices, .NET Core cung cấp một môi trường mạnh mẽ cho các giải pháp cấp doanh nghiệp.",
    image: ImageUrl.fullstackThumbnails.dotnetcore.path,
    alt: "Logo đại diện cho phát triển API .NET Core",
    readMore: "Khám phá thêm các giải pháp phát triển API .NET Core full-stack",
    link: "/technical-expertise/full-stack-developer/dotnetcore-developer",
    features: [
        {
            title: "Phát triển .NET Core",
            description: ".NET Core là một framework mạnh mẽ và mã nguồn mở để xây dựng các ứng dụng hiệu suất cao. Với thiết kế mô-đun và hỗ trợ nhiều ngôn ngữ lập trình, .NET Core là lý tưởng để phát triển các ứng dụng web, API và microservices có thể chạy trên bất kỳ nền tảng nào.",
            list: []
        },
        {
            title: "ASP.NET Core",
            description: "ASP.NET Core là một framework đa nền tảng, hiệu suất cao để xây dựng các ứng dụng hiện đại, dựa trên đám mây và kết nối internet. Nó đặc biệt phù hợp để xây dựng các ứng dụng web, API và microservices với sự tập trung vào hiệu suất, bảo mật và khả năng mở rộng.",
            list: [
                "Đa nền tảng",
                "Hiệu suất cao",
                "Tiêm phụ thuộc tích hợp",
                "Kiến trúc mô-đun",
                "Framework MVC và Web API thống nhất",
                "Hỗ trợ Razor Pages",
                "Xác thực và ủy quyền an toàn"
            ]
        },
        {
            title: ".NET Core API",
            description: ".NET Core API cung cấp cho các nhà phát triển các công cụ để xây dựng các API RESTful và các giải pháp kỹ thuật có thể được sử dụng bởi nhiều loại khách hàng, bao gồm trình duyệt, thiết bị di động và ứng dụng máy tính để bàn. Thiết kế nhẹ và mô-đun của nó đảm bảo hiệu suất cao và tích hợp dễ dàng với các giải pháp kỹ thuật khác.",
            list: []
        },
        {
            title: ".NET Core",
            description: ".NET Core là ngôn ngữ chính được sử dụng để phát triển các ứng dụng trong .NET Core. Nổi bật với cú pháp đơn giản, linh hoạt và các tính năng hiện đại, C# cho phép các nhà phát triển xây dựng các ứng dụng mạnh mẽ, dễ bảo trì và có thể mở rộng một cách dễ dàng.",
            list: [
                "Cú pháp hiện đại",
                "Lập trình hướng đối tượng",
                "Thư viện chuẩn phong phú",
                "Hỗ trợ lập trình bất đồng bộ",
                "Hỗ trợ LINQ",
                "Tương thích đa nền tảng",
                "Tương thích với các ngôn ngữ .NET khác"
            ]
        }
    ],
    faqs: [
        {
            question: ".NET Core là gì?",
            answer: ".NET Core là một framework mã nguồn mở và đa nền tảng để xây dựng các ứng dụng hiện đại chạy trên Windows, macOS và Linux."
        },
        {
            question: "ASP.NET Core được sử dụng để làm gì?",
            answer: "ASP.NET Core là một framework để xây dựng các ứng dụng web, API và microservices với hiệu suất cao và khả năng đa nền tảng."
        },
        {
            question: "Tại sao .NET Core là một lựa chọn tốt cho phát triển?",
            answer: "C# là một ngôn ngữ lập trình hiện đại, linh hoạt với nhiều tính năng, làm cho nó trở thành sự lựa chọn lý tưởng để phát triển các ứng dụng có thể mở rộng và dễ bảo trì trong .NET Core."
        }
    ],
}