import { IPolicy } from "@/data/policy/model/IPolicy";

export const PrivacyPolicyNL: IPolicy = {
    title: "Privacybeleid",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Inleiding",
            description: "CHORN respecteert uw privacy en zet zich in om uw persoonlijke gegevens te beschermen. Dit privacybeleid legt uit hoe informatie wordt verwerkt bij het gebruik van de CHORN-website, met name met betrekking tot het gebruik van cookies voor analytische doeleinden.",
            isDetailed: false,
        },
        {
            title: "1. Verzamelde Informatie",
            description: "Persoonlijke gegevens worden niet rechtstreeks van bezoekers verzameld, tenzij zij toestemming geven voor het gebruik van cookies voor analytische doeleinden. Wanneer cookies zijn ingeschakeld, kunnen niet-identificeerbare gegevens zoals browsegedrag, paginaweergaven en interacties met de website worden verzameld via tools van derden zoals Google Analytics.",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Gebruik van Cookies",
                    description: "De CHORN-website maakt gebruik van cookies, maar alleen als u toestemming geeft via het cookie-toestemmingsvenster. Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen en helpen bij het analyseren van websiteverkeer en het verbeteren van de gebruikerservaring."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Wanneer u cookies accepteert, worden anonieme gegevens over het gebruik van de website verzameld via Google Analytics. Deze gegevens omvatten het aantal bezoekers, navigatiegedrag en populaire pagina's, die helpen bij het optimaliseren van de websiteprestaties. Er worden geen persoonlijk identificeerbare gegevens verzameld."
                },
                {
                    title: "2.3 Uw Keuzes",
                    description: "U kunt het gebruik van cookies beheren door te accepteren of te weigeren via het cookie-toestemmingsvenster. U kunt cookies ook beheren via de instellingen van uw browser. Houd er rekening mee dat het weigeren van cookies bepaalde functies van de website kan beperken."
                }
            ]
        },
        {
            title: "3. Gegevensbeveiliging",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 Beveiligingsmaatregelen",
                    description: "Er worden redelijke beveiligingsmaatregelen getroffen om de via cookies verzamelde niet-persoonlijke gegevens te beschermen en de integriteit van de CHORN-website te waarborgen. Er worden geen persoonlijke gegevens verzameld of opgeslagen zonder uw toestemming."
                }
            ]
        },
        {
            title: "4. Links naar Derden",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 Externe Links",
                    description: "De CHORN-website kan links bevatten naar websites van derden. Houd er rekening mee dat CHORN niet verantwoordelijk is voor het privacybeleid of de inhoud van deze externe websites. We raden u aan het privacybeleid van elke externe website die u bezoekt te bekijken."
                }
            ]
        },
        {
            title: "5. Wijzigingen in het Privacybeleid",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Updates",
                    description: "Dit privacybeleid kan periodiek worden bijgewerkt. Wijzigingen treden onmiddellijk in werking zodra ze op deze pagina worden geplaatst. Door de website te blijven gebruiken na dergelijke updates, accepteert u het gewijzigde privacybeleid."
                }
            ]
        },
        {
            title: "6. Contact opnemen met CHORN",
            description: "Als u vragen heeft over dit privacybeleid, neem dan contact met ons op via de contactpagina."
        },
    ],
};