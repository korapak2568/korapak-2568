import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Html5FI: IFrontEndStack = {
    title: "HTML5",
    description: "Hallitse uusimmat verkkokehityksen standardit ja luo rikasta, vuorovaikutteista sisältöä.",
    image: ImageUrl.frontendThumbnails.html5.path,
    alt: "Logo, joka edustaa HTML5-teknologiaa",
    readMore: "Tutustu lisää HTML5 front-end-kehitysratkaisuihin",
    link: "/technical-expertise/front-end-developer/html5-developer",
    features: [
        {
            title: "HTML5-verkkosuunnittelu",
            description: "HTML5 on HyperText Markup Language -kielen uusin versio, joka tuo mukanaan uusia elementtejä ja API-rajapintoja paremman verkkokokemuksen luomiseksi.",
            list: []
        },
        {
            title: "HTML5:n vahvuudet",
            description: "HTML5 parantaa verkkokehitystä moderneilla ominaisuuksillaan ja kyvykkyyksillään.",
            list: [
                "Uudet semanttiset elementit",
                "Ääni- ja videotuki",
                "Canvas-elementti",
                "Parannetut lomakekomponentit",
                "Offline-toiminnot",
                "Geolocation API",
                "Parannettu saavutettavuus"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "HTML5 vastaa vuorovaikutteisen ja mediapitoisen verkkokokemuksen tarpeisiin uusilla elementeillä ja API-rajapinnoilla.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on HTML5?",
            answer: "HTML5 on HyperText Markup Language -kielen uusin versio, joka tuo mukanaan uusia ominaisuuksia ja elementtejä."
        },
        {
            question: "Mitä ovat uudet semanttiset elementit?",
            answer: "Uusia semanttisia elementtejä ovat muun muassa <article>, <section>, <header>, <footer>, jotka parantavat sisällön rakennetta."
        },
        {
            question: "Mikä on canvas-elementti?",
            answer: "Canvas-elementti tarjoaa tilan grafiikan piirtämiseen JavaScriptin avulla."
        }
    ],
}
