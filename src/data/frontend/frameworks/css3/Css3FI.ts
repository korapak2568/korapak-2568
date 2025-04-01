import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";

export const Css3FI: IFrontEndStack = {
    title: "CSS3",
    description: "Paranna verkkosivustosi ulkoasua edistyneillä tyylittelytekniikoilla käyttämällä CSS3:a.",
    image: "https://cdn.chorn.in.th/public/technical-expertise/front-end-developer/css3-developer.webp",
    alt: "Logo, joka edustaa CSS3-teknologiaa",
    readMore: "Tutustu lisää CSS3 front-end-kehitysratkaisuihin",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "CSS3-responsiivinen suunnittelu",
            description: "CSS3 on tyyliohjelmoinnin uusin kehitysvaihe, joka tarjoaa kehittyneitä ominaisuuksia verkkosivujen visuaalisen ilmeen parantamiseen.",
            list: []
        },
        {
            title: "CSS3:n vahvuudet",
            description: "CSS3 tuo nykyaikaisia tyylittelyominaisuuksia verkkokehitykseen.",
            list: [
                "Edistyneet valitsimet",
                "Joustava laatikkosijoittelu",
                "Ruudukkosijoittelu",
                "Animaatiot ja siirtymät",
                "Mediaqueryt",
                "Mukautetut ominaisuudet",
                "Parannettu typografia"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "CSS3 vastaa responsiivisen ja visuaalisesti houkuttelevan verkkosuunnittelun tarpeisiin uusilla tehokkailla ominaisuuksilla.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on CSS3?",
            answer: "CSS3 on tyyliohjelmoinnin uusin versio, joka tarjoaa uusia ominaisuuksia verkkosivujen muotoiluun."
        },
        {
            question: "Mitä ovat mediaqueryt?",
            answer: "Mediaqueryt mahdollistavat responsiiviset suunnittelut soveltamalla tyylejä laitteen ominaisuuksien perusteella."
        },
        {
            question: "Mikä on Flexbox-asettelu?",
            answer: "Flexbox-asettelu tarjoaa tehokkaamman tavan suunnitella asetteluja, jakaa tilaa ja kohdistaa elementtejä."
        },
        {
            question: "Mitkä ovat suosittuja CSS-kehyksiä?",
            answer: "Suosittuja CSS-kehyksiä ovat Bootstrap, Tailwind CSS, Bulma, Foundation ja Materialize."
        }
    ],
}
