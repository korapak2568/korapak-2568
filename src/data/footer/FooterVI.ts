import { IFooter } from "@/data/footer/model/IFooter";

export const FooterVI: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN là đối tác đổi mới của bạn, cung cấp các giải pháp phần mềm tiên tiến, " +
        "các trang web có khả năng mở rộng cho hàng triệu người dùng, và sự xuất sắc sẵn sàng cho tương lai. " +
        "Nâng cao sự hiện diện kỹ thuật số của bạn cùng chúng tôi.",
    importantTitle: "Liên kết quan trọng",
    featureTitle: "Chuyên môn kỹ thuật",
    infoTitle: "Thông tin",
    termOfService: {
        label: "Điều khoản dịch vụ",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Chính sách bảo mật",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Chính sách nơi làm việc",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Theo dõi chúng tôi trên GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/khachornchit",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Kết nối với chúng tôi trên LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "Về CHORN",
            link: "/about-chorn"
        },
        {
            label: "Chuyên môn kỹ thuật",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Điều khoản dịch vụ",
            link: "/terms-of-service"
        },
        {
            label: "Chính sách bảo mật",
            link: "/privacy-policy"
        },
        {
            label: "Chính sách nơi làm việc",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Phát triển website",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Phát triển Front-End",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Phát triển Back-End & API",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps và Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "Bạn trò chuyện LINE LLM/AI",
            link: "/ai-companions/fah/",
        },
        {
            label: "Tư vấn LLM/AI",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 và Hợp đồng thông minh",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Mô hình làm việc",
            linkText: "Từ xa, Văn phòng, Kết hợp",
            link: "/",
            icon: "flaticon-speed hover-rotate",
        },
        {
            label: "Mô hình dịch vụ",
            linkText: "Cố định, Hợp đồng, Theo dự án",
            link: "/",
            icon: "flaticon-connection hover-rotate",
        },
    ],
};
