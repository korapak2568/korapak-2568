import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const GoFI: IFullStackStack = {
    title: "GO",
    description: "Go, eli Golang, on Googlen suunnittelema staattisesti tyypitetty, käännettävä ohjelmointikieli. Se tunnetaan yksinkertaisuudestaan, tehokkuudestaan ja vahvasta rinnakkaisuuden tuestaan, mikä tekee siitä erinomaisen valinnan mikropalvelujen kehittämiseen.",
    image: ImageUrl.fullstackThumbnails.go.path,
    alt: "Logo representing Go programming language",
    readMore: "Tutustu lisää Go full-stack kehitysrRatkaisuihin",
    link: "/technical-expertise/full-stack-developer/go-developer",
    features: [
        {
            title: "Go Kehitys",
            description: "Go, eli Golang, on Googlen suunnittelema staattisesti tyypitetty, käännettävä ohjelmointikieli. Se tunnetaan yksinkertaisuudestaan, tehokkuudestaan ja vahvasta rinnakkaisuuden tuestaan, mikä tekee siitä erinomaisen valinnan mikropalvelujen kehittämiseen.",
            list: []
        },
        {
            title: "Tehokas Rinnakkaisuus",
            description: "Go:n goroutine- ja kanavat tarjoavat vankan tuen rinnakkaiselle ohjelmoinnille, jolloin kehittäjät voivat luoda erittäin tehokkaita ja skaalautuvia sovelluksia. Tämä tekee Go:sta suositun kielen mikropalvelujen kehittämiseen, jotka vaativat useiden tehtävien käsittelyä samanaikaisesti.",
            list: [
                "Rinnakkaisohjelmointi",
                "Nopea käännös",
                "Yksinkertaisuus",
                "Vahva suorituskyky",
                "Staattisesti tyypitetty",
                "Jätteiden keräys",
                "Erinomainen mikropalveluille"
            ]
        },
        {
            title: "Nopea Käännös",
            description: "Go kääntyy nopeasti konekoodiksi, mikä johtaa nopeisiin suoritusaikoihin. Tämä tehokkuus, yhdistettynä roskienkeräykseen ja staattiseen tyyppiin, takaa, että Go-sovellukset toimivat hyvin myös raskaassa kuormituksessa.",
            list: []
        },
        {
            title: "Yhteensopivuus",
            description: "Go:n yksinkertaisuus ja selkeys tekevät sen helppokäyttöiseksi muiden ohjelmointikielten kanssa. Tämä yhteensopivuus mahdollistaa kehittäjille Go:n vahvuuksien hyödyntämisen suorituskykykriittisissä osissa sovellusta samalla, kun käytetään muita kieliä eri komponenteissa.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on Go?",
            answer: "Go on staattisesti tyypitetty, käännettävä ohjelmointikieli, joka on suunniteltu yksinkertaisuudelle ja suorituskyvylle."
        },
        {
            question: "Miksi käyttää Go:ta?",
            answer: "Go tarjoaa nopean suorituskyvyn, yksinkertaisuuden ja tehokkaat rinnakkaisuusominaisuudet, mikä tekee siitä ihanteellisen web-palvelimien ja mikropalvelujen kehittämiseen."
        },
        {
            question: "Onko Go hyvä valinta web-kehitykselle?",
            answer: "Kyllä, Go sopii erinomaisesti nopeiden ja tehokkaiden web-palvelimien ja API:en rakentamiseen."
        }
    ],
}
