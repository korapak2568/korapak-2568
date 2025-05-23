// ServicePackagesFI.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesFI: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description:
            "Kolme korkeaprioriteettista pakettia – Premium Innovation Plan, Web3 Core Plan ja NFT Evolution Plan – suunniteltu omistautuneeseen kokopäiväiseen kehitykseen tavoitteena lanseeraus 3–12 kuukauden sisällä. Ihanteellinen liiketoimintakriittisiin tai kiireellisiin projekteihin.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight:
                    "Omistautunut kokopäiväinen tuki ei-lohkoketju-projekteihin, mukaan lukien MVP:t, järjestelmäpäivitykset ja skaalaus.",
                features: [
                    "Järjestelmäpäivitykset, uusien ominaisuuksien kehitys, skaalaus, PoC, MVP",
                    "Tuki kaikille yleisimmille ohjelmointikielille ja kehysalustoille, frontend-, backend- ja API-kehitys",
                    "Tuki yleisimmille tietokannoille ja pilvialustoille",
                    "Tuki moderneille ja vanhoille protokollille: gRPC, RPI, JMS jne."
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight:
                    "Päästä päähän lohkoketjukehitys ja täysi Web3-integraatio, mukaan lukien tokenomiikka ja älysopimukset.",
                features: [
                    "Lohkoketju- ja Web3-kehitys Solidityllä, Ethers.js:llä ja Ethereumilla",
                    "Älysopimusten kehitys, auditointi ja integrointi",
                    "Frontend ja backend: Next.js, React, Node.js",
                    "Token-mekaniikat: airdropit, ennakkomyynnit, palkitsemisjärjestelmät"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight:
                    "NFT-keskeinen kehitys, mukaan lukien uusien sopimusten rakentaminen ja olemassa olevien päivittäminen.",
                features: [
                    "Moderni NFT-kehitys ja vanhojen NFT-sopimusten päivitys",
                    "Älysopimusten luominen tai uudistaminen Solidityllä",
                    "Tuki yleisimmille frontend- ja backend-kehyksille: Next.js, React, Node.js",
                    "Tuki NFT-standardeille (ERC721, ERC1155) ja markkinapaikoille"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description:
            "Kolme jaettua aikapakettia – Essential Care Plan, Growth Support Plan ja Blockchain Pioneer Plan – suunniteltu jatkuvaan kehitykseen tai tukeen lanseerauksen jälkeen, selkeä aikataulu ja joustava skaalautuvuus.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/month",
                hourlyEquivalent: "$5.625 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight:
                    "Luotettava pitkän aikavälin tuki ilman uutta kehitystä. Sopii vakaisiin järjestelmiin.",
                features: [
                    "Järjestelmän valvonta, ylläpito ja tekninen tuki",
                    "Dokumentaation päivitys ja tiimin oppimisen tukeminen",
                    "Ei sisällä uusien ominaisuuksien kehitystä",
                    "Tuki yleisimmille ohjelmointikielille ja tietokannoille"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
                hourlyEquivalent: "$12.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight:
                    "Joustava tuki jatkuvalla kehityksellä kasvaville järjestelmille.",
                features: [
                    "Ylläpito ja uusien ominaisuuksien kehitys",
                    "Tuki yleisimmille ohjelmointikielille ja kehysalustoille",
                    "Verkko-, API- ja asiakaskohtaisten alustojen jatkuva parantaminen",
                    "Tuki yleisimmille tietokannoille ja pilvialustoille"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/kuukausi",
                hourlyEquivalent: "$18,74 USD/tunti",
                schedule: "Ma–Pe, 8:30–17:30 (Osa-aikainen, jaettu)",
                highlight: "Tasapainotettu kehitysfokus kasvaville yrityksille, joilla on aktiivisia tarpeita.",
                features: [
                    "Omistetut tunnit jatkuviin ominaisuuspäivityksiin ja parannuksiin",
                    "Full-Stack-kehitys Front-End- ja Back-End-järjestelmissä",
                    "Ihanteellinen aktiivisesti kasvaville alustoille, jotka tarvitsevat säännöllisiä päivityksiä",
                    "Tukee kolmannen osapuolen palveluiden ja API-rajapintojen integrointia",
                    "Katetaan tärkeimmät kehykset, tietokannat ja pilvialustat"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/month",
                hourlyEquivalent: "$24.99 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight:
                    "Lohkoketjukehitys jaetulla ajalla uusille Web3-, Blockchain- ja NFT-projekteille.",
                features: [
                    "Web3-, älysopimus-, NFT- ja Ethereum-tuki",
                    "Frontend- ja backend-integraatio asiakaskohtaisille alustoille",
                    "Sopii kasvaville lohkoketjuprojekteille jatkuvaan kehitykseen"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description:
            "Joustavat tuntipohjaiset kehityspaketit – sopivat ketterille tiimeille, startupeille ja lohkoketjuinnovaattoreille, jotka tarvitsevat tukea tarpeen mukaan. Sisältää erittäin kiireellisen bugikorjauksen!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 hrs/week",
                highlight:
                    "Osa- tai kokopäiväinen kehityspalvelu täyden pinon osaamisella.",
                features: [
                    "On-Demand-kehitys mukautettuihin ohjelmistoihin, web- ja API-ratkaisuihin",
                    "Tuki yleisimmille ohjelmointikielille ja kehysalustoille",
                    "Sopii tiimeille, jotka tarvitsevat joustavia ja kokeneita kehittäjiä"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 hrs/week",
                highlight:
                    "Edistyneet lohkoketjupalvelut Web3-yrityksille ja NFT-innovaattoreille.",
                features: [
                    "Lohkoketju-, älysopimus-, NFT- ja Ethereum-kehitys",
                    "Tuki johtaville frontend- ja backend-kehyksille: Next.js, React, Node.js",
                    "Frontend- ja backend-integraatio asiakaskohtaisille alustoille",
                    "Joustava osallistuminen edistyneisiin Web3-projekteihin"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "Reserve 8 hrs/day",
                highlight:
                    "Nopea hätäapu – ongelmien diagnosointi ja ratkaisu saman päivän aikana.",
                features: [
                    "Välitön konsultointi ja tuki",
                    "Toimitus saman päivän aikana",
                    "Yksittäisten virheiden korjaus ulkoisissa projekteissa",
                    "Ei pitkäaikaista sopimusta"
                ],
                link: "service-packages/"
            }
        ]
    }
};