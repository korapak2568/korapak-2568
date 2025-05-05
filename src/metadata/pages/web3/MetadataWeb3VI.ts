import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWeb3VI: Metadata = {
    title: "Phát triển Web3 Blockchain Smart Contract | CHORN",
    description: "Phát triển Web3 blockchain và smart contract. Chúng tôi xây dựng các ứng dụng phi tập trung (DApps) sử dụng Solidity, Ethereum, Polygon và tích hợp với các công nghệ như Hardhat, Ganache, và MetaMask.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.web3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ phát triển Web3 Blockchain Smart Contract | CHORN",
        description: "Chuyên môn kỹ thuật phát triển Web3 blockchain và smart contract, bao gồm xây dựng DApps với Solidity, Ethereum, Polygon và tích hợp với Hardhat, Ganache, và MetaMask.",
        images: metadataLink(LanguageCode.vi, MetaLinks.web3).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.web3).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát triển Web3 Blockchain Smart Contract | CHORN",
        description: "Chuyên môn phát triển Web3 và blockchain smart contract, với việc tạo ra các ứng dụng phi tập trung (DApps) với Solidity, Ethereum, Polygon và tích hợp với Hardhat, Ganache, và MetaMask.",
        images: metadataLink(LanguageCode.vi, MetaLinks.web3).twitter.images,
    },
    keywords: [
        "Phát triển Web3", "Phát triển blockchain", "Phát triển smart contract", "Phát triển Solidity",
        "Ứng dụng phi tập trung", "Phát triển DApp", "Phát triển Ethereum", "Phát triển Polygon",
        "Phát triển Hardhat", "Phát triển Ganache", "Tích hợp MetaMask", "Smart contracts blockchain",
        "Phát triển blockchain tùy chỉnh", "Giải pháp blockchain", "Smart contracts tùy chỉnh",
        "Smart contracts Solidity", "DApps Ethereum", "Phát triển blockchain Polygon", "Công cụ blockchain Hardhat",
        "Kiểm tra blockchain Ganache", "Tích hợp MetaMask", "Phát triển Ethereum tùy chỉnh", "Phát triển Polygon tùy chỉnh",
        "Nhà phát triển blockchain Việt Nam", "Nhà phát triển Web3 Việt Nam", "Nhà phát triển smart contract Việt Nam",
        "Nhà phát triển Ethereum Việt Nam", "Nhà phát triển Solidity Việt Nam", "Nhà phát triển blockchain cao cấp Việt Nam",
        "Nhà phát triển Web3 chính Việt Nam", "Nhà phát triển DApp Việt Nam", "Kỹ sư phần mềm Việt Nam",
        "CHORN", "Đổi mới kỹ thuật số", "Công nghệ blockchain", "Giải pháp blockchain có thể mở rộng"
    ]
};
