import {IFeature} from "@/data/feature/model/IFeature";

export const FeatureVI: IFeature = {
    title: "Tổng quan về Phát triển Website",
    span: "Phân tích Hệ thống và Phát triển Phần mềm",
    subTitle: "",
    stacks: [
        {
            title: "Phát triển Front End",
            description: "Các framework và thư viện UI như React, Next.js, Angular, Vue, và TypeScript, JavaScript, HTML3, và CSS3.",
            link: "/technical-expertise/front-end-developer/",
            icon: "bx bx-code-alt"
        },
        {
            title: "Phát triển Back End",
            description: "Kinh nghiệm trong các công nghệ phía máy chủ, bao gồm Node.js, Java, Spring Boot, Go, PHP và Python, để xây dựng hệ thống back-end có khả năng mở rộng và hiệu quả.",
            link: "/technical-expertise/full-stack-developer/",
            icon: "bx bx-server"
        },
        {
            title: "Phát triển Web API",
            description: "Giải pháp phát triển web từ đầu đến cuối sử dụng các công nghệ hiện đại như Node.js, Java, Spring Boot, Go, PHP và Python để tạo ra các trang web động, phản hồi nhanh.",
            link: "/technical-expertise/web-development/",
            icon: "bx bx-globe"
        },
        {
            title: "Web3 & Blockchain",
            description: "Kinh nghiệm trong các công nghệ tiên tiến như Blockchain, Tài chính Phi tập trung (DeFi), Hợp đồng thông minh và Web3, đảm bảo chuyên môn kỹ thuật tài chính của bạn luôn đi đầu.",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
            icon: "bx bx-coin-stack"
        }
    ],
};