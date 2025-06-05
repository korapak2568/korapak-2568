// ServicePackagesVI.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesVI: IServicePackages = {
    name: "Gói Dịch Vụ",
    platinum: {
        name: "Platinum Packages",
        description: "Ba gói cao cấp — Premium Innovation Plan, Web3 Core Plan và NFT Evolution Plan — được thiết kế dành cho các dự án phát triển toàn thời gian, với mục tiêu ra mắt trong vòng 3–12 tháng. Phù hợp với các startup hoặc doanh nghiệp cần đối tác chiến lược, khả năng mở rộng linh hoạt và giảm gánh nặng tuyển dụng đội ngũ kỹ thuật nội bộ.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
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
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
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
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
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
    gold: {
        name: "Gold Packages",
        description: "Ba gói làm việc chia sẻ thời gian — Essential Care, Growth Support và Blockchain Pioneer — được thiết kế cho việc phát triển và hỗ trợ liên tục các dự án hiện có sau khi ra mắt, với lịch trình rõ ràng và khả năng mở rộng linh hoạt. Phù hợp với các startup, agency và đội ngũ kỹ thuật cần đối tác đáng tin cậy mà không cần thuê toàn thời gian.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/month",
                hourlyEquivalent: "125,000 VND/giờ",
                schedule: "Thứ 2–6, 08:30–17:30 (chia sẻ thời gian)",
                highlight: "Hỗ trợ cơ bản cho các hệ thống có nhu cầu phát triển hạn chế. Phù hợp cho MVP, PoC và các hoạt động giai đoạn đầu.",
                features: [
                    "Thiết lập nhẹ và tối ưu chức năng cốt lõi",
                    "Giám sát hệ thống, điều chỉnh nhỏ và duy trì ổn định",
                    "Tài liệu và hướng dẫn cho đội ngũ phát triển mới",
                    "Không bao gồm phát triển tính năng phức tạp mới",
                    "Hỗ trợ ngôn ngữ và cơ sở dữ liệu phổ biến"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
                hourlyEquivalent: "280,000 VND/giờ",
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
                name: "Advanced Growth Plan",
                price: "$2,999 USD/month",
                hourlyEquivalent: "420,000 VND/giờ",
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
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/month",
                hourlyEquivalent: "560,000 VND/giờ",
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
    premium: {
        name: "Premium Packages",
        description: "Các gói phát triển linh hoạt tính theo giờ — phù hợp với team agile, startup hoặc Web3 project cần hỗ trợ theo nhu cầu. Là đối tác chiến lược giúp mở rộng quy mô mà không cần thuê đội ngũ cố định. Bao gồm cả dịch vụ xử lý lỗi khẩn cấp.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 giờ/tuần",
                highlight: "Phát triển phần mềm full-stack linh hoạt, giúp tăng tốc roadmap sản phẩm và khả năng mở rộng.",
                features: [
                    "Phát triển phần mềm, website, và API theo yêu cầu",
                    "Hỗ trợ hầu hết các ngôn ngữ lập trình và framework phổ biến",
                    "Lý tưởng cho các startup muốn tiết kiệm chi phí tuyển dụng dài hạn"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 giờ/tuần",
                highlight: "Dịch vụ blockchain chuyên sâu dành cho các dự án Web3 và nền tảng NFT.",
                features: [
                    "Phát triển smart contract, NFT, và Ethereum",
                    "Tích hợp front-end & back-end với Next.js, React, Node.js",
                    "Đối tác chiến lược giúp tăng tốc sản phẩm Web3"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "Dự phòng 8 giờ/ngày",
                highlight: "Phản ứng nhanh khi có sự cố nghiêm trọng — chẩn đoán và sửa lỗi trong ngày.",
                features: [
                    "Tư vấn và hỗ trợ ngay lập tức",
                    "Giao hàng trong cùng ngày",
                    "Fix lỗi đơn lẻ cho các dự án bên ngoài",
                    "Không cần ký hợp đồng dài hạn"
                ],
                link: "service-packages/"
            }
        ]
    }
};