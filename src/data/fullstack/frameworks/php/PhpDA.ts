import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const PhpDA: IFullStackStack = {
    title: "PHP",
    description: "PHP er et populært server-side scriptsprog, der er bredt anvendt til webudvikling. Frameworks som Symfony, Laravel, Phalcon og templatemotorer som Twig samt platforme som WordPress og dets headless-variant har løftet PHP-udvikling ved at tilbyde strukturerede, effektive og skalerbare løsninger til komplekse webapplikationer.",
    image: ImageUrl.backend.frameworks.php.thumbnail,
    alt: "Logo der repræsenterer PHP programmeringssprog",
    readMore: "Udforsk flere PHP full-stack udviklingsløsninger",
    link: "/technical-expertise/full-stack-developer/php-developer",
    features: [
        {
            title: "PHP Udvikling",
            description: "PHP er et populært server-side scriptsprog, der er bredt anvendt til webudvikling. Frameworks som Symfony, Laravel, Phalcon og templatemotorer som Twig samt platforme som WordPress og dets headless-variant har løftet PHP-udvikling ved at tilbyde strukturerede, effektive og skalerbare løsninger til komplekse webapplikationer.",
            list: []
        },
        {
            title: "Struktureret Udvikling",
            description: "Symfony og Laravel tilbyder en struktureret tilgang til PHP-udvikling og fremmer best practices og designmønstre. Symfony leverer et genanvendeligt sæt komponenter, mens Laravel fokuserer på udviklerproduktivitet med sit elegante syntax og værktøjer. Twig, templatemotoren brugt i Symfony, tilbyder en fleksibel, sikker og hurtig måde at designe skabeloner på. Phalcon, et højtydende framework leveret som en C-udvidelse, giver lavniveauoptimering og enestående hastighed, hvilket sikrer effektiv ressourcehåndtering.",
            list: [
                "Server-side scripting",
                "Let at lære",
                "Stort økosystem",
                "Populære frameworks",
                "WordPress-integration",
                "God til webudvikling",
                "Stærkt fællesskab"
            ]
        },
        {
            title: "Hurtig Udvikling",
            description: "Laravel, kendt for sit udtryksfulde syntax og kraftfulde værktøjer, muliggør hurtig udvikling og implementering af webapplikationer. Funktioner som Eloquent ORM, Blade templating engine og Laravel Artisan CLI-værktøjet effektiviserer udviklingsopgaver. Phalcon styrker hurtig udvikling med sin robuste ydeevne og lavniveauarkitektur. WordPress muliggør hurtig opsætning og et stort udvalg af plugins og temaer, hvilket gør det muligt hurtigt at implementere funktionsrige hjemmesider. Headless WordPress adskiller frontend og backend, hvilket tillader brugen af moderne JavaScript-frameworks som React eller Vue for en dynamisk og responsiv brugeroplevelse.",
            list: []
        },
        {
            title: "Fællesskab og Økosystem",
            description: "PHP har et stort fællesskab og et rigt økosystem af biblioteker, plugins og frameworks. Både Symfony og Laravel nyder godt af aktiv fællesskabsstøtte, omfattende dokumentation og mange tredjeparts-pakker, hvilket gør PHP-udvikling effektiv og fornøjelig. Phalcon har et voksende fællesskab og tilbyder detaljeret dokumentation og vejledninger til udviklere. WordPress har et omfattende økosystem med en stor brugerbase, der tilbyder mange plugins og temaer, mens Headless WordPress udnytter fleksibiliteten i moderne frontend-frameworks, understøttet af et robust fællesskab og ressourcer.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad bruges PHP til?",
            answer: "PHP er et server-side scriptsprog designet til webudvikling og anvendes bredt til at skabe dynamiske websider."
        },
        {
            question: "Hvad er Symfony og Laravel?",
            answer: "Symfony og Laravel er populære PHP-frameworks, der muliggør udvikling af robuste og skalerbare webapplikationer."
        },
        {
            question: "Hvorfor bruge WordPress?",
            answer: "WordPress er et alsidigt content management system bygget på PHP, ideelt til oprettelse af blogs, hjemmesider og online butikker."
        }
    ]
}
