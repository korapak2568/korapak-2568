import { IPolicy } from "@/data/policy/model/IPolicy";

export const PrivacyPolicyDE: IPolicy = {
    title: "Datenschutzerklärung",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Einleitung",
            description: "CHORN respektiert Ihre Privatsphäre und verpflichtet sich, Ihre personenbezogenen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie Informationen bei der Nutzung der CHORN-Website verarbeitet werden, insbesondere im Zusammenhang mit der Verwendung von Cookies zu Analysezwecken.",
            isDetailed: false,
        },
        {
            title: "1. Erfasste Informationen",
            description: "Personenbezogene Daten werden nicht direkt von Besuchern erfasst, es sei denn, sie stimmen der Verwendung von Cookies zu Analysezwecken zu. Wenn Cookies aktiviert sind, können nicht-personenbezogene Informationen wie Ihr Surfverhalten, Seitenaufrufe und Interaktionen mit der Website über Drittanbieter-Tools wie Google Analytics erfasst werden.",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Verwendung von Cookies",
                    description: "Die CHORN-Website verwendet Cookies nur, wenn Sie über das Cookie-Einwilligungsbanner zustimmen. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden und zur Analyse des Website-Verkehrs und zur Verbesserung der Benutzererfahrung dienen."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Wenn Sie Cookies akzeptieren, werden anonyme Nutzungsdaten der Website über Google Analytics erfasst. Dazu gehören Besucherzahlen, Navigationsverhalten und beliebte Seiten, die zur Optimierung der Website-Leistung beitragen. Es werden keine personenbezogenen Daten erfasst."
                },
                {
                    title: "2.3 Ihre Wahlmöglichkeiten",
                    description: "Sie können die Verwendung von Cookies über das Cookie-Einwilligungsbanner akzeptieren oder ablehnen. Außerdem können Sie Cookies über Ihre Browsereinstellungen verwalten. Bitte beachten Sie, dass das Ablehnen von Cookies die Funktionalität der Website einschränken kann."
                }
            ]
        },
        {
            title: "3. Datensicherheit",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 Sicherheitsmaßnahmen",
                    description: "Wir ergreifen angemessene Sicherheitsmaßnahmen, um die über Cookies erfassten nicht-personenbezogenen Informationen zu schützen und die Integrität der CHORN-Website zu gewährleisten. Ohne Ihre Zustimmung werden keine personenbezogenen Daten erfasst oder gespeichert."
                }
            ]
        },
        {
            title: "4. Links zu Dritten",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 Externe Links",
                    description: "Die CHORN-Website kann Links zu Websites Dritter enthalten. Bitte beachten Sie, dass CHORN keine Verantwortung für die Datenschutzpraktiken oder Inhalte dieser Drittanbieter-Websites übernimmt. Wir empfehlen Ihnen, die Datenschutzrichtlinien jeder besuchten externen Website zu überprüfen."
                }
            ]
        },
        {
            title: "5. Änderungen an der Datenschutzerklärung",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Aktualisierungen",
                    description: "Diese Datenschutzerklärung kann regelmäßig aktualisiert werden. Änderungen treten in Kraft, sobald sie auf dieser Seite veröffentlicht werden. Ihre fortgesetzte Nutzung der Website nach solchen Aktualisierungen bedeutet, dass Sie die überarbeitete Datenschutzerklärung akzeptieren."
                }
            ]
        },
        {
            title: "6. Kontakt zu CHORN",
            description: "Falls Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über die Kontaktseite."
        },
    ],
};