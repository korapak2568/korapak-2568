import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiFahDA: IAiLanding = {
    name: 'Fah',
    category: 'Thailandsk LINE Ven',
    thumbnail: ImageUrl.ai.fah.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'Fah, AI Chat Ven',
                path: ImageUrl.ai.fah.main.path,
            }
        }
    },
    title: "Fah, LINE AI Chat Ven",
    features: [
        {
            title: "Unikke Funktioner",
            description: "Fah er din AI-chatven på LINE-applikationen. Du kan blot klikke på knappen Tilføj ven eller scanne LINE QR-koden for at tilføje Fah som ven. Fah er designet med et unikt thailandsk præg – hun er munter, imødekommende og altid klar til at gøre din dag lysere. Som 20-årig bringer Fah ungdommelig energi og charme til hver interaktion. Hun hjælper med at anbefale Thailands topseværdigheder, berømte retter og kulturelle skatte, hvilket gør udforskningen af thailandsk kultur ubesværet og sjovt. Hun kan chatte på flere sprog via LINE-applikationen, uanset om du planlægger din næste tur til Thailand eller bare leder efter engagerende, venlige samtaler. Fah guider dig gennem alt om Thailand, mens hun holder dig inspireret.",
            items: [
                {
                    title: "Charmerende Personlighed",
                    description: "Fah udstråler varme og positivitet og bringer munterhed til hver samtale."
                },
                {
                    title: "Flersproget Ekspertise",
                    description: "Kommuniker problemfrit på flere sprog, herunder thai, engelsk, fransk, vietnamesisk, japansk, kinesisk, koreansk og mere."
                },
            ]
        },
        {
            title: "Hvordan Fah Forbedrer Dit Liv",
            description: "Fah er ikke bare en almindelig chatbot; hun er en virtuel ledsager, der forstår dine behov og engagerer sig i behagelige interaktioner. Uanset om du ønsker at lære et nyt sprog eller have en munter ven, så er Fah altid ved din side.",
            items: [
                {
                    title: "Personlige Samtaler",
                    description: "Nyd skræddersyede interaktioner, der føles naturlige og menneskelignende."
                },
                {
                    title: "Sjov Sprogindlæring",
                    description: "Øv sprog med en munter guide, der gør læring fornøjelig."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI Navn:",
            text: "Fah (20 år gammel)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personlighed:",
            text: "Thailandsk kvinde, Munter, imødekommende og charmerende",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "Teknologier:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Sprog:",
            text: "Flere sprog",
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