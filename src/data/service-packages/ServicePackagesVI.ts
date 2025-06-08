// ServicePackagesVI.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesVI: IServicePackages = {
    name: "Gói Dịch Vụ",
    premium: {
        name: "Gói Cao Cấp",
        description: "Các gói kỹ thuật gọn nhẹ được thiết kế cho nền tảng giai đoạn đầu, MVP, công cụ nội bộ hoặc các dự án cần hoàn thành nhanh. Phù hợp với startup và doanh nghiệp cần hỗ trợ chuyên gia mà không cần cam kết dài hạn hoặc đầu tư đội ngũ toàn thời gian.",
        plans: [
            {
                name: "Gói Dự Án Nhỏ",
                price: "$299 USD/Dự án",
                schedule: "Linh hoạt (theo dự án, ≤1 tuần)",
                highlight: "Giải pháp hiệu quả cho các tác vụ nhỏ, sửa lỗi hoặc tính năng đơn giản có thể bàn giao trong vài ngày.",
                features: [
                    "Phù hợp với nhiệm vụ khẩn cấp, nguyên mẫu nhanh hoặc sửa lỗi riêng biệt",
                    "Thời gian hoàn thành từ 2–5 ngày làm việc",
                    "Bao gồm lập kế hoạch, bàn giao mã và kiểm thử cơ bản",
                    "Hỗ trợ tính năng nhỏ trên front-end, back-end hoặc API",
                    "Không bao gồm hỗ trợ định kỳ hoặc họp hàng tuần",
                    "Tốt nhất cho yêu cầu đơn lẻ hoặc tách biệt"
                ],
                link: "service-packages/"
            },
            {
                name: "Gói Chăm Sóc Cơ Bản",
                price: "$799 USD/tháng",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (chia sẻ)",
                highlight: "Hỗ trợ kỹ thuật nền tảng cho MVP, công cụ nội bộ hoặc nền tảng giai đoạn đầu với nhu cầu phát triển tối thiểu.",
                features: [
                    "Thiết lập nhẹ và ổn định các tính năng cốt lõi",
                    "Giám sát định kỳ, sửa lỗi và bảo trì kỹ thuật",
                    "Tài liệu kỹ thuật và chuyển giao cho đội ngũ nội bộ",
                    "Không bao gồm phát triển tính năng phức tạp",
                    "Tương thích với các ngôn ngữ lập trình và cơ sở dữ liệu phổ biến"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gói Vàng",
        description: "Bộ ba gói dịch vụ làm việc theo thời gian chia sẻ — Growth Support, Advanced Growth Plan và Blockchain Pioneer — được thiết kế riêng cho hỗ trợ sản phẩm sau khi ra mắt, cải tiến chiến lược và vận hành kỹ thuật có thể mở rộng. Phù hợp với startup, agency và doanh nghiệp đang tìm kiếm giải pháp kỹ thuật đáng tin cậy mà không cần tuyển dụng toàn thời gian.",
        plans: [
            {
                name: "Gói Hỗ Trợ Tăng Trưởng",
                price: "$1,999 USD/month",
                schedule: "Thứ 2–6, 08:30–17:30 (chia sẻ thời gian)",
                highlight: "Dành cho doanh nghiệp đang phát triển cần phát triển liên tục mà không cần cam kết toàn thời gian.",
                features: [
                    "Bảo trì định kỳ và phát triển tính năng mức trung bình",
                    "Họp đồng bộ 1 lần/tuần với các bên liên quan (1–3 thành viên)",
                    "Hỗ trợ full-stack cho API, nền tảng và công cụ nội bộ",
                    "Phủ rộng các ngôn ngữ, framework, cơ sở dữ liệu và nền tảng đám mây phổ biến",
                    "Có thể mở rộng lên các gói lớn hơn khi doanh nghiệp tăng trưởng"
                ],
                link: "service-packages/"
            },
            {
                name: "Gói Phát Triển Nâng Cao",
                price: "$2,999 USD/month",
                schedule: "Thứ 2–6, 08:30–17:30 (chia sẻ thời gian)",
                highlight: "Tập trung phát triển mạnh mẽ hơn so với Growth Support, phù hợp với các nền tảng cần nâng cấp và cộng tác thường xuyên với các bên liên quan.",
                features: [
                    "Mở rộng phạm vi nâng cấp tính năng, tinh chỉnh và cải thiện hiệu suất",
                    "Chu kỳ giao hàng thường xuyên hơn Growth Support (phù hợp với vòng lặp nhanh)",
                    "1–2 cuộc họp/tuần với các bên liên quan (3–6 người) để lập kế hoạch và phản hồi",
                    "Phát triển full-stack cho web, backend và tích hợp bên thứ ba",
                    "Hỗ trợ các framework, cơ sở dữ liệu và dịch vụ đám mây phổ biến với nhu cầu ngày càng tăng"
                ],
                link: "service-packages/"
            },
            {
                name: "Gói Tiên Phong Blockchain",
                price: "$3,999 USD/month",
                schedule: "Thứ 2–6, 08:30–17:30 (toàn thời gian, chia sẻ thời gian)",
                highlight: "Hỗ trợ blockchain cấp nhập môn cho các dự án Web3, NFT và sản phẩm dựa trên Ethereum.",
                features: [
                    "Phát triển smart contract và dApp trên Ethereum",
                    "Tích hợp với backend Web2/3 và hệ sinh thái token",
                    "Phát hành NFT, quản lý metadata và chuẩn bị marketplace",
                    "Phù hợp với các công ty thử nghiệm hoặc ra mắt trải nghiệm Web3"
                ],
                link: "service-packages/"
            }
        ]
    },
    platinum: {
        name: "Gói Bạch Kim",
        description: "Ba gói dịch vụ toàn thời gian chiến lược — Gói Đổi Mới Cao Cấp, Gói Nền Tảng Web3, và Gói Tiến Hóa NFT — được thiết kế dành cho CEO, CTO, Chủ sản phẩm và Nhà sáng lập đang tìm kiếm một đối tác kỹ thuật đáng tin cậy để thúc đẩy việc ra mắt sản phẩm trong vòng 3 đến 12 tháng. Phù hợp với các sáng kiến quan trọng cần khả năng mở rộng, tốc độ lặp nhanh và giảm gánh nặng tuyển dụng nội bộ.",
        plans: [
            {
                name: "Gói Đổi Mới Cao Cấp",
                price: "$5,900 USD/month",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chuyên trách)",
                highlight: "Hỗ trợ toàn thời gian cho các dự án không sử dụng blockchain: xây dựng MVP, nâng cấp hệ thống và mở rộng quy mô.",
                features: [
                    "Phát triển PoC, MVP, nâng cấp hệ thống và mở rộng sản phẩm",
                    "Hỗ trợ tất cả ngôn ngữ lập trình và framework chính: front-end, back-end, API",
                    "Tích hợp với cơ sở dữ liệu và nền tảng cloud phổ biến",
                    "Hỗ trợ giao thức hiện đại và truyền thống: gRPC, RPI, JMS"
                ],
                link: "service-packages/"
            },
            {
                name: "Gói Nền Tảng Web3",
                price: "$6,900 USD/month",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chuyên trách)",
                highlight: "Phát triển blockchain toàn diện với tích hợp Web3, bao gồm smart contract và thiết kế tokenomics.",
                features: [
                    "Phát triển blockchain với Solidity, Ethers.js, Ethereum",
                    "Thiết kế, kiểm thử và tích hợp smart contract",
                    "Phát triển front-end và back-end: Next.js, React, Node.js",
                    "Thiết kế token: airdrop, presale, hệ thống thưởng"
                ],
                link: "service-packages/"
            },
            {
                name: "Gói Tiến Hóa NFT",
                price: "$6,900 USD/month",
                schedule: "Thứ 2–Thứ 6, 8:30–17:30 (Toàn thời gian, chuyên trách)",
                highlight: "Phát triển NFT hiện đại và nâng cấp các hợp đồng thông minh legacy.",
                features: [
                    "Phát triển NFT theo chuẩn mới và nâng cấp NFT cũ",
                    "Tạo mới hoặc tái cấu trúc hợp đồng thông minh dựa trên Solidity",
                    "Tích hợp với các framework front-end và back-end phổ biến: Next.js, React, Node.js",
                    "Hỗ trợ các tiêu chuẩn NFT (ERC721, ERC1155) và chợ NFT"
                ],
                link: "service-packages/"
            }
        ]
    },
};