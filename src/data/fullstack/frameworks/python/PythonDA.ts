import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const PythonDA: IFullStackStack = {
    title: "Python",
    description: "Python er et højniveau, fortolket programmeringssprog, der er kendt for sin enkelhed, læsbarhed og alsidighed. Det anvendes bredt på tværs af forskellige domæner, fra webudvikling og dataanalyse til kunstig intelligens og videnskabelig databehandling.",
    image: ImageUrl.backend.frameworks.python.thumbnail,
    alt: "Logo der repræsenterer Python med Flask-frameworket",
    readMore: "Udforsk flere Python-, Flask-, Django full-stack udviklingsløsninger",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Python Udvikling",
            description: "Python er et højniveau, fortolket programmeringssprog, der er kendt for sin enkelhed, læsbarhed og alsidighed. Det anvendes bredt på tværs af forskellige domæner, fra webudvikling og dataanalyse til kunstig intelligens og videnskabelig databehandling.",
            list: []
        },
        {
            title: "Let at Lære og Bruge",
            description: "Pythons enkle syntaks og læsbarhed gør det til et fremragende valg for både begyndere og erfarne udviklere. Dets omfattende standardbibliotek og fællesskabsmoduler giver færdige løsninger til en bred vifte af opgaver.",
            list: [
                "Let at lære",
                "Læsbar syntaks",
                "Alsidigt",
                "Stort standardbibliotek",
                "Stærkt fællesskab",
                "Populært til AI/ML",
                "Platformuafhængigt"
            ]
        },
        {
            title: "Alsidige Anvendelser",
            description: "Python bruges i mange forskellige områder, herunder webudvikling med frameworks som Django og Flask, datavidenskab med biblioteker som pandas og NumPy, og maskinlæring med TensorFlow og scikit-learn. Denne alsidighed gør Python til et foretrukket sprog blandt mange udviklere.",
            list: []
        },
        {
            title: "Stærk Fællesskabsstøtte",
            description: "Python har et levende og aktivt fællesskab, der kontinuerligt bidrager til dets udvikling. Med masser af tutorials, fora og open source-projekter tilgængelige kan udviklere nemt finde støtte og ressourcer til at forbedre deres færdigheder og løse udfordringer.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad bruges Python til?",
            answer: "Python bruges til webudvikling, dataanalyse, kunstig intelligens, videnskabelig databehandling og meget mere."
        },
        {
            question: "Hvorfor er Python så populært?",
            answer: "Pythons enkelhed, læsbarhed og alsidighed gør det populært blandt både begyndere og erfarne udviklere."
        },
        {
            question: "Er Python godt til webudvikling?",
            answer: "Ja, frameworks som Django og Flask gør Python til et stærkt værktøj til webudvikling."
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django er et højniveau webframework, der fremmer hurtig udvikling og et rent, pragmatisk design.",
            strengths: [
                "Alt-i-en: Leveres med mange indbyggede funktioner som ORM, autentificering og et adminpanel.",
                "Skalerbarhed: Velegnet til store applikationer.",
                "Sikkerhed: Inkluderer beskyttelse mod mange almindelige sikkerhedstrusler."
            ],
            useCases: [
                "Større webapplikationer",
                "e-handelssider",
                "content management systemer"
            ]
        },
        {
            name: "Flask",
            overview: "Flask er et mikro-webframework, der giver det nødvendige for at få en webapplikation i gang uden meget boilerplate-kode.",
            strengths: [
                "Letvægts: Minimalistisk og fleksibelt.",
                "Udvideligt: Kan nemt udvides med forskellige udvidelser.",
                "Let at lære: Simpelt at forstå og komme i gang med."
            ],
            useCases: [
                "Små til mellemstore applikationer",
                "API’er",
                "Prototyper"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI er et moderne, hurtigt (højtydende) webframework til opbygning af API’er med Python 3.6+ baseret på standard Python type hints.",
            strengths: [
                "Hastighed: Asynkron understøttelse og høj ydeevne.",
                "Automatisk dokumentation: Genererer OpenAPI og JSON Schema-dokumentation.",
                "Typesikkerhed: Bruger Python type hints til validering og serialisering."
            ],
            useCases: [
                "API’er",
                "Mikrotjenester",
                "Real-time applikationer"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid er et alsidigt webframework, der er designet til at gøre det nemt at skrive webapplikationer.",
            strengths: [
                "Fleksibilitet: Kan bruges til både små og store applikationer.",
                "Tilpasning: Meget konfigurerbart og modulært.",
                "Sikkerhed: Tilbyder flere sikkerhedsfunktioner."
            ],
            useCases: [
                "Alsidige applikationer fra mikrotjenester til store webapplikationer"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado er en skalerbar, ikke-blokerende webserver og webapplikationsframework.",
            strengths: [
                "Ydeevne: Designet til håndtering af langvarige netværksforbindelser.",
                "Real-time: Velegnet til real-time web-løsninger.",
                "Skalerbarhed: Kan håndtere tusindvis af samtidige forbindelser."
            ],
            useCases: [
                "Real-time applikationer",
                "WebSockets",
                "Long polling"
            ]
        }
    ]
}