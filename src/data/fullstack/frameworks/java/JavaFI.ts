import { IFullStackStack } from "@/data/fullstack/model/IFullStackStack";
import { ImageUrl } from "@/image/ImageUrl";

export const JavaFI: IFullStackStack = {
    title: "Java-kehitys",
    description: "Java on vahva ja monipuolinen kieli, joka soveltuu erinomaisesti nykyaikaisiin yritys- ja pilvipohjaisiin sovelluksiin. Spring Bootin kaltaisten kehysten, gRPC-teknologian ja perinteisiä järjestelmiä tukevien työkalujen, kuten RMI:n ansiosta Java säilyttää asemansa skaalautuvien full stack -ratkaisujen perustana.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java, Spring Boot, gRPC ja RMI -kehitys",
    readMore: "Tutustu Java- ja Spring Boot -pohjaiseen full stack -kehitykseen",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Moderni Java-kehitys",
            description: "Java kehittyy jatkuvasti uusilla ominaisuuksilla, kuten record-rakenteilla, pattern matching -toiminnolla ja virtuaaliketjuilla, jotka lisäävät tuottavuutta ja parantavat suorituskykyä.",
            list: [
                "Java 17+ LTS -tuki",
                "Parannettu suorituskyky virtuaaliketjuilla",
                "Vahva tyyppiturvallisuus ja ylläpidettävyys",
                "Laajasti käytössä mikropalveluissa ja yrityssovelluksissa"
            ]
        },
        {
            title: "Spring Boot ja pilvisovellukset",
            description: "Spring Boot nopeuttaa sovelluskehitystä tarjoamalla esiasetettuja komponentteja ja helpon pilvi-integraation. Se tukee REST API:en, mikropalveluiden ja full stack -ratkaisujen nopeaa kehittämistä.",
            list: [
                "Automaattinen konfigurointi ja riippuvuuksien hallinta",
                "Valmis mikropalveluarkkitehtuuri",
                "Tuki RESTful API:lle ja WebSocketille",
                "Helppo käyttöönotto pilvessä Spring Cloudin avulla"
            ]
        },
        {
            title: "Palveluiden välinen viestintä gRPC:llä ja RMI:llä",
            description: "Java käyttää gRPC:tä suorituskykyiseen, kieliriippumattomaan palveluiden väliseen viestintään. Perinteisten Java-järjestelmien tukemiseksi RMI on edelleen luotettava ratkaisu.",
            list: [
                "Tehokas binääriviestintä gRPC:llä",
                "Yhteensopivuus perinteisten järjestelmien kanssa RMI:llä",
                "Turvallinen ja hallittu etäkäyttö",
                "Modernien ja perinteisten sovellusten yhdistäminen"
            ]
        },
        {
            title: "Yritystason järjestelmät ja Java EE:n modernisointi",
            description: "Vaikka Java EE tarjosi perustan yrityssovelluksille, modernit Java-kehykset kuten Jakarta EE ja Spring modernisoivat näitä järjestelmiä paremmalla modulaarisuudella, nopeudella ja pilvituelta – menettämättä yhteensopivuutta vanhojen järjestelmien kanssa.",
            list: [
                "Jakarta EE Java EE:n kehitysaskeleena",
                "Moderni käyttöönotto Dockerin ja Kubernetesin avulla",
                "Turvalliset yritystason arkkitehtuurit",
                "Nykyisten järjestelmien tuki moderneilla API-rajapinnoilla"
            ]
        }
    ],
    faqs: [
        {
            question: "Mikä on Spring Boot?",
            answer: "Spring Boot on kehys, joka helpottaa itsenäisten, tuotantovalmiiden Spring-pohjaisten sovellusten kehittämistä. Se tarjoaa automaattiset asetukset, riippuvuushallinnan ja sisäänrakennetut palvelimet."
        },
        {
            question: "Miten Java tukee nykyaikaisia ja perinteisiä järjestelmiä?",
            answer: "Java tukee nykyaikaista kehitystä Spring Bootin ja gRPC:n avulla ja säilyttää samalla yhteensopivuuden perinteisten teknologioiden, kuten RMI:n ja J2EE:n kanssa."
        },
        {
            question: "Mikä on gRPC ja miten sitä käytetään Javassa?",
            answer: "gRPC on suorituskykyinen, avoimen lähdekoodin RPC-kehys, jota käytetään mikropalveluarkkitehtuurissa tehokkaaseen viestintään. Javassa gRPC käyttää Protocol Buffers -muotoa tietojen sarjoittamiseen."
        }
    ]
};