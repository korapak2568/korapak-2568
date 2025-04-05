import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonFI} from "@/data/fullstack/frameworks/python/PythonFI";
import {PhpFI} from "@/data/fullstack/frameworks/php/PhpFI";
import {NodejsFI} from "@/data/fullstack/frameworks/nodejs/NodejsFI";
import {JavaFI} from "@/data/fullstack/frameworks/java/JavaFI";
import {GoFI} from "@/data/fullstack/frameworks/go/GoFI";
import {DotnetFI} from "@/data/fullstack/frameworks/dotnet/DotnetFI";

export const FullStackFI: IFullStack = {
    title: "Back-End-kehitys",
    span: "Back-End-kehityskokemus",
    subTitle: "",

    dotnetcore: DotnetFI,
    go: GoFI,
    java: JavaFI,
    nodejs: NodejsFI,
    php: PhpFI,
    python: PythonFI,

    stacks: [],

    services: {
        title: "Back-End-kehitys",
        descriptions: [
            "Back-end-kehitys on olennainen perusta tehokkaille, turvallisille ja skaalautuville verkkosovelluksille. Tämä taustajärjestelmä on välttämätön tietojenkäsittelyä, tietokantojen hallintaa ja turvallisuutta varten, mahdollistaen yritysten palvella monia käyttäjiä samanaikaisesti, luoda saumattomia kokemuksia ja suojata kriittisiä tietoja. Teknologioihin kuuluvat Node.js, Java Spring Boot, Python, Go, PHP ja .NET Core, jotka pystyvät vastaamaan kaikenlaisten projektien tarpeisiin, konseptitodistuksesta (PoC) markkinakelpoisen minimituotteen (MVP) kehittämiseen. Käyttöliittymien ja palvelinpuolen toiminnallisuuden saumaton integraatio tarjoaa käyttäjille ylivertaisia kokemuksia ja auttaa yrityksiä saavuttamaan tavoitteensa tehokkaasti."
        ],
        items: [
            {
                title: "Saumaton Front-End- ja Back-End-integraatio",
                description: "Yhtenäiset verkkosovellukset täydellisesti synkronoiduilla asiakas- ja palvelinkomponenteilla, jotka tarjoavat nopeutta, turvallisuutta ja skaalautuvuutta."
            },
            {
                title: "Kokonaisvaltainen SEO- ja suorituskyvyn optimointi",
                description: "Parannettu hakukonenäkyvyys ja käyttäjäkokemus optimoidun koodirakenteen, nopeampien latausaikojen ja tehokkaan resurssienhallinnan avulla."
            },
            {
                title: "Vahva automaatiotestaus",
                description: "Luotettavat ja vakaat sovellukset kattavilla testikehyksillä, jotka on integroitu koko kehityssykliin."
            },
            {
                title: "Edistynyt tietokantojen hallinta",
                description: "Tehokkaasti jäsennellyt ja hallitut tiedot optimoiduilla tietokantaratkaisuilla, mukaan lukien MySQL, MongoDB, PostgreSQL ja muut johtavat teknologiat."
            },
            {
                title: "Yrityskäyttöön soveltuvat pilvipalvelut",
                description: "Tehokkaasti käyttöönotetut ja skaalatut sovellukset AWS-, Azure-, Google Cloud- tai muilla pilvipalvelualustoilla optimoiduilla infrastruktuurikonfiguraatioilla."
            }
        ]
    }
}

FullStackFI.stacks = [
    FullStackFI.nodejs,
    FullStackFI.go,
    FullStackFI.java,
    FullStackFI.python,
    FullStackFI.php,
    FullStackFI.dotnetcore
]