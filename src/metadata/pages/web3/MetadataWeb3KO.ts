import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWeb3KO: Metadata = {
    title: "Web3 블록체인 스마트 계약 개발 | CHORN",
    description: "Web3 블록체인 및 스마트 계약 개발. Solidity, Ethereum, Polygon을 사용하여 분산 애플리케이션(DApps)을 구축하고 Hardhat, Ganache, MetaMask와 같은 기술과 통합합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.web3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Web3 블록체인 스마트 계약 개발 서비스 | CHORN",
        description: "Solidity, Ethereum, Polygon을 사용하여 DApp을 구축하고 Hardhat, Ganache, MetaMask와 통합하는 Web3 블록체인 및 스마트 계약 개발에 대한 전문 기술.",
        images: metadataLink(LanguageCode.ko, MetaLinks.web3).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.web3).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 블록체인 스마트 계약 개발 | CHORN",
        description: "Solidity, Ethereum, Polygon을 사용하여 분산 애플리케이션(DApps)을 만들고 Hardhat, Ganache, MetaMask와 통합하는 Web3 및 블록체인 스마트 계약 개발 전문 기술.",
        images: metadataLink(LanguageCode.ko, MetaLinks.web3).twitter.images,
    },
    keywords: [
        "Web3 개발", "블록체인 개발", "스마트 계약 개발", "Solidity 개발",
        "분산 애플리케이션", "DApp 개발", "Ethereum 개발", "Polygon 개발",
        "Hardhat 개발", "Ganache 개발", "MetaMask 통합", "블록체인 스마트 계약",
        "맞춤형 블록체인 개발", "블록체인 솔루션", "맞춤형 스마트 계약",
        "Solidity 스마트 계약", "Ethereum DApps", "Polygon 블록체인 개발", "Hardhat 블록체인 도구",
        "Ganache 블록체인 테스트", "MetaMask 통합", "맞춤형 Ethereum 개발", "맞춤형 Polygon 개발",
        "블록체인 개발자 한국", "Web3 개발자 한국", "스마트 계약 개발자 한국",
        "Ethereum 개발자 한국", "Solidity 개발자 한국", "Senior 블록체인 개발자 한국",
        "Principal Web3 개발자 한국", "DApp 개발자 한국", "소프트웨어 엔지니어 한국",
        "CHORN", "디지털 혁신", "블록체인 기술", "확장 가능한 블록체인 솔루션"
    ]
};