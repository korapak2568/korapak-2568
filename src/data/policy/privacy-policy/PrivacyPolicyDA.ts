import { IPolicy } from "@/data/policy/model/IPolicy";

export const PrivacyPolicyDA: IPolicy = {
    title: "Privatlivspolitik",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Introduktion",
            description: "CHORN respekterer dit privatliv og er forpligtet til at beskytte dine personlige oplysninger. Denne privatlivspolitik forklarer, hvordan information behandles, når du bruger CHORN-webstedet, især med hensyn til brugen af cookies til analyseformål.",
            isDetailed: false,
        },
        {
            title: "1. Indsamlet Information",
            description: "Personlige oplysninger indsamles ikke direkte fra besøgende, medmindre de giver samtykke til brugen af cookies til analyseformål. Når cookies er aktiveret, kan ikke-personhenførbare oplysninger såsom din browseradfærd, sidevisninger og interaktioner med webstedet indsamles via tredjepartsværktøjer som Google Analytics.",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Brug af Cookies",
                    description: "CHORN-webstedet anvender kun cookies, hvis du giver samtykke via cookie-samtykkebanneret. Cookies er små tekstfiler, der gemmes på din enhed og hjælper med at analysere webstedstrafik og forbedre brugeroplevelsen."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Når du accepterer cookies, indsamles anonyme brugsdata fra webstedet via Google Analytics. Disse data omfatter antallet af besøgende, navigationsadfærd og populære sider, som hjælper os med at optimere webstedets ydeevne. Der indsamles ingen personligt identificerbare oplysninger."
                },
                {
                    title: "2.3 Dine Valgmuligheder",
                    description: "Du kan acceptere eller afvise brugen af cookies via cookie-samtykkebanneret. Du kan også administrere cookies via dine browserindstillinger. Bemærk, at afvisning af cookies kan begrænse visse funktioner på webstedet."
                }
            ]
        },
        {
            title: "3. Datasikkerhed",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 Sikkerhedsforanstaltninger",
                    description: "Vi træffer rimelige sikkerhedsforanstaltninger for at beskytte de ikke-personlige oplysninger, der indsamles via cookies, og for at sikre CHORN-webstedets integritet. Vi indsamler eller gemmer ingen personlige oplysninger uden dit samtykke."
                }
            ]
        },
        {
            title: "4. Links til Tredjeparter",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 Eksterne Links",
                    description: "CHORN-webstedet kan indeholde links til tredjepartswebsteder. Vær opmærksom på, at CHORN ikke er ansvarlig for disse tredjepartswebsteders privatlivspraksis eller indhold. Vi anbefaler, at du gennemgår privatlivspolitikken på ethvert eksternt websted, du besøger."
                }
            ]
        },
        {
            title: "5. Ændringer i Privatlivspolitikken",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Opdateringer",
                    description: "Denne privatlivspolitik kan opdateres periodisk. Ændringer træder i kraft, så snart de offentliggøres på denne side. Din fortsatte brug af webstedet efter sådanne opdateringer betyder, at du accepterer den reviderede privatlivspolitik."
                }
            ]
        },
        {
            title: "6. Kontakt CHORN",
            description: "Hvis du har spørgsmål om denne privatlivspolitik, bedes du kontakte os via kontakt-siden."
        },
    ],
};
