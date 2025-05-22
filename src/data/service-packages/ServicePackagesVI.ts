// ServicePackagesVI.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesVI: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Ba gói ưu tiên cao nhất – Premium Innovation Plan, Web3 Core Plan và NFT Evolution Plan – được thiết kế cho phát triển toàn thời gian chuyên dụng, nhằm khởi chạy trong 3–12 tháng. Lý tưởng cho các dự án quan trọng hoặc cần thời gian nhanh.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999/tháng",
                hourlyEquivalent: "$37.49/giờ",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chuyên dụng hoặc lâu dài)",
                highlight: "Hỗ trợ toàn thời gian chuyên dụng cho dự án không blockchain như MVP, nâng cấp hệ thống, khả năng mở rộng.",
                features: [
                    "Nâng cấp hệ thống, tính năng mới, khả năng mở rộng, PoC, MVP",
                    "Hỗ trợ ngôn ngữ lập trình và framework phổ biến cho frontend, backend và API",
                    "Hỗ trợ cơ sở dữ liệu và nền tảng đám mây phổ biến",
                    "Hỗ trợ giao thức hiện đại và legacy: gRPC, RPI, JMS, v.v."
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999/tháng",
                hourlyEquivalent: "$43.74/giờ",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chuyên dụng hoặc lâu dài)",
                highlight: "Phát triển blockchain toàn diện với tích hợp Web3, gồm cả tokenomics và hợp đồng thông minh.",
                features: [
                    "Phát triển Web3 và blockchain với Solidity, Ethers.js, Ethereum",
                    "Tạo hợp đồng thông minh, kiểm tra và tích hợp",
                    "Frontend và backend: Next.js, React, Node.js",
                    "Cơ chế token: airdrop, presale, hệ thống phần thưởng"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999/tháng",
                hourlyEquivalent: "$43.74/giờ",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chuyên dụng hoặc lâu dài)",
                highlight: "Tập trung phát triển NFT, gồm cả dự án mới và nâng cấp hợp đồng NFT cũ.",
                features: [
                    "Phát triển NFT hiện đại và nâng cấp NFT legacy",
                    "Tạo hoặc chỉnh sửa hợp đồng thông minh với Solidity",
                    "Hỗ trợ frontend/backend: Next.js, React, Node.js",
                    "Hỗ trợ chuẩn NFT (ERC721, ERC1155) và thị trường"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Ba gói bán thời gian – Essential Care Plan, Growth Support Plan và Blockchain Pioneer Plan – lý tưởng cho hỗ trợ liên tục hoặc bảo trì sau khi khởi chạy với lịch trình linh hoạt và khả năng mở rộng.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899/tháng",
                hourlyEquivalent: "$5.625/giờ",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chia sẻ)",
                highlight: "Hỗ trợ dài hạn đáng tin cậy, không phát triển tính năng mới. Phù hợp với hệ thống ổn định.",
                features: [
                    "Giám sát hệ thống, bảo trì và hỗ trợ kỹ thuật",
                    "Cập nhật tài liệu và hỗ trợ đào tạo nhóm",
                    "Không bao gồm phát triển tính năng mới",
                    "Hỗ trợ ngôn ngữ lập trình và cơ sở dữ liệu phổ biến"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999/tháng",
                hourlyEquivalent: "$12.49/giờ",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chia sẻ)",
                highlight: "Hỗ trợ linh hoạt có phát triển tính năng mới cho hệ thống đang mở rộng.",
                features: [
                    "Bảo trì và phát triển tính năng mới",
                    "Hỗ trợ ngôn ngữ lập trình và framework phổ biến",
                    "Cải tiến liên tục nền tảng web, API hoặc tùy chỉnh",
                    "Hỗ trợ cơ sở dữ liệu và nền tảng đám mây phổ biến"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999/tháng",
                hourlyEquivalent: "$24.99/giờ",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chia sẻ)",
                highlight: "Phát triển blockchain bán thời gian cho các dự án Web3, blockchain hoặc NFT mới.",
                features: [
                    "Hỗ trợ Web3, hợp đồng thông minh, NFT, Ethereum",
                    "Hỗ trợ frontend/backend cho nền tảng tùy chỉnh",
                    "Lý tưởng cho các dự án blockchain đang mở rộng"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Gói phát triển linh hoạt theo giờ – lý tưởng cho startup, nhóm agile hoặc nhà đổi mới blockchain cần hỗ trợ theo nhu cầu. Bao gồm sửa lỗi khẩn cấp cực nhanh!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40/giờ",
                hourlyEquivalent: "$40/giờ",
                hours: "20–40 giờ/tuần",
                highlight: "Dịch vụ phát triển bán/thời gian đầy đủ với kỹ năng full-stack.",
                features: [
                    "Phát triển phần mềm tùy chỉnh, web và API theo yêu cầu",
                    "Hỗ trợ ngôn ngữ lập trình và framework phổ biến",
                    "Phù hợp với nhóm cần nhà phát triển linh hoạt và có kỹ năng"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60/giờ",
                hourlyEquivalent: "$60/giờ",
                hours: "20–40 giờ/tuần",
                highlight: "Dịch vụ blockchain nâng cao cho doanh nghiệp Web3 và nhà đổi mới NFT.",
                features: [
                    "Phát triển blockchain, hợp đồng thông minh, NFT, Ethereum",
                    "Hỗ trợ frontend/backend: Next.js, React, Node.js",
                    "Tích hợp frontend và backend cho nền tảng tùy chỉnh",
                    "Linh hoạt triển khai cho dự án Web3 cao cấp"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240/lần",
                hourlyEquivalent: "$30/giờ",
                hours: "Dự phòng 8 giờ/ngày",
                highlight: "Phản hồi khẩn cấp – khắc phục sự cố trong cùng một ngày.",
                features: [
                    "Tư vấn và hỗ trợ ngay lập tức",
                    "Giao trong ngày",
                    "Sửa lỗi đơn cho dự án bên ngoài",
                    "Không cần hợp đồng lâu dài"
                ],
                link: "service-packages/"
            }
        ]
    }
};