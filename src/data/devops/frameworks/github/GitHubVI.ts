import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const GitHubVI: IDevOpsStack = {
    title: "GitHub",
    description: "Nâng cao quy trình phát triển của bạn với nền tảng kiểm soát phiên bản và cộng tác của GitHub.",
    image: ImageUrl.devops.github.path,
    alt: "Logo đại diện cho kinh nghiệm công nghệ GitHub",
    readMore: "Tìm hiểu cách GitHub hỗ trợ kiểm thử DevOps hiệu quả",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub là nền tảng dựa trên web cung cấp lưu trữ kho Git, công cụ phát triển cộng tác và nhiều tích hợp đa dạng, thúc đẩy phát triển phần mềm hiệu quả và cộng tác.",
            list: []
        },
        {
            title: "Điểm mạnh của GitHub",
            description: "GitHub nổi bật với các tính năng chính của nó",
            list: [
                "Kiểm soát MetadataChorn",
                "Phát triển cộng tác",
                "Yêu cầu kéo (pull requests)",
                "Theo dõi vấn đề",
                "Đánh giá mã",
                "Tích hợp liên tục",
                "Tích hợp mở rộng"
            ]
        },
        {
            title: "Thách thức và Giải pháp",
            description: "GitHub giải quyết các thách thức trong quy trình phát triển bằng cách cung cấp kiểm soát phiên bản mạnh mẽ và công cụ cộng tác để quản lý dự án hiệu quả.",
            list: []
        }
    ],
    faqs: [
        {
            question: "GitHub là gì?",
            answer: "GitHub là nền tảng dựa trên web cung cấp lưu trữ kho Git và công cụ phát triển cộng tác."
        },
        {
            question: "GitHub cải thiện sự cộng tác như thế nào?",
            answer: "GitHub cải thiện sự cộng tác bằng cách cung cấp các tính năng như yêu cầu kéo, theo dõi vấn đề và đánh giá mã để tạo điều kiện cho phát triển nhóm."
        },
        {
            question: "Lợi ích của việc sử dụng GitHub là gì?",
            answer: "Lợi ích của việc sử dụng GitHub bao gồm kiểm soát phiên bản, phát triển cộng tác, yêu cầu kéo, theo dõi vấn đề, đánh giá mã, tích hợp liên tục và tích hợp mở rộng."
        }
    ]
}