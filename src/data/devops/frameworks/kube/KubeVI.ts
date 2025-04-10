import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const KubeVI: IDevOpsStack = {
    title: "Kubernetes",
    description: "Tự động hóa điều phối container của bạn với Kubernetes để có các ứng dụng có khả năng mở rộng và linh hoạt.",
    image: ImageUrl.devops.frameworks.kube.thumbnail,
    alt: "Logo đại diện cho kinh nghiệm công nghệ Kubernetes",
    readMore: "Khám phá các giải pháp kiểm thử DevOps Kubernetes",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetes là nền tảng điều phối container hàng đầu tự động hóa việc triển khai, mở rộng và quản lý các ứng dụng container hóa. Cần thiết cho các hệ thống quy mô lớn, linh hoạt.",
            list: []
        },
        {
            title: "Điểm mạnh của Kubernetes",
            description: "Kubernetes nổi bật với các tính năng mạnh mẽ",
            list: [
                "Triển khai tự động",
                "Khả năng mở rộng",
                "Tự khắc phục",
                "Khám phá dịch vụ",
                "Cân bằng tải",
                "Điều phối lưu trữ",
                "Quản lý cấu hình"
            ]
        },
        {
            title: "Thách thức và Giải pháp",
            description: "Kubernetes giải quyết các thách thức về điều phối bằng cách cung cấp các giải pháp có khả năng mở rộng và tự động hóa cho các ứng dụng container hóa.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Kubernetes là gì?",
            answer: "Kubernetes là nền tảng điều phối container tự động hóa việc triển khai, mở rộng và quản lý các ứng dụng container hóa."
        },
        {
            question: "Kubernetes cải thiện khả năng mở rộng ứng dụng như thế nào?",
            answer: "Kubernetes cải thiện khả năng mở rộng ứng dụng bằng cách tự động quản lý việc mở rộng các ứng dụng container hóa dựa trên nhu cầu."
        },
        {
            question: "Những lợi ích của việc sử dụng Kubernetes là gì?",
            answer: "Lợi ích của việc sử dụng Kubernetes bao gồm triển khai tự động, khả năng mở rộng, tự khắc phục, khám phá dịch vụ, cân bằng tải và điều phối lưu trữ."
        }
    ]
}