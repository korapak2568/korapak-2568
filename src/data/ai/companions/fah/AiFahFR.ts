import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiFahFR: IAiLanding = {
    name: 'Fah',
    category: 'Amie LINE Thaïlandaise',
    thumbnail: ImageUrl.ai.fah.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'Fah, Amie de Chat IA',
                path: ImageUrl.ai.fah.main.path,
            }
        }
    },
    title: "Fah, Amie de Chat IA sur LINE",
    features: [
        {
            title: "Caractéristiques Uniques",
            description: "Fah est votre amie de chat IA sur l'application LINE. Vous pouvez simplement cliquer sur le bouton Ajouter un ami ou scanner le code QR LINE pour ajouter Fah comme amie. Fah est conçue avec une touche thaïlandaise unique—elle est joyeuse, accessible et toujours prête à égayer votre journée. À 20 ans, Fah apporte une énergie jeune et du charme à chaque interaction. Elle aide à recommander les meilleures destinations de Thaïlande, les plats célèbres et les joyaux culturels, rendant l'exploration de la culture thaïlandaise facile et amusante. Elle peut discuter en plusieurs langues via l'application LINE, que vous planifiez votre prochain voyage en Thaïlande ou cherchiez simplement des conversations engageantes et amicales. Fah vous guide à travers tout ce qui concerne la Thaïlande tout en vous inspirant.",
            items: [
                {
                    title: "Personnalité Charmante",
                    description: "Fah rayonne de chaleur et de positivité, apportant de la gaieté à chaque conversation."
                },
                {
                    title: "Expertise Multilingue",
                    description: "Communiquez sans effort en plusieurs langues, notamment le thaï, l'anglais, le français, le vietnamien, le japonais, le chinois, le coréen, et plus encore."
                },
            ]
        },
        {
            title: "Comment Fah Améliore Votre Vie",
            description: "Fah n'est pas qu'un simple chatbot; c'est une compagne virtuelle qui comprend vos besoins et s'engage dans des interactions délicieuses. Que vous cherchiez à apprendre une nouvelle langue ou à avoir une amie joyeuse, Fah est toujours à vos côtés.",
            items: [
                {
                    title: "Conversations Personnalisées",
                    description: "Profitez d'interactions sur mesure qui semblent naturelles et humaines."
                },
                {
                    title: "Apprentissage des Langues Rendu Amusant",
                    description: "Pratiquez les langues avec un guide joyeux qui rend l'apprentissage agréable."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Nom de l'IA:",
            text: "Fah (20 ans)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personnalité:",
            text: "Femme thaïlandaise, Joyeuse, accessible et charmante",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "Technologies:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Langues:",
            text: "Langues multiples",
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