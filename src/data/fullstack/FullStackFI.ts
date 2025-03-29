import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonFI} from "@/data/fullstack/frameworks/python/PythonFI";
import {PhpFI} from "@/data/fullstack/frameworks/php/PhpFI";
import {NodejsFI} from "@/data/fullstack/frameworks/nodejs/NodejsFI";
import {JavaFI} from "@/data/fullstack/frameworks/java/JavaFI";
import {GoFI} from "@/data/fullstack/frameworks/go/GoFI";
import {DotnetFI} from "@/data/fullstack/frameworks/dotnet/DotnetFI";

export const FullStackFI: IFullStack = {
    title: "Back-End & API Kokemus",
    span: "Back-End & API Kehityskokemus",
    subTitle: "",

    dotnetcore: DotnetFI,
    go: GoFI,
    java: JavaFI,
    nodejs: NodejsFI,
    php: PhpFI,
    python: PythonFI,

    stacks: [],

    services: {
        title: "Back-End- ja API-kehitys",
        descriptions: [
            "Rakenna tehokkaita, turvallisia ja skaalautuvia verkkosovelluksia asiantuntevilla full-stack-kehityspalveluillamme. Kehittäjämme erikoistuvat sekä front-end- että back-end-teknologioihin, luoden kattavia ratkaisuja, jotka on räätälöity liiketoimintasi tarpeiden mukaan. CHORNin tekninen asiantuntemus kattaa useita teknologiapinoja, kuten Node.js, .NET Core C#, Java Spring Boot, Python, Go ja PHP, joten pystymme käsittelemään projekteja kaikessa monimutkaisuudessa. Olipa kyseessä alkuperäisen Proof of Concept (PoC) -version julkaisu tai markkinavalmiin Minimum Viable Product (MVP) -version kehittäminen, tiimimme varmistaa saumattoman integraation käyttöliittymien ja palvelinpuolen toiminnallisuuden välillä erinomaisen käyttäjäkokemuksen takaamiseksi."
        ],
        items: [
            {
                title: "Saumaton front-end ja back-end integraatio",
                description: "Kehitä yhtenäisiä verkkosovelluksia, joissa asiakas- ja palvelinkomponentit ovat täydellisesti synkronoituja tarjoten nopeutta, turvallisuutta ja skaalautuvuutta."
            },
            {
                title: "Kattava SEO- ja suorituskykyoptimointi",
                description: "Paranna verkkosivustosi hakukonenäkyvyyttä ja käyttäjäkokemusta optimoidulla koodirakenteella, nopeammilla latausajoilla ja tehokkaalla resurssien hallinnalla."
            },
            {
                title: "Vahva automaattinen testaus",
                description: "Varmista sovelluksen luotettavuus ja vakaus kattavilla testauskehyksillä, jotka on integroitu koko kehityssyklin ajan."
            },
            {
                title: "Edistynyt tietokannan hallinta",
                description: "Rakenna ja hallitse tietojasi tehokkaasti optimoiduilla tietokantaratkaisuilla, kuten MySQL, MongoDB, PostgreSQL ja muilla johtavilla teknologioilla."
            },
            {
                title: "Yritystason pilvipalvelut",
                description: "Ota sovelluksesi käyttöön ja skaalaa niitä tehokkaasti käyttäen AWS, Azure, Google Cloud tai muita pilvialustoja optimoiduilla infrastruktuurikonfiguraatioilla."
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