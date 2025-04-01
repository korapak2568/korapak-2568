import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";

export const PythonFI: IFullStackStack = {
    title: "Python",
    description: "Python on korkean tason, tulkattu ohjelmointikieli, joka tunnetaan yksinkertaisuudestaan, luettavuudestaan ja monipuolisuudestaan. Sitä käytetään laajalti eri alueilla, kuten verkkokehityksessä, data-analyysissä, tekoälyssä ja tieteellisessä laskennassa.",
    image: "https://cdn.chorn.in.th/public/technical-expertise/full-stack-developer/python-developer.webp",
    alt: "Logo representing Python with Flask framework",
    readMore: "Tutustu lisää Python, Flask, Django full-stack kehitysrRatkaisuihin",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Python Kehitys",
            description: "Python on korkean tason, tulkattu ohjelmointikieli, joka tunnetaan yksinkertaisuudestaan, luettavuudestaan ja monipuolisuudestaan. Sitä käytetään laajalti eri alueilla, kuten verkkokehityksessä, data-analyysissä, tekoälyssä ja tieteellisessä laskennassa.",
            list: []
        },
        {
            title: "Helppo Oppia ja Käyttää",
            description: "Pythonin yksinkertainen syntaksi ja luettavuus tekevät siitä erinomaisen valinnan niin aloittelijoille kuin kokeneille kehittäjille. Laaja standardikirjasto ja yhteisön luomat moduulit tarjoavat valmiita ratkaisuja monenlaisiin tehtäviin.",
            list: [
                "Helppo oppia",
                "Luettava syntaksi",
                "Monipuolinen",
                "Laaja standardikirjasto",
                "Vahva yhteisö",
                "Suosittu tekoäly/ML:ssä",
                "Monialustainen"
            ]
        },
        {
            title: "Monipuoliset Sovellukset",
            description: "Pythonia käytetään monilla eri alueilla, kuten verkkokehityksessä Django- ja Flask-kehyksillä, data-tieteessä pandas- ja NumPy-kirjastoilla sekä koneoppimisessa TensorFlow- ja scikit-learn-kirjastoilla. Tämä monipuolisuus tekee Pythonista monien kehittäjien suosikkikielen.",
            list: []
        },
        {
            title: "Vahva Yhteisön Tuki",
            description: "Pythonilla on elinvoimainen ja aktiivinen yhteisö, joka jatkuvasti edistää sen kasvua. Lukuisat opetusohjelmat, foorumit ja avoimen lähdekoodin projektit tarjoavat kehittäjille tukea ja resursseja taitojen kehittämiseen ja haasteiden ratkaisemiseen.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mihin Pythonia käytetään?",
            answer: "Pythonia käytetään verkkokehityksessä, data-analyysissä, tekoälyssä, tieteellisessä laskennassa ja muissa alueilla."
        },
        {
            question: "Miksi Python on niin suosittu?",
            answer: "Pythonin yksinkertaisuus, luettavuus ja monipuolisuus tekevät siitä suositun valinnan sekä aloittelijoille että kokeneille kehittäjille."
        },
        {
            question: "Onko Python hyvä verkkokehitykseen?",
            answer: "Kyllä, Django- ja Flask-kehykset tekevät Pythonista tehokkaan työkalun verkkokehitykseen."
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django on korkean tason verkkokehys, joka kannustaa nopeaan kehitykseen ja selkeään, pragmaattiseen suunnitteluun.",
            strengths: [
                "Sisältää paljon valmiita ominaisuuksia, kuten ORM, autentikointi ja hallintapaneeli.",
                "Skaalautuvuus: Sopii suurille sovelluksille.",
                "Turvallisuus: Sisältää sisäänrakennettuja suojaustoimia monia yleisiä turvallisuusuhkia vastaan."
            ],
            useCases: [
                "Suurikokoiset verkkosovellukset",
                "Verkkokaupat",
                "Sisällönhallintajärjestelmät"
            ]
        },
        {
            name: "Flask",
            overview: "Flask on kevyt verkkokehys, joka tarjoaa perusasiat verkkosovelluksen käynnistämiseen ilman paljon ylimääräistä koodia.",
            strengths: [
                "Kevyt: Minimalistinen ja joustava.",
                "Laajennettavissa: Voidaan helposti laajentaa erilaisilla lisäosilla.",
                "Helppo oppia: Yksinkertainen ymmärtää ja aloittaa."
            ],
            useCases: [
                "Pienet ja keskikokoiset sovellukset",
                "APIt",
                "Prototyyppien rakentaminen"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI on moderni, nopea (korkean suorituskyvyn) verkkokehys Python 3.6+ varten, joka perustuu standardin Python-tyyppivihjeisiin.",
            strengths: [
                "Nopeus: Asynkroninen tuki ja korkea suorituskyky.",
                "Automaattiset dokumentit: Luo OpenAPI- ja JSON Schema -dokumentaatiot.",
                "Tyyppiturvallisuus: Käyttää Python-tyyppivihjeitä validointiin ja sarjalistamiseen."
            ],
            useCases: [
                "APIt",
                "Mikropalvelut",
                "Reaaliaikaiset sovellukset"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid on yleiskäyttöinen verkkokehys, joka on suunniteltu tekemään verkkosovellusten kirjoittamisesta helppoa.",
            strengths: [
                "Joustavuus: Voidaan käyttää pienille ja suurille sovelluksille.",
                "Mukautettavuus: Erittäin konfiguroitavissa ja modulaarinen.",
                "Turvallisuus: Tarjoaa useita turvallisuusominaisuuksia."
            ],
            useCases: [
                "Monipuoliset sovellukset, jotka vaihtelevat mikropalveluista suuriin verkkosovelluksiin"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado on skaalautuva, estämätön verkkopalvelin ja verkkosovelluskehys.",
            strengths: [
                "Suorituskyky: Suunniteltu pitkään elävien verkko-yhteyksien käsittelemiseen.",
                "Reaaliaika: Sopii reaaliaikaisiin verkkosovelluksiin.",
                "Skaalautuvuus: Voi käsitellä tuhansia samanaikaisia yhteyksiä."
            ],
            useCases: [
                "Reaaliaikaiset sovellukset",
                "WebSockets",
                "Pitkä polling"
            ]
        }
    ]
}
