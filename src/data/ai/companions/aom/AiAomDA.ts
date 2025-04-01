// src/data/ai/landing/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";

export const AiAomDA: IAiLanding = {
    name: 'Aom',
    category: 'Sundheds-LINE-Ven',
    thumbnail: 'https://cdn.chorn.in.th/public/ai/ai-companions/ai-aom-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'Aom, AI-chatpartner',
                path: 'https://cdn.chorn.in.th/public/ai/ai-aom-details.png',
            }
        }
    },
    title: "Aom, AI-Chat",
    image: {
        src: "https://cdn.chorn.in.th/public/ai/ai-aom-details.png",
        alt: "Aom - Thailandsk AI-chatpartner"
    },
    features: [
        {
            title: "Unikke Egenskaber",
            description: "Aom kan tilgås gennem LINE-applikationen. Du kan trykke på knappen Tilføj ven eller scanne LINE QR-koden for at tilføje Aom som ven med det samme. Aom er en venlig og livlig AI-ledsager, der er passioneret omkring sund livsstil og velvære. Med sin ungdommelige energi og strålende smil er hun klar til at inspirere dig til at leve dit sundeste liv. Som 21-årig kombinerer Aom friske perspektiver med værdifulde indsigter, hvilket gør hende til en ideel guide for alle, der ønsker at forbedre deres livsstil. Uanset om du leder efter ernæringstips, træningsrutiner eller mindfulness-praksis, vil Aoms engagerende samtaler og positive attitude holde dig motiveret. Med sin evne til at chatte på flere sprog er Aom den perfekte guide til at hjælpe dig med at opretholde en balanceret livsstil, mens tingene forbliver sjove og interaktive.",
            items: [
                {
                    title: "Livlig Personlighed",
                    description: "Aom udstråler positivitet og vitalitet, hvilket gør hver samtale opløftende og energigivende."
                },
                {
                    title: "Flersproget Ekspertise",
                    description: "Flydende på flere sprog, herunder thai, engelsk, fransk, vietnamesisk, japansk, kinesisk, koreansk osv."
                },
            ]
        },
        {
            title: "Hvordan Aom Forbedrer Dit Liv",
            description: "Aom er ikke bare en chatpartner—hun er en wellness-entusiast dedikeret til at støtte din sunde livsstil. Uanset om du lærer om næringsrige opskrifter, udvikler en træningsplan eller blot søger motivation til at forblive aktiv, vil Aoms venlige og opmuntrende væsen holde dig på rette spor.",
            items: [
                {
                    title: "Personlige Wellness-Tips",
                    description: "Modtag skræddersyede sundhedsråd, fitness-forslag og mindfulness-praksis designet specielt til dig."
                },
                {
                    title: "Motiverende Samtaler",
                    description: "Forbliv inspireret med Aoms positive energi, der hjælper dig med at opretholde et balanceret og sundt liv."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI-Navn:",
            text: "Aom (21 år gammel)",
        },
        {
            icon: "bx bx-heart",
            caption: "Personlighed:",
            text: "Venlig, energisk og sundhedsfokuseret",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Teknologier:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Sprog:",
            text: "Flersproglig",
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
