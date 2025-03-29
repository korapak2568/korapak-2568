import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";

export const NextjsFI: IFrontEndStack = {
    title: "NextJS",
    description: "Tehosta React-sovelluksiasi saumattomalla palvelinpuolen renderöinnillä ja staattisella sivugeneroinnilla optimaalisen suorituskyvyn saavuttamiseksi.",
    image: "/chorn-images/technical-expertise/front-end-developer/nextjs-developer.webp",
    alt: "Next.js-kehystä edustava logo",
    readMore: "Tutustu lisää NextJS front-end-kehitysratkaisuihin",
    link: "/technical-expertise/front-end-developer/nextjs-developer",
    features: [
        {
            title: "NextJS-kehitys",
            description: "Next.js on johtava React-kehys, joka tarjoaa palvelinpuolen renderöinnin ja staattisen sivugeneroinnin. Se mahdollistaa suorituskykyiset, SEO-ystävälliset verkkosovellukset minimaalisella määrityksellä – täydellinen modernin verkkokehityksen tarpeisiin.",
            list: []
        },
        {
            title: "NextJS:n vahvuudet",
            description: "NextJS erottuu vahvoilla ominaisuuksillaan",
            list: [
                "Palvelinpuolen renderöinti",
                "Staattinen sivugenerointi",
                "Automaattinen koodin jakaminen",
                "API-reitit",
                "Inkrementaalinen staattinen uudelleengenerointi",
                "Sisäänrakennettu CSS- ja Sass-tuki",
                "Erinomainen kehittäjäkokemus"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "Next.js ratkaisee verkkokehityksen haasteita tarjoamalla suorituskykyä, skaalautuvuutta ja SEO-parannuksia, mikä varmistaa optimaalisen sovellustoimituksen.",
            list: []
        },
    ],
    faqs: [
        {
            question: "Mikä on Next.js?",
            answer: "Next.js on React-kehys, joka tarjoaa palvelinpuolen renderöinnin ja staattisen sivugeneroinnin optimoitujen verkkosovellusten luomiseen."
        },
        {
            question: "Miten Next.js:n palvelinpuolen renderöinti parantaa suorituskykyä?",
            answer: "Palvelinpuolen renderöinti parantaa suorituskykyä esirenderöimällä sivut palvelimella, mikä vähentää asiakaspuolen renderöintiaikaa."
        },
        {
            question: "Mitä on staattinen sivugenerointi Next.js:ssä?",
            answer: "Staattinen sivugenerointi esirenderöi sivut rakennusvaiheessa, mikä tarjoaa nopeat latausajat ja paremman SEO:n."
        }
    ],
}
