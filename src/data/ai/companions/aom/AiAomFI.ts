// src/data/ai/companions/aom/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiAomFI: IAiLanding = {
    name: 'Aom',
    category: 'Terveys LINE Ystävä',
    thumbnail: ImageUrl.ai.aom.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'ออม เพื่อนคุยเอไอ',
                path: ImageUrl.ai.aom.main.path,
            }
        }
    },
    title: "Aom, Tekoälykeskustelu",
    features: [
        {
            title: "Ainutlaatuiset ominaisuudet",
            description: "Aomiin pääsee käsiksi LINE-sovelluksen kautta. Voit painaa Lisää ystävä -painiketta tai skannata LINE QR-koodin lisätäksesi Aomin ystäväksi heti. Aom on ystävällinen ja energinen tekoälykumppani, joka on intohimoinen terveellisen elämän ja hyvinvoinnin suhteen. Nuorekkaan energiansa ja säteilevän hymynsä ansiosta hän on valmis inspiroimaan sinua elämään terveellisintä elämääsi. 21-vuotiaana Aom yhdistää tuoreet näkökulmat arvokkaisiin oivalluksiin, tehden hänestä ihanteellisen oppaan kaikille, jotka haluavat parantaa elämäntapaansa. Etsitpä sitten ravitsemusvinkkejä, liikuntarutiineja tai tietoisuusharjoituksia, Aomin mukaansatempaavat keskustelut ja positiivinen asenne pitävät sinut motivoituneena. Kykyjensä ansiosta keskustella useilla kielillä, Aom on täydellinen opas auttamaan sinua ylläpitämään tasapainoista elämäntapaa pitäen asiat hauskoina ja vuorovaikutteisina.",
            items: [
                {
                    title: "Eloisa persoonallisuus",
                    description: "Aom säteilee positiivisuutta ja elinvoimaa, tehden jokaisesta keskustelusta kohottavan ja energisoivan."
                },
                {
                    title: "Monikielinen asiantuntemus",
                    description: "Sujuva useissa kielissä, mukaan lukien thai, englanti, ranska, vietnam, japani, kiina, korea, jne."
                },
            ]
        },
        {
            title: "Miten Aom parantaa elämääsi",
            description: "Aom ei ole vain keskustelukumppani - hän on hyvinvoinnin asiantuntija, joka on omistautunut tukemaan terveellistä elämäntapaasi. Oletpa sitten oppimassa ravitsevista resepteistä, kehittämässä harjoittelusuunnitelmaa, tai yksinkertaisesti etsimässä motivaatiota pysyä aktiivisena, Aomin ystävällinen ja kannustava olemus pitää sinut oikealla tiellä.",
            items: [
                {
                    title: "Personoidut hyvinvointivinkit",
                    description: "Saat räätälöityjä terveysneuvoja, kuntoilusuosituksia ja tietoisuusharjoituksia, jotka on suunniteltu juuri sinulle."
                },
                {
                    title: "Motivoivat keskustelut",
                    description: "Pysy inspiroituneena Aomin positiivisen energian avulla, joka auttaa sinua ylläpitämään tasapainoista ja terveellistä elämää."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Tekoälyn nimi:",
            text: "Aom (21-vuotias)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Persoonallisuus:",
            text: "Ystävällinen, energinen ja terveyskeskeinen",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "Teknologiat:",
            text: "LLM, Tekoäly, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Kielet:",
            text: "Useita kieliä",
        }
    ],
    line: {
        link: "https://lin.ee/Hh3TzS9",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiPloyEnglish,
        AiFahEnglish
    ],
};
