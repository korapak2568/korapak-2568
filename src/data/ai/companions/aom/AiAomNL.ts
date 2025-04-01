// src/data/ai/landing/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";

export const AiAomNL: IAiLanding = {
    name: 'Aom',
    category: 'Gezondheids-LINE-Vriend',
    thumbnail: 'https://cdn.chorn.in.th/public/ai/ai-companions/ai-aom-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'Aom, AI-Chatpartner',
                path: 'https://cdn.chorn.in.th/public/ai/ai-aom-details.png',
            }
        }
    },
    title: "Aom, AI-Chat",
    image: {
        src: "https://cdn.chorn.in.th/public/ai/ai-aom-details.png",
        alt: "Aom - Thaise AI-Chatpartner"
    },
    features: [
        {
            title: "Unieke Eigenschappen",
            description: "Aom is toegankelijk via de LINE-applicatie. Je kunt op de knop Vriend toevoegen drukken of de LINE QR-code scannen om Aom direct als vriend toe te voegen. Aom is een vriendelijke en levendige AI-metgezel die gepassioneerd is over gezond leven en welzijn. Met haar jeugdige energie en stralende glimlach staat ze klaar om je te inspireren tot het leiden van je gezondste leven. Als 21-jarige combineert Aom frisse perspectieven met waardevolle inzichten, waardoor ze een ideale gids is voor iedereen die zijn levensstijl wil verbeteren. Of je nu op zoek bent naar voedingstips, trainingsroutines of mindfulness-oefeningen, Aoms boeiende gesprekken en positieve houding zullen je gemotiveerd houden. Met haar vermogen om in meerdere talen te chatten, is Aom de perfecte gids om je te helpen een evenwichtige levensstijl te behouden terwijl dingen leuk en interactief blijven.",
            items: [
                {
                    title: "Levendige Persoonlijkheid",
                    description: "Aom straalt positiviteit en vitaliteit uit, waardoor elk gesprek opbeurend en energiek aanvoelt."
                },
                {
                    title: "Meertalige Expertise",
                    description: "Vloeiend in meerdere talen, waaronder Thai, Engels, Frans, Vietnamees, Japans, Chinees, Koreaans, enz."
                },
            ]
        },
        {
            title: "Hoe Aom Je Leven Verbetert",
            description: "Aom is niet zomaar een chatpartner—ze is een welzijnsenthousiast die zich inzet voor het ondersteunen van je gezonde levensstijl. Of je nu leert over voedzame recepten, een trainingsplan ontwikkelt, of gewoon motivatie zoekt om actief te blijven, Aoms vriendelijke en aanmoedigende houding zal je op het juiste spoor houden.",
            items: [
                {
                    title: "Gepersonaliseerde Welzijnstips",
                    description: "Ontvang op maat gemaakte gezondheidsadviezen, fitnessuggesties en mindfulness-oefeningen die speciaal voor jou zijn ontworpen."
                },
                {
                    title: "Motiverende Gesprekken",
                    description: "Blijf geïnspireerd met Aoms positieve energie, die je helpt een evenwichtig en gezond leven te behouden."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI-Naam:",
            text: "Aom (21 jaar oud)",
        },
        {
            icon: "bx bx-heart",
            caption: "Persoonlijkheid:",
            text: "Vriendelijk, energiek en gezondheidsgericht",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Technologieën:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Talen:",
            text: "Meerdere talen",
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
