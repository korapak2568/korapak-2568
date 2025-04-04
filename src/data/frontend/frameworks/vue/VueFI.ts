import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const VueFI: IFrontEndStack = {
    title: "Vue",
    description: "Luo moderneja, reaktiivisia verkkokäyttöliittymiä nopeasti Vue:n intuitiivisella ja joustavalla suunnittelulla.",
    image: ImageUrl.frontendThumbnails.vue.path,
    alt: "Vue.js-kehystä edustava logo",
    readMore: "Tutustu lisää VueJS front-end-kehitysratkaisuihin",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Vue-kehitys",
            description: "Vue.js on progressiivinen JavaScript-kehys käyttöliittymien rakentamiseen. Se on suunniteltu asteittain omaksuttavaksi, ja sen ydinkirjasto keskittyy näkymäkerrokseen.",
            list: []
        },
        {
            title: "Vahvuudet",
            description: "Vue.js tarjoaa joustavan ja suorituskykyisen kehyksen keskeisillä vahvuuksilla.",
            list: [
                "Reaktiivinen tietosidonta",
                "Komponenttipohjainen rakenne",
                "Virtuaalinen DOM",
                "Helppo integrointi",
                "Laaja dokumentaatio",
                "Vue CLI",
                "Aktiivinen yhteisö"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "Vue.js yksinkertaistaa verkkokehitystä intuitiivisella API:lla, reaktiivisella tietosidonnalla ja helppokäyttöisyydellä.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on Vue.js?",
            answer: "Vue.js on progressiivinen JavaScript-kehys käyttöliittymien rakentamiseen."
        },
        {
            question: "Mikä on virtuaalinen DOM?",
            answer: "Virtuaalinen DOM on kevyt kopio varsinaisesta DOM:sta, mikä optimoi päivityksiä ja suorituskykyä."
        },
        {
            question: "Miten Vue.js eroaa Reactista?",
            answer: "Vue.js tarjoaa joustavamman ja yksinkertaisemman integraation verrattuna Reactin monimutkaisempaan rakenteeseen."
        }
    ],
}
