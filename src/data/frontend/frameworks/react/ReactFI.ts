import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";

export const ReactFI: IFrontEndStack = {
    title: "React",
    description: "Luo dynaamisia ja suorituskykyisiä käyttöliittymiä helposti Reactin tehokkaan komponenttipohjaisen arkkitehtuurin avulla.",
    image: "https://cdn.chorn.in.th/public/technical-expertise/front-end-developer/react-developer.webp",
    alt: "React.js-kirjastoa edustava logo",
    readMore: "Tutustu lisää ReactJS front-end-kehitysratkaisuihin",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "React-kehitys",
            description: "React.js on suosittu JavaScript-kirjasto käyttöliittymien rakentamiseen. Se mahdollistaa uudelleenkäytettävien UI-komponenttien luomisen, mikä tehostaa kehitystyötä ja parantaa sovellusten suorituskykyä.",
            list: []
        },
        {
            title: "React.js:n vahvuudet",
            description: "React.js tarjoaa laajan valikoiman ominaisuuksia, jotka tekevät siitä kehittäjien suosikin.",
            list: [
                "Komponenttipohjainen arkkitehtuuri",
                "Virtuaalinen DOM parantaa suorituskykyä",
                "Yksisuuntainen tietovirta",
                "JSX-syntaksi",
                "Rikas ekosysteemi ja aktiivinen yhteisö",
                "React Hooks",
                "Laajat kehittäjätyökalut"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "React.js ratkaisee dynaamisten käyttöliittymien kehityksen haasteet virtuaalisen DOM:n, uudelleenkäytettävien komponenttien ja aktiivisen yhteisön avulla.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on React.js?",
            answer: "React.js on JavaScript-kirjasto käyttöliittymien rakentamiseen, ja sitä ylläpitää Facebook."
        },
        {
            question: "Mitä ovat React Hooks?",
            answer: "React Hooks ovat funktioita, joiden avulla voit käyttää tilaa ja elinkaaritoimintoja funktionaalisissa komponenteissa."
        },
        {
            question: "Miten virtuaalinen DOM toimii?",
            answer: "Virtuaalinen DOM päivittää vain muuttuneet elementit, mikä parantaa sovelluksen suorituskykyä."
        }
    ],
}
