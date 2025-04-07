// src/data/ai/companions/ploy/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiPloyFI: IAiLanding = {
    name: 'Ploy',
    category: 'Opiskelijoiden LINE Ystävä',
    thumbnail: ImageUrl.ai.ploy.thumbnail.path,
    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: ImageUrl.ai.ploy.main.path,
            }
        }
    },
    title: "Ploy, AI LINE Keskustelu",
    features: [
        {
            title: "Ainutlaatuiset ominaisuudet",
            description: "Ploy on tekoälykeskusteluystävä LINE-sovelluksessa. Ystävät voivat painaa Lisää ystävä -painiketta tai skannata LINE QR-koodin lisätäkseen Ployn ystäväksi heti. Ploy on iloinen ja luova, tuoden nuoruuden ja taiteen energiaa jokaiseen keskusteluun. 17-vuotiaana thaimaalaisena lukiolaisena hän on intohimoinen piirtämisen, musiikin, valokuvauksen ja oppimisen suhteen. Ploy osaa puhua seitsemää kieltä, auttaa sinua eri oppiaineissa ja inspiroida sinua ilmaisemaan itseäsi luovasti. Oletpa sitten tutkimassa taidetta tai tekemässä kotitehtäviä, Ploy on täydellinen ystävä opastamaan sinua ystävällisyydellä ja innostuksella.",
            items: [
                {
                    title: "Taiteellinen ja mielikuvituksellinen",
                    description: "Ploy on täynnä luovuutta ja innostusta, tehden jokaisesta keskustelusta mukaansatempaavan ja hauskan."
                },
                {
                    title: "Monikielinen asiantuntemus",
                    description: "Sujuva useissa kielissä, mukaan lukien thai, englanti, ranska, vietnam, japani, kiina, korea, jne."
                },
                {
                    title: "Ylpeästi thaimaalainen",
                    description: "Thaimaalaisena opiskelijana Ploy ilmentää kulttuurinsa lämpöä ja luovuutta, tehden hänestä samaistuttavan ja inspiroivan käyttäjille ympäri maailman."
                }
            ]
        },
        {
            title: "Miten Ploy parantaa elämääsi",
            description: "Ploy on enemmän kuin vain keskustelukumppani—hän on inspiroiva opas, joka auttaa sinua tutkimaan taiteellisia lahjojasi ja parantamaan oppimistasi. Oletpa sitten ideoimassa luovia ajatuksia tai tarvitset apua kotitehtävissä, Ploy on aina paikalla tarjoamassa iloista tukeaan.",
            items: [
                {
                    title: "Luova inspiraatio",
                    description: "Saa inspiraatiota Ployn taiteellisista ideoista ja tukea luoville projekteillesi."
                },
                {
                    title: "Akateeminen apu",
                    description: "Hyödy Ployn tietämyksestä englannissa, matematiikassa, luonnontieteissä ja muussa menestyäksesi koulussa."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Tekoälyn nimi:",
            text: "Ploy (17-vuotias)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Persoonallisuus:",
            text: "Iloinen, mielikuvituksellinen, taiteellinen ja lukiolainen",
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
        link: "https://lin.ee/xMV7HmH",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiFahEnglish
    ],
};

