import {Metadata} from "next";
import {MetadataLinkWeb3} from "@/metadata/pages/web3/common/MetadataLinkWeb3";

export const MetadataWeb3FI: Metadata = {
    title: "Web3 Blockchain Smart Contract Kehitys | CHORN",
    description: "Web3 blockchain ja älykäs sopimuskehitys. Rakennamme hajautettuja sovelluksia (DApps) käyttäen Solidityä, Ethereumia, Polygonia ja integroimme teknologioita kuten Hardhat, Ganache ja MetaMask.",
    alternates: MetadataLinkWeb3.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Web3 Blockchain Smart Contract Kehityspalvelut | CHORN",
        description: "Erikoistunut Web3 blockchain ja älykäs sopimuskehitystekniikka, mukaan lukien DAppien rakentaminen Solidityllä, Ethereumilla, Polygonilla ja integraatio Hardhatin, Ganachen ja MetaMaskin kanssa.",
        images: MetadataLinkWeb3.openGraph.images,
        url: MetadataLinkWeb3.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 Blockchain Smart Contract Kehitys | CHORN",
        description: "Web3 ja blockchain älykäs sopimuskehitystekniikka, hajautettujen sovellusten (DApps) luominen Solidityllä, Ethereumilla, Polygonilla ja integraatio Hardhatin, Ganachen ja MetaMaskin kanssa.",
        images: MetadataLinkWeb3.twitter.images,
    },
    keywords: [
        "Web3 kehitys", "blockchain kehitys", "älykäs sopimus kehitys", "Solidity kehitys",
        "Hajautetut sovellukset", "DApp kehitys", "Ethereum kehitys", "Polygon kehitys",
        "Hardhat kehitys", "Ganache kehitys", "MetaMask integraatio", "blockchain älykkäät sopimukset",
        "Mukautettu blockchain kehitys", "Blockchain ratkaisut", "Mukautetut älykkäät sopimukset",
        "Solidity älykkäät sopimukset", "Ethereum DApps", "Polygon blockchain kehitys", "Hardhat blockchain työkalut",
        "Ganache blockchain testaus", "MetaMask integraatio", "Mukautettu Ethereum kehitys", "Mukautettu Polygon kehitys",
        "blockchain kehittäjä Suomi", "Web3 kehittäjä Suomi", "älykäs sopimus kehittäjä Suomi",
        "Ethereum kehittäjä Suomi", "Solidity kehittäjä Suomi", "Senior blockchain kehittäjä Suomi",
        "Principal Web3 kehittäjä Suomi", "DApp kehittäjä Suomi", "ohjelmistosuunnittelija Suomi",
        "CHORN", "Digitaalinen innovaatio", "Blockchain teknologia", "Skalautuvat blockchain ratkaisut"
    ]
};
