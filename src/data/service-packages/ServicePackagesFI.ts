// ServicePackagesFI.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesFI: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Kolme täysipäiväistä palvelupakettia yrityksille ja startupeille, joilla on selkeä skaalausstrategia. Toimimme teknologiapartnerina, joka auttaa vähentämään rekrytointipainetta ja nopeuttamaan tuotekehitystä. Sopii erityisesti 3–12 kuukauden aikajänteen lanseerauksiin.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Ma–Pe, 8:30–17:30 (Kokoaikainen, omistautunut)",
                highlight: "Omistautunut tuki ei-blockchain-projekteille – ihanteellinen MVP:ille, järjestelmäpäivityksille ja skaalautuville ratkaisuille.",
                features: [
                    "Järjestelmäpäivitykset, uusien ominaisuuksien kehitys, MVP ja proof-of-concept",
                    "Tuki kaikille yleisille kielille ja kehysratkaisuille (frontend & backend)",
                    "Yhteensopivuus suosittujen tietokantojen ja pilvipalvelujen kanssa",
                    "Tuki nykyaikaisille ja perinteisille protokollille: gRPC, RPI, JMS"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Ma–Pe, 8:30–17:30 (Kokoaikainen, omistautunut)",
                highlight: "Täysi blockchain-kehitys Web3-integraatiolla, mukaan lukien tokenomics ja älysopimukset.",
                features: [
                    "Blockchain- ja Web3-kehitys: Solidity, Ethers.js, Ethereum",
                    "Älysopimusten suunnittelu, auditointi ja integrointi",
                    "Frontend & Backend: Next.js, React, Node.js",
                    "Token-mekaniikat: airdropit, ennakkomyynnit, palkkiojärjestelmät"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Ma–Pe, 8:30–17:30 (Kokoaikainen, omistautunut)",
                highlight: "NFT-kehitykseen keskittynyt ratkaisu – sekä uusien että legacy-sopimusten modernisointi.",
                features: [
                    "Moderni NFT-kehitys ja olemassa olevien älysopimusten uudistus",
                    "Solidity-pohjaiset älysopimukset",
                    "Next.js, React, Node.js -integraatio",
                    "Tuki ERC721-, ERC1155-standardeille ja markkinapaikoille"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Kolme osa-aikaista palvelupakettia — Essential Care, Growth Support ja Blockchain Pioneer — suunniteltu tukemaan tuotteiden jatkuvaa kehitystä ja ylläpitoa julkaisun jälkeen. Sopii erityisesti startup-yrityksille, digitoimistoille ja teknologiajohtoisille tiimeille, jotka tarvitsevat skaalautuvaa teknistä kumppanuutta ilman kokoaikaisia kehittäjiä.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/kuukausi",
                hourlyEquivalent: "$5.625 USD/tunti",
                schedule: "Ma–Pe, 8:30–17:30 (jaettu aika)",
                highlight: "Perustason tekninen tuki MVP:ille, sisäisille työkaluille tai varhaisvaiheen alustoille, joilla on rajalliset kehitystarpeet.",
                features: [
                    "Kevyt käyttöönotto ja ydintoimintojen hienosäätö",
                    "Järjestelmän valvonta, pienet korjaukset ja vakauden ylläpito",
                    "Selkeä dokumentaatio ja kehittäjäohjeistus tiimin perehdyttämiseen",
                    "Ei sisällä monimutkaisten uusien ominaisuuksien kehitystä",
                    "Tukee yleisimpiä ohjelmointikieliä ja tietokantoja"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/kuukausi",
                hourlyEquivalent: "$12.49 USD/tunti",
                schedule: "Ma–Pe, 8:30–17:30 (jaettu aika)",
                highlight: "Sopii kasvaville yrityksille, jotka tarvitsevat jatkuvaa kehitystä ilman kokoaikaista sitoutumista.",
                features: [
                    "Säännöllinen ylläpito ja keskitason ominaisuuksien kehitys",
                    "Viikoittainen synkronointi sidosryhmien kanssa (1–3 tiimin jäsentä)",
                    "Full-stack-tuki API:ille, alustoille ja sisäisille työkaluille",
                    "Kattaa yleisimmät kielet, kehykset, tietokannat ja pilvialustat",
                    "Skaalautuu suurempiin paketteihin liiketoiminnan kasvaessa"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/kuukausi",
                hourlyEquivalent: "$18.74 USD/tunti",
                schedule: "Ma–Pe, 8:30–17:30 (jaettu aika)",
                highlight: "Vahvempi kehitysfokus kuin Growth Support -paketissa, ihanteellinen alustoille, jotka tarvitsevat usein päivityksiä ja tiivistä yhteistyötä sidosryhmien kanssa.",
                features: [
                    "Laajennettu kehitysalue ominaisuuspäivityksille, hienosäädöille ja suorituskyvyn parannuksille",
                    "Useammin toimitussyklit kuin Growth Support (sopii nopeatahtisiin iteraatioihin)",
                    "1–2 synkronointia viikossa sidosryhmien kanssa (3–6 henkilöä) suunnittelua ja palautetta varten",
                    "Full-stack-kehitys webissä, backendissä ja kolmannen osapuolen integraatioissa",
                    "Tukee suuria kehyksiä, tietokantoja ja pilvipalveluita kasvavan kysynnän kanssa"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/kuukausi",
                hourlyEquivalent: "$24.99 USD/tunti",
                schedule: "Ma–Pe, 8:30–17:30 (koko päivä, jaettu aika)",
                highlight: "Aloitustason blockchain-tuki Web3-, NFT- ja Ethereum-pohjaisten tuoteinnovaatioiden kehittämiseen.",
                features: [
                    "Älysopimusten ja dAppien kehitys Ethereumissa",
                    "Integraatio Web2/3-taustajärjestelmien ja token-ekosysteemien kanssa",
                    "NFT:n luonti, metadatan hallinta ja markkinapaikan valmius",
                    "Ihanteellinen yrityksille, jotka pilotoivat tai lanseeraavat Web3-kokemuksia"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Joustavat tuntiperusteiset kehityspaketit — täydellinen valinta ketterille tiimeille, startup-yrityksille ja Web3-innovaatioihin keskittyville organisaatioille. Vältä kiinteät palkkauskustannukset ja skaalaa ketterästi. Sisältää myös hätäkorjaukset.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 h/vko",
                highlight: "Full-stack-kehitysratkaisu, joka tukee tiimisi kasvua ja toimituskykyä joustavasti.",
                features: [
                    "Räätälöity ohjelmisto-, verkkosovellus- ja API-kehitys tarpeen mukaan",
                    "Tuki useimmille moderneille teknologioille ja ohjelmointikielille",
                    "Hyvä valinta tiimeille, jotka tarvitsevat asiantuntevaa, mutta ei pysyvää resursointia"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 h/vko",
                highlight: "Korkean tason Web3-kehityspaketti — suunniteltu NFT-projekteihin ja lohkoketjuarkkitehtuuriin.",
                features: [
                    "Smart contract -kehitys, NFT-standardit, Ethereum-pohjaiset ratkaisut",
                    "Frontend- ja backend-integraatio Next.js, React, Node.js avulla",
                    "Skaalautuva ratkaisu Web3-projektien rakentamiseen ja käyttöönottoon"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "8 h varattuna",
                highlight: "Pikakorjauspalvelu kriittisiin virheisiin — toimitus saman päivän aikana.",
                features: [
                    "Välitön konsultaatiopalvelu ja ongelma-analyysi",
                    "Yhden virheen korjaus ilman pitkäaikaista sopimusta",
                    "Optimoitu tuotantoympäristöjen ylläpitotilanteisiin",
                    "Sopii ulkoisille tai freelancer-pohjaisille projekteille"
                ],
                link: "service-packages/"
            }
        ]
    }
};