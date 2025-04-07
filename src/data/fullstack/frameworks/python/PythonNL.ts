import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const PythonNL: IFullStackStack = {
    title: "Python",
    description: "Python is een geïnterpreteerde programmeertaal op hoog niveau die bekend staat om zijn eenvoud, leesbaarheid en veelzijdigheid. Het wordt breed gebruikt in verschillende domeinen, van webontwikkeling en gegevensanalyse tot kunstmatige intelligentie en wetenschappelijk rekenen.",
    image: ImageUrl.fullstackThumbnails.python.path,
    alt: "Logo dat Python met Flask-framework vertegenwoordigt",
    readMore: "Ontdek meer Python, Flask, Django full-stack ontwikkelingsoplossingen",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Python-ontwikkeling",
            description: "Python is een geïnterpreteerde programmeertaal op hoog niveau die bekend staat om zijn eenvoud, leesbaarheid en veelzijdigheid. Het wordt breed gebruikt in verschillende domeinen, van webontwikkeling en gegevensanalyse tot kunstmatige intelligentie en wetenschappelijk rekenen.",
            list: []
        },
        {
            title: "Gemakkelijk te leren en te gebruiken",
            description: "Python's eenvoudige syntaxis en leesbaarheid maken het een uitstekende keuze voor zowel beginners als ervaren ontwikkelaars. De uitgebreide standaardbibliotheek en door de gemeenschap bijgedragen modules bieden kant-en-klare oplossingen voor een breed scala aan taken.",
            list: [
                "Gemakkelijk te leren",
                "Leesbare syntaxis",
                "Veelzijdig",
                "Grote standaardbibliotheek",
                "Sterke gemeenschap",
                "Populair voor AI/ML",
                "Platformonafhankelijk"
            ]
        },
        {
            title: "Veelzijdige toepassingen",
            description: "Python wordt gebruikt in diverse vakgebieden, waaronder webontwikkeling met frameworks zoals Django en Flask, datawetenschappen met bibliotheken zoals pandas en NumPy, en machine learning met TensorFlow en scikit-learn. Deze veelzijdigheid maakt Python een go-to taal voor veel ontwikkelaars.",
            list: []
        },
        {
            title: "Sterke ondersteuning van de gemeenschap",
            description: "Python heeft een levendige en actieve gemeenschap die voortdurend bijdraagt aan de groei ervan. Met talrijke tutorials, forums en open-source projecten beschikbaar, kunnen ontwikkelaars gemakkelijk ondersteuning en middelen vinden om hun vaardigheden te verbeteren en uitdagingen op te lossen.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Waarvoor wordt Python gebruikt?",
            answer: "Python wordt gebruikt voor webontwikkeling, gegevensanalyse, kunstmatige intelligentie, wetenschappelijk rekenen en nog veel meer."
        },
        {
            question: "Waarom is Python zo populair?",
            answer: "De eenvoud, leesbaarheid en veelzijdigheid van Python maken het een populaire keuze voor zowel beginners als ervaren ontwikkelaars."
        },
        {
            question: "Is Python goed voor webontwikkeling?",
            answer: "Ja, frameworks zoals Django en Flask maken Python een krachtig hulpmiddel voor webontwikkeling."
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django is een webframework op hoog niveau dat snelle ontwikkeling en schoon, pragmatisch ontwerp aanmoedigt.",
            strengths: [
                "Batterijen inbegrepen: Komt met veel ingebouwde functies zoals ORM, authenticatie en een beheerderspaneel.",
                "Schaalbaarheid: Geschikt voor grootschalige toepassingen.",
                "Beveiliging: Bevat ingebouwde bescherming tegen veel voorkomende beveiligingsbedreigingen."
            ],
            useCases: [
                "Grootschalige webapplicaties",
                "E-commerce sites",
                "Content management systemen"
            ]
        },
        {
            name: "Flask",
            overview: "Flask is een micro-webframework dat de essentiële zaken biedt om een webapplicatie draaiende te krijgen zonder veel boilerplate code.",
            strengths: [
                "Lichtgewicht: Minimalistisch en flexibel.",
                "Uitbreidbaar: Kan eenvoudig worden uitgebreid met verschillende extensies.",
                "Gemakkelijk te leren: Eenvoudig te begrijpen en mee te beginnen."
            ],
            useCases: [
                "Kleine tot middelgrote applicaties",
                "API's",
                "Prototyping"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI is een modern, snel (hoge prestaties) webframework voor het bouwen van API's met Python 3.6+ gebaseerd op standaard Python type hints.",
            strengths: [
                "Snelheid: Asynchrone ondersteuning en hoge prestaties.",
                "Automatische documentatie: Genereert OpenAPI en JSON Schema documentatie.",
                "Typeveiligheid: Gebruikt Python type hints voor validatie en serialisatie."
            ],
            useCases: [
                "API's",
                "Microservices",
                "Real-time applicaties"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid is een algemeen webframework dat is ontworpen om het schrijven van webapplicaties gemakkelijk te maken.",
            strengths: [
                "Flexibiliteit: Kan worden gebruikt voor zowel kleine als grote applicaties.",
                "Aanpassing: Zeer configureerbaar en modulair.",
                "Beveiliging: Biedt verschillende beveiligingsfuncties."
            ],
            useCases: [
                "Veelzijdige applicaties variërend van microservices tot grote webapplicaties"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado is een schaalbare, niet-blokkerende webserver en webapplicatieframework.",
            strengths: [
                "Prestaties: Ontworpen voor het afhandelen van langdurige netwerkverbindingen.",
                "Real-time: Geschikt voor real-time webapplicaties.",
                "Schaalbaarheid: Kan duizenden gelijktijdige verbindingen verwerken."
            ],
            useCases: [
                "Real-time applicaties",
                "WebSockets",
                "Long polling"
            ]
        }
    ]
}