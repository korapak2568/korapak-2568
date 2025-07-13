// ServicePackagesFI.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesFI: IServicePackages = {
    name: "Palvelupaketit",
    premium: {
        name: "Premium-paketit",
        description: "Kompaktit ohjelmistoinsinöörisuunnitelmat varhaisen vaiheen alustoille, MVP-ratkaisuille, sisäisille työkaluille tai projekteille, jotka vaativat nopeaa toimitusta. Suunniteltu startupeille ja yrityksille, jotka tarvitsevat asiantuntija-apua ilman pitkäaikaista sitoutumista tai koko tiimin resursointia.",
        plans: [
            {
                name: "Pieni projektipaketti",
                price: "USD 299 / 1–3 päivää",
                schedule: "Joustava (projektipohjainen, ≤1 viikko)",
                highlight: "Tehokas ratkaisu mikrotehtäville, korjauksille tai pienille ominaisuuksille, jotka voidaan toimittaa muutamassa päivässä.",
                features: [
                    "Ihanteellinen kiireellisille tehtäville, prototyypeille tai yksittäisille bugikorjauksille",
                    "Toimitusaika tyypillisesti 2–5 arkipäivää",
                    "Sisältää suunnittelun, koodin toimituksen ja perustestauksen",
                    "Tuki frontend-, backend- ja API-pienominaisuuksille",
                    "Ei jatkuvaa tukea tai viikkopalavereita",
                    "Paras yksittäisiin tai erillisiin tarpeisiin"
                ],
                link: "service-packages/"
            },
            {
                name: "Nopea Toimitussuunnitelma",
                price: "USD 499 / 1–2 viikkoa",
                schedule: "Joustava (projektiluontoinen, ~1–2 viikkoa)",
                highlight: "Sprinttimäinen paketti kompakteille ominaisuuksille, integraatioille tai parannuksille – toimitus muutamassa viikossa.",
                features: [
                    "Parhaiten sopii keskitason monimutkaisiin toimintoihin, komponenttipäivityksiin tai integraatioihin",
                    "Sisältää suunnittelun, designin iteroinnin, toteutuksen ja toiminnallisen testauksen",
                    "Tukee full-stack-tehtäviä tai tarkkaan rajattuja moduuleja (esim. API, dashboard, automaatio)",
                    "Sisältää enintään 2 synkronointia suunnittelua ja luovutusta varten",
                    "Nopea toimitus ilman pitkäaikaisia sopimuksia",
                    "Sopii alkuvaiheen tiimeille, POC-projekteihin tai sisäisten työkalujen laajennuksiin"
                ],
                link: "service-packages/"
            },
            {
                name: "Perustason hoitopaketti",
                price: "USD 900 / kk",
                schedule: "Ma–Pe, 8:30–17:30 (jaettu työaika)",
                highlight: "Perustason tekninen tuki MVP:ille, sisäisille työkaluille tai varhaisvaiheen alustoille, joilla on rajallinen kehitystarve.",
                features: [
                    "Kevyt käyttöönotto ja ydintoimintojen stabilointi",
                    "Säännöllinen valvonta, virheiden korjaus ja tekninen ylläpito",
                    "Dokumentointi ja tekninen siirto sisäisille tiimeille",
                    "Ei sisällä monimutkaisten ominaisuuksien kehitystä",
                    "Yhteensopiva laajasti käytettyjen ohjelmointikielten ja tietokantojen kanssa"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Kultapaketit",
        description: "Kolmen osa-aikaisen palvelupaketin kokonaisuus — Growth Support, Advanced Growth Plan ja Blockchain Pioneer — räätälöity tuotteen lanseerauksen jälkeiseen tukeen, strategiseen iterointiin ja skaalautuviin teknisiin operaatioihin. Suunniteltu startupeille, toimistoille ja yrityksille, jotka tarvitsevat luotettavaa teknistä osaamista ilman kokopäiväisiä rekrytointeja.",
        plans: [
            {
                name: "Kasvutukipaketti",
                price: "USD 1,999 / kuukausi",
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
                name: "Edistynyt kasvupaketti",
                price: "USD 2,999 / kuukausi",
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
                name: "Blockchain-aloituspaketti",
                price: "USD 3,999 / kuukausi",
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
    platinum: {
        name: "Platina-paketit",
        description: "Kolme strategista kokopäiväistä palvelupakettia – Premium-innovaatiopaketti, Web3-ydinpaketti ja NFT-kehityspaketti – on suunniteltu CEO:ille, CTO:ille, tuoteomistajille ja perustajille, jotka etsivät luotettavaa teknistä kumppania nopeuttamaan tuotelanseerauksia 3–12 kuukauden sisällä. Soveltuu liiketoimintakriittisiin hankkeisiin, joissa vaaditaan skaalautuvuutta, nopeita iterointeja ja sisäisen rekrytointirasituksen keventämistä.",
        plans: [
            {
                name: "Premium-innovaatiopaketti",
                price: "USD 5,900 / month",
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
                name: "Web3-ydinpaketti",
                price: "USD 7,900 / month",
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
                name: "NFT-kehityspaketti",
                price: "USD 7,900 / month",
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
    }
};