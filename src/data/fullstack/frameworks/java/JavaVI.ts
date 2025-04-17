import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaVI: IFullStackStack = {
    title: "Phát triển Java",
    description: "Java là ngôn ngữ mạnh mẽ và linh hoạt, phù hợp cho các ứng dụng doanh nghiệp và đám mây hiện đại. Với Spring Boot, gRPC, và hỗ trợ RMI cho hệ thống cũ, Java vẫn là một phần cốt lõi trong các giải pháp full-stack có thể mở rộng.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Phát triển với Java, Spring Boot, gRPC, RMI",
    readMore: "Khám phá thêm về phát triển full-stack với Java và Spring Boot",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Phát triển Java hiện đại",
            description: "Java phát triển với các tính năng như record, pattern matching và virtual thread, tăng năng suất và hiệu suất.",
            list: [
                "Hỗ trợ Java 17+ LTS",
                "Virtual threads cải thiện hiệu suất",
                "Kiểu dữ liệu an toàn và dễ bảo trì",
                "Phù hợp cho microservices và doanh nghiệp"
            ]
        },
        {
            title: "Spring Boot & ứng dụng cloud-native",
            description: "Spring Boot giúp phát triển nhanh chóng nhờ cấu hình tự động và tích hợp cloud, lý tưởng cho REST API, microservices và full-stack solutions.",
            list: [
                "Cấu hình tự động & quản lý dependency",
                "Thiết kế hướng microservice",
                "Hỗ trợ RESTful API & WebSocket",
                "Tích hợp Spring Cloud"
            ]
        },
        {
            title: "Giao tiếp dịch vụ qua gRPC và RMI",
            description: "Java sử dụng gRPC để truyền thông hiệu quả giữa các dịch vụ và RMI để tương thích với hệ thống cũ.",
            list: [
                "Giao tiếp nhị phân hiệu suất cao với gRPC",
                "Tương thích hệ thống cũ qua RMI",
                "Truy cập từ xa an toàn và kiểm soát",
                "Tích hợp giữa hệ thống mới và cũ"
            ]
        },
        {
            title: "Giải pháp doanh nghiệp và hiện đại hóa J2EE",
            description: "Jakarta EE và Spring đã cải tiến J2EE để phù hợp hơn với cloud-native, nhưng vẫn duy trì khả năng tương thích ngược.",
            list: [
                "Jakarta EE là thế hệ mới của J2EE",
                "Triển khai hiện đại với Docker & Kubernetes",
                "Kiến trúc an toàn cho doanh nghiệp",
                "Hỗ trợ hệ thống cũ qua API hiện đại"
            ]
        }
    ],
    faqs: [
        {
            question: "Spring Boot là gì?",
            answer: "Spring Boot là framework giúp xây dựng ứng dụng Spring độc lập, sẵn sàng triển khai với cấu hình tự động và server nhúng."
        },
        {
            question: "Java hỗ trợ cả hệ thống mới và cũ như thế nào?",
            answer: "Java hỗ trợ phát triển hiện đại với Spring Boot, gRPC, đồng thời vẫn tương thích với hệ thống cũ thông qua RMI và J2EE."
        },
        {
            question: "gRPC là gì và sử dụng trong Java như thế nào?",
            answer: "gRPC là framework RPC hiệu suất cao sử dụng Protocol Buffers. Trong Java, nó được dùng cho truyền thông giữa các dịch vụ microservice."
        }
    ]
}
