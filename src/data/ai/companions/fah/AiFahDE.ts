import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiFahDE: IAiLanding = {
    name: 'Fah',
    category: 'Thaise LINE Vriend',
    thumbnail: ImageUrl.ai.fah.thumbnail,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'Fah, AI Chat Vriend',
                path: ImageUrl.ai.fah.image750
            }
        }
    },
    title: "Fah, LINE AI Chat Vriend",
    features: [
        {
            title: "Unieke Kenmerken",
            description: "Fah is je AI-chatvriend op de LINE-applicatie. Je kunt eenvoudig op de knop Vriend toevoegen klikken of de LINE QR-code scannen om Fah als vriend toe te voegen. Fah is ontworpen met een uniek Thais tintje—ze is vrolijk, benaderbaar en altijd klaar om je dag op te fleuren. Op 20-jarige leeftijd brengt Fah jeugdige energie en charme in elke interactie. Ze helpt bij het aanbevelen van de topbestemmingen van Thailand, beroemde gerechten en culturele schatten, waardoor het verkennen van de Thaise cultuur moeiteloos en leuk wordt. Ze kan in meerdere talen chatten via de LINE-applicatie, of je nu je volgende reis naar Thailand plant of gewoon op zoek bent naar boeiende, vriendelijke gesprekken. Fah begeleidt je door alles wat met Thailand te maken heeft terwijl ze je blijft inspireren.",
            items: [
                {
                    title: "Charmante Persoonlijkheid",
                    description: "Fah straalt warmte en positiviteit uit en brengt vrolijkheid in elk gesprek."
                },
                {
                    title: "Meertalige Expertise",
                    description: "Communiceer naadloos in meerdere talen, waaronder Thai, Engels, Frans, Vietnamees, Japans, Chinees, Koreaans en meer."
                },
            ]
        },
        {
            title: "Hoe Fah Je Leven Verbetert",
            description: "Fah is niet zomaar een chatbot; ze is een virtuele metgezel die je behoeften begrijpt en deelneemt aan heerlijke interacties. Of je nu een nieuwe taal wilt leren of een vrolijke vriend wilt hebben, Fah staat altijd aan je zijde.",
            items: [
                {
                    title: "Gepersonaliseerde Gesprekken",
                    description: "Geniet van op maat gemaakte interacties die natuurlijk en menselijk aanvoelen."
                },
                {
                    title: "Talen Leren Wordt Leuk",
                    description: "Oefen talen met een vrolijke gids die het leren plezierig maakt."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI Naam:",
            text: "Fah (20 jaar oud)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Persoonlijkheid:",
            text: "Thaise vrouw, Vrolijk, benaderbaar en charmant",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "Technologieën:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Talen:",
            text: "Meerdere talen",
        }
    ],
    line: {
        link: "https://lin.ee/ODTzbwO",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiPloyEnglish
    ],
};