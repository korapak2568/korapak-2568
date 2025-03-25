import { IPolicy } from "@/data/policy/model/IPolicy";

export const PrivacyPolicyFR: IPolicy = {
    title: "Politique de Confidentialité",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Introduction",
            description: "CHORN respecte votre vie privée et s'engage à protéger vos informations personnelles. Cette politique de confidentialité explique comment les informations peuvent être traitées lors de l'utilisation du site Web de CHORN, en particulier concernant l'utilisation des cookies à des fins d'analyse.",
            isDetailed: false,
        },
        {
            title: "1. Informations Collectées",
            description: "Les informations personnelles ne sont pas collectées directement auprès des visiteurs sauf s'ils consentent à l'utilisation des cookies à des fins d'analyse. Lorsque les cookies sont activés, des informations non identifiables personnellement telles que le comportement de navigation, les pages consultées et les interactions avec le site peuvent être collectées via des outils tiers comme Google Analytics.",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Utilisation des Cookies",
                    description: "Le site Web de CHORN utilise des cookies, mais uniquement si le consentement est donné via le module de consentement aux cookies. Les cookies sont de petits fichiers texte stockés sur votre appareil qui aident à analyser le trafic du site et à améliorer l'expérience utilisateur."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Une fois les cookies acceptés, des données anonymisées sur l'utilisation du site Web sont collectées via Google Analytics. Ces données incluent le nombre de visiteurs, le comportement de navigation et les pages populaires, aidant ainsi à optimiser les performances du site Web. Aucune information personnellement identifiable n'est collectée."
                },
                {
                    title: "2.3 Vos Choix",
                    description: "Vous pouvez contrôler l'utilisation des cookies en acceptant ou en refusant via le module de consentement aux cookies. Les paramètres des cookies peuvent également être gérés via votre navigateur. Notez que le refus des cookies peut limiter certaines fonctionnalités du site Web."
                }
            ]
        },
        {
            title: "3. Sécurité des Données",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 Mesures de Sécurité",
                    description: "Des mesures de sécurité raisonnables sont mises en place pour protéger les informations non personnelles collectées via les cookies et garantir l'intégrité du site Web de CHORN. Aucune information personnelle n'est collectée ou stockée sans consentement."
                }
            ]
        },
        {
            title: "4. Liens vers des Sites Tiers",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 Liens Externes",
                    description: "Le site Web de CHORN peut inclure des liens vers des sites Web tiers. Veuillez noter que CHORN n'est pas responsable des pratiques de confidentialité ou du contenu de ces sites tiers. Il est recommandé de consulter les politiques de confidentialité des sites externes visités."
                }
            ]
        },
        {
            title: "5. Modifications de la Politique de Confidentialité",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Modifications",
                    description: "Cette politique de confidentialité peut être mise à jour périodiquement. Les modifications prennent effet immédiatement après leur publication sur cette page. L'utilisation continue du site Web après les mises à jour constitue une acceptation de la politique de confidentialité révisée."
                }
            ]
        }
    ],
};