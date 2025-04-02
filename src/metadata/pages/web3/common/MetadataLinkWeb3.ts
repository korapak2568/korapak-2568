import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkWeb3: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/web3-blockchain-smart-contract-development/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/web3-blockchain-smart-contract-development/",
            "th": "https://chorn.in.th/th/technical-expertise/web3-blockchain-smart-contract-development/",
            "fr": "https://chorn.in.th/fr/technical-expertise/web3-blockchain-smart-contract-development/",
            "ja": "https://chorn.in.th/ja/technical-expertise/web3-blockchain-smart-contract-development/",
            "vi": "https://chorn.in.th/vi/technical-expertise/web3-blockchain-smart-contract-development/",
            "zh": "https://chorn.in.th/zh/technical-expertise/web3-blockchain-smart-contract-development/",
            "de": "https://chorn.in.th/de/technical-expertise/web3-blockchain-smart-contract-development/",
            "nl": "https://chorn.in.th/nl/technical-expertise/web3-blockchain-smart-contract-development/",
            "da": "https://chorn.in.th/da/technical-expertise/web3-blockchain-smart-contract-development/",
            "fi": "https://chorn.in.th/fi/technical-expertise/web3-blockchain-smart-contract-development/",
            "ko": "https://chorn.in.th/ko/technical-expertise/web3-blockchain-smart-contract-development/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.blockchain.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.blockchain.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/web3-blockchain-smart-contract-development/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.blockchain.url,
        ],
    }
}