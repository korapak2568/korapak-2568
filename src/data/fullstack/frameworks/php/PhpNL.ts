import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const PhpNL: IFullStackStack = {
    title: "PHP",
    description: "PHP is een populaire server-side scriptingtaal die veel wordt gebruikt voor webontwikkeling. Frameworks zoals Symfony, Laravel, Phalcon, en sjabloonengines zoals Twig, samen met platforms zoals WordPress en de headless variant, hebben de PHP-ontwikkeling naar een hoger niveau getild door gestructureerde, efficiënte en schaalbare oplossingen te bieden voor het bouwen van complexe webapplicaties.",
    image: ImageUrl.backend.frameworks.php.thumbnail,
    alt: "Logo dat de PHP programmeertaal vertegenwoordigt",
    readMore: "Verken meer PHP full-stack ontwikkelingsoplossingen",
    link: "/technical-expertise/full-stack-developer/php-developer",
    features: [
        {
            title: "PHP Ontwikkeling",
            description: "PHP is een populaire server-side scriptingtaal die veel wordt gebruikt voor webontwikkeling. Frameworks zoals Symfony, Laravel, Phalcon, en sjabloonengines zoals Twig, samen met platforms zoals WordPress en de headless variant, hebben de PHP-ontwikkeling naar een hoger niveau getild door gestructureerde, efficiënte en schaalbare oplossingen te bieden voor het bouwen van complexe webapplicaties.",
            list: []
        },
        {
            title: "Gestructureerde Ontwikkeling",
            description: "Symfony en Laravel bieden een gestructureerde benadering van PHP-ontwikkeling, waarbij best practices en ontwerpprincipes worden gepromoot. Symfony biedt een herbruikbare set componenten, terwijl Laravel de nadruk legt op de productiviteit van de ontwikkelaar met zijn elegante syntaxis en tools. Twig, de sjabloonengine die in Symfony wordt gebruikt, biedt een flexibele, veilige en snelle manier om sjablonen te ontwerpen. Phalcon, een high-performance framework geleverd als een C-extensie, biedt lage-niveau optimalisatie en uitzonderlijke snelheid, wat zorgt voor efficiënte resourcebeheer.",
            list: [
                "Server-side scripting",
                "Gemakkelijk te leren",
                "Groot ecosysteem",
                "Populaire frameworks",
                "WordPress integratie",
                "Geweldig voor webontwikkeling",
                "Sterke gemeenschap"
            ]
        },
        {
            title: "Snelle Ontwikkeling",
            description: "Laravel, bekend om zijn expressieve syntaxis en krachtige tools, maakt snelle ontwikkeling en implementatie van webapplicaties mogelijk. Functies zoals Eloquent ORM, Blade sjabloonengine en de Laravel Artisan command-line tool stroomlijnen ontwikkeltaken. Phalcon verbetert snelle ontwikkeling met zijn robuuste prestaties en low-level architectuur. WordPress biedt een snelle installatie en een breed scala aan plugins en thema's, waardoor ontwikkelaars snel feature-rijke websites kunnen implementeren. Headless WordPress scheidt de front-end ontwikkelaar van de back-end, waardoor het gebruik van moderne JavaScript-frameworks zoals React of Vue mogelijk wordt voor een dynamische en responsieve gebruikerservaring.",
            list: []
        },
        {
            title: "Gemeenschap en Ecosysteem",
            description: "PHP heeft een enorme gemeenschap en een rijk ecosysteem van bibliotheken, plugins en frameworks. Zowel Symfony als Laravel profiteren van actieve gemeenschapssteun, uitgebreide documentatie en veel third-party pakketten, wat de PHP-ontwikkeling efficiënt en plezierig maakt. Phalcon heeft een groeiende gemeenschap en biedt gedetailleerde documentatie en tutorials om ontwikkelaars te ondersteunen. WordPress heeft een uitgebreid ecosysteem met een grote gebruikersbasis en biedt talloze plugins en thema's, terwijl Headless WordPress de flexibiliteit van moderne front-end frameworks benut, ondersteund door een robuuste gemeenschap en middelen.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Waarvoor wordt PHP gebruikt?",
            answer: "PHP is een server-side scriptingtaal die is ontworpen voor webontwikkeling en veel wordt gebruikt voor het maken van dynamische webpagina's."
        },
        {
            question: "Wat zijn Symfony en Laravel?",
            answer: "Symfony en Laravel zijn populaire PHP-frameworks die de ontwikkeling van robuuste en schaalbare webapplicaties vergemakkelijken."
        },
        {
            question: "Waarom WordPress gebruiken?",
            answer: "WordPress is een veelzijdig contentmanagementsysteem gebouwd op PHP, ideaal voor het maken van blogs, websites en webshops."
        }
    ]
}