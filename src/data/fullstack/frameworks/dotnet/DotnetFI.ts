import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const DotnetFI: IFullStackStack = {
    title: ".NET Core",
    description: ".NET Core on monipuolinen, avoimen lähdekoodin, monialustainen kehys, jonka on kehittänyt Microsoft. Sen avulla kehittäjät voivat rakentaa moderneja, suorituskykyisiä ja skaalautuvia sovelluksia eri alustoilla, kuten Windows, macOS ja Linux. Tukea tarjoavat web-sovellusten, API:en ja mikropalveluiden rakentaminen, ja .NET Core tarjoaa vankan ympäristön yritystason ratkaisuille.",
    image: ImageUrl.fullstackThumbnails.dotnetcore.path,
    alt: "Logo representing .NET Core API development",
    readMore: "Tutustu lisää .NET Core API -full-stack-kehitysrRatkaisuihin",
    link: "/technical-expertise/full-stack-developer/dotnetcore-developer",
    features: [
        {
            title: ".NET Core Kehitys",
            description: ".NET Core on tehokas, avoimen lähdekoodin kehys, joka soveltuu suorituskykyisten sovellusten rakentamiseen. Moduulirakenne ja tuki monille ohjelmointikielille tekevät siitä ihanteellisen ratkaisun skaalautuvien web-sovellusten, API:en ja mikropalveluiden kehittämiseen, jotka voivat toimia kaikilla alustoilla.",
            list: []
        },
        {
            title: "ASP.NET Core",
            description: "ASP.NET Core on monialustainen, suorituskykyinen kehys, jonka avulla voidaan rakentaa moderneja, pilvipohjaisia ja internet-yhteydessä olevia sovelluksia. Se soveltuu erityisesti web-sovellusten, API:en ja mikropalveluiden rakentamiseen, joissa keskitytään suorituskykyyn, turvallisuuteen ja skaalautuvuuteen.",
            list: [
                "Monialustainen",
                "Korkea suorituskyky",
                "Sisäänrakennettu riippuvuuden injektio",
                "Modulaarinen arkkitehtuuri",
                "Yhtenäinen MVC- ja Web API -kehys",
                "Tukee Razor Pages -sivupohjia",
                "Turvallinen tunnistus ja valtuutus"
            ]
        },
        {
            title: ".NET Core API",
            description: ".NET Core API tarjoaa kehittäjille työkalut RESTful-teknologioiden ja API:en rakentamiseen, joita voidaan käyttää monilla asiakaslaitteilla, kuten selaimilla, mobiililaitteilla ja työpöytäsovelluksilla. Sen kevyt, modulaarinen rakenne takaa korkean suorituskyvyn ja helpon integraation muihin teknologioihin.",
            list: []
        },
        {
            title: ".NET Core",
            description: ".NET Core on pääasiallinen kieli, jota käytetään sovellusten kehittämiseen .NET Core:lla. C#:n moderni syntaksi, monipuolisuus ja nykyaikaiset ominaisuudet tekevät siitä erinomaisen valinnan skaalautuvien, ylläpidettävien ja luotettavien sovellusten kehittämiseen.",
            list: [
                "Moderni syntaksi",
                "Objektipohjainen",
                "Rikas standardikirjasto",
                "Tukee asynkronista ohjelmointia",
                "LINQ-tuki",
                "Monialustainen yhteensopivuus",
                "Yhteensopivuus muiden .NET-kielten kanssa"
            ]
        }
    ],
    faqs: [
        {
            question: "Mikä on .NET Core?",
            answer: ".NET Core on avoimen lähdekoodin, monialustainen kehys, jonka avulla voidaan rakentaa moderneja sovelluksia, jotka toimivat Windowsilla, macOS:llä ja Linuxilla."
        },
        {
            question: "Mihin ASP.NET Core-kehystä käytetään?",
            answer: "ASP.NET Core on kehys web-sovellusten, API:en ja mikropalveluiden rakentamiseen, jossa on korkea suorituskyky ja monialustainen tuki."
        },
        {
            question: "Miksi .NET Core on hyvä valinta kehitykseen?",
            answer: "C# on moderni, monipuolinen ohjelmointikieli, joka tarjoaa laajan ominaisuusvalikoiman ja tekee siitä erinomaisen valinnan skaalautuvien, ylläpidettävien sovellusten kehittämiseen .NET Core:lla."
        }
    ],
}
