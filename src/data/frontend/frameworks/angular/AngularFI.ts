import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const AngularFI: IFrontEndStack = {
    title: "Angular",
    description: "Kehitä vankkoja, yritystason web-sovelluksia Angularin kattavalla ja monipuolisella kehityskehyksellä.",
    image: ImageUrl.frontend.frameworks.angular.thumbnail,
    alt: "Logo, joka edustaa Angular-kehystä",
    readMore: "Tutustu lisää Angularin front-end-kehitysratkaisuihin",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Angular-kehitys",
            description: "Angular on Googlen kehittämä tehokas web-sovelluskehys. Se helpottaa dynaamisten, yksisivuisten sovellusten luomista kattavan työkalusarjansa ja MVC-arkkitehtuurinsa avulla.",
            list: []
        },
        {
            title: "Angularin vahvuudet",
            description: "Angular erottuu vahvalla arkkitehtuurillaan ja rikkailla ominaisuuksillaan.",
            list: [
                "Kaksisuuntainen tietosidonta",
                "Riippuvuuksien injektointi",
                "Komponenttipohjainen rakenne",
                "TypeScript-integraatio",
                "Kattavat testausvälineet",
                "Monipuolinen CLI",
                "Laaja dokumentaatio"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "Angular ratkaisee suurten sovellusten monimutkaisuudet vahvalla arkkitehtuurilla, tehokkaalla tietosidonnalla ja riippuvuuksien injektoinnilla.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on Angular?",
            answer: "Angular on Googlen kehittämä web-sovelluskehys, joka on suunniteltu dynaamisten verkkosovellusten luomiseen."
        },
        {
            question: "Mikä on kaksisuuntainen tietosidonta?",
            answer: "Kaksisuuntainen tietosidonta synkronoi mallin ja näkymän, varmistaen, että muutokset yhdessä heijastuvat toiseen."
        },
        {
            question: "Miksi käyttää TypeScriptiä Angularin kanssa?",
            answer: "TypeScript parantaa Angular-kehitystä vahvalla tyypityksellä, moderneilla ominaisuuksilla ja kehittyneillä työkaluilla."
        }
    ],
}
